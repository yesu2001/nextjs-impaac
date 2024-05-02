import { useSnackbar } from "notistack";
import { useEffect } from "react";
import * as Yup from "yup";
// firebase
import {
  getAuth,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";

// form
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
// @mui
import { LoadingButton } from "@mui/lab";
import { FormHelperText, OutlinedInput, Stack } from "@mui/material";
// routes
// components
import { FormProvider, RHFTextField } from "../../../components/hook-form";
import { signup } from "../../../helper/auth";
import useAuth from "../../../hooks/useAuth";
import { signIn } from "next-auth/react";

// ----------------------------------------------------------------------

export default function VerifyCodeForm({ user }) {
  const auth = getAuth();

  const { enqueueSnackbar } = useSnackbar();
  const { refreshUser } = useAuth();

  const VerifyCodeSchema = Yup.object().shape({
    code1: Yup.string().required("Code is required"),
    code2: Yup.string().required("Code is required"),
    code3: Yup.string().required("Code is required"),
    code4: Yup.string().required("Code is required"),
    code5: Yup.string().required("Code is required"),
    code6: Yup.string().required("Code is required"),
  });

  const defaultValues = {
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  };

  const methods = useForm({
    mode: "all",
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues,
  });

  const {
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const values = watch();

  useEffect(() => {
    const target = document.querySelector("input.field-code");

    target?.addEventListener("paste", handlePaste);

    return () => {
      target?.removeEventListener("paste", handlePaste);
    };
  }, []);

  const handlePaste = (event) => {
    let data = event.clipboardData.getData("text");

    data = data.split("");

    [].forEach.call(document.querySelectorAll(".field-code"), (node, index) => {
      node.value = data[index];

      const fieldIndex = `code${index + 1}`;

      setValue(fieldIndex, data[index]);
    });

    event.preventDefault();
  };

  const handleChangeWithNextField = (event, handleChange) => {
    const { maxLength, value, name } = event.target;

    const fieldIndex = name.replace("code", "");

    const fieldIntIndex = Number(fieldIndex);

    // if (value.length >= maxLength) {
    //   if (fieldIntIndex < 6) {
    //     const nextfield = document.querySelector(`input[name=code${fieldIntIndex + 1}]`);

    //     if (nextfield !== null) {
    //       nextfield.focus();
    //     }
    //   }
    // }

    handleChange(event);
  };

  const inputfocus = (elmnt, handleChange) => {
    const { maxLength, value, name } = elmnt.target;

    const fieldIndex = name.replace("code", "");

    const fieldIntIndex = Number(fieldIndex);
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const nextfield = document.querySelector(
        `input[name=code${fieldIntIndex - 1}]`
      );

      if (nextfield !== null) {
        nextfield.focus();
      }
    } else {
      const nextfield = document.querySelector(
        `input[name=code${fieldIntIndex + 1}]`
      );
      if (nextfield !== null) {
        nextfield.focus();
      }
    }
    handleChange(elmnt);
  };

  const onSubmit = async (data) => {
    try {
      const otp = Object.values(data).join("");
      const { fullName, email, password, category } = user;
      const confirmationResult = await window.confirmationResult;
      const userRole = category === "organisation";

      await confirmationResult
        .confirm(otp)
        .then(async (result) => {
          localStorage.setItem("isNewUser", result?._tokenResponse?.isNewUser);

          if (!result.user.email) {
            await updateEmail(auth.currentUser, email);
            await updateProfile(auth.currentUser, { displayName: fullName });
            await updatePassword(auth.currentUser, password);
            const { phoneNumber } = result.user;
            await signup(auth.currentUser.accessToken, {
              name: fullName,
              email,
              phonenumber: phoneNumber,
              user_role: { ngo: userRole },
            }).then((data) => {
              if (data.error) {
                enqueueSnackbar(data.error, {
                  variant: "error",
                });
              }
              refreshUser(result.user.uid, result.user.accessToken);
            });
          }
          signIn("credentials", {
            data: JSON.stringify({
              accessToken: auth.currentUser.accessToken,
              ...result.user,
            }),
            callbackUrl: `http://localhost:3000/home`,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage =
            errorCode === "auth/invalid-verification-code"
              ? "Invalid Code or OTP"
              : error.message;
          console.log(errorMessage);
          enqueueSnackbar(errorMessage, {
            variant: "error",
          });
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Stack direction="row" spacing={2} justifyContent="center">
          {/* <RHFTextField name="otp" label="otp" /> */}
          {Object.keys(values).map((name, index) => (
            <Controller
              key={name}
              name={`code${index + 1}`}
              control={control}
              render={({ field, fieldState: { error } }) => (
                <OutlinedInput
                  {...field}
                  pattern="[0-9]*"
                  error={!!error}
                  autoFocus={index === 0}
                  placeholder="-"
                  onKeyUp={(e) => inputfocus(e, field.onChange)}
                  onChange={(event) =>
                    handleChangeWithNextField(event, field.onChange)
                  }
                  inputProps={{
                    className: "field-code",
                    inputMode: "numeric",
                    maxLength: 1,
                    sx: {
                      p: 0,
                      textAlign: "center",
                      width: { xs: 36, sm: 56 },
                      height: { xs: 36, sm: 56 },
                    },
                  }}
                />
              )}
            />
          ))}
        </Stack>

        {(!!errors.code1 ||
          !!errors.code2 ||
          !!errors.code3 ||
          !!errors.code4 ||
          !!errors.code5 ||
          !!errors.code6) && (
          <FormHelperText error sx={{ px: 2 }}>
            OTP is required
          </FormHelperText>
        )}

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          sx={{ mt: 3 }}
        >
          Verify
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
