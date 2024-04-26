"use client";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import * as Yup from "yup";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { LoadingButton } from "@mui/lab";
import { Alert, IconButton, InputAdornment, Link, Stack } from "@mui/material";
// hooks
import useAuth from "@/hooks/useAuth";
import useIsMountedRef from "@/hooks/useIsMountedRef";
// components
import { FormProvider, RHFSelect, RHFTextField } from "@/components/hook-form";
import Iconify from "@/components/Iconify";
import { firebaseGetNumber } from "@/helper/firebase";
import { PHONEREGEX } from "@/utils/regex";
import { countries } from "@/_mock/_countries";
import VerifyCodePopup from "../verify-code/VerifyCodePopup";
import { useRouter } from "next/navigation";

// ----------------------------------------------------------------------

export default function LoginForm() {
  const { generateRecaptcha, grecaptcha, login, isAuthenticated } = useAuth();
  const route = useRouter();
  const auth = getAuth();

  const { enqueueSnackbar } = useSnackbar();

  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);
  const [showCountryBox, setCountryBox] = useState(false);
  const [num, setNum] = useState("");
  const [openConfirm, setOpenConfirm] = useState(false);
  const [user, setUser] = useState();
  const [showPass, setShowPass] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required("Mobile Number or Email address is required"),
  });

  const defaultValues = {
    phoneNumber: "",
    password: "",
    country: "91",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (PHONEREGEX.test(values.email)) {
      setCountryBox(true);
      setNum(values.email);
    } else {
      setCountryBox(false);
    }
  }, [values.email]);

  useEffect(() => {
    if (isAuthenticated) {
      setOpenConfirm(false);
      console.log("Authenticated", isAuthenticated);
      route.push("/dashboard/app");
    }
  }, [isAuthenticated]);

  // useEffect(async () => {
  //   await generateRecaptcha("recaptcha-container");
  //   window.recaptchaVerifier.render().then((widgetId) => {
  //     window.recaptchaWidgetId = widgetId;
  //   });
  // }, []);

  useEffect(() => {
    // Asynchronous function to handle reCAPTCHA generation and rendering
    async function initRecaptcha() {
      try {
        const widgetId = await generateRecaptcha("recaptcha-container");
        window.recaptchaWidgetId = widgetId;
      } catch (error) {
        console.error("Error generating reCAPTCHA:", error);
      }
    }

    // Call the asynchronous function within useEffect
    initRecaptcha();

    // Cleanup function to explicitly destroy the reCAPTCHA widget
    return () => {
      if (
        typeof window.recaptcha !== "undefined" &&
        typeof window.recaptcha.destroy === "function"
      ) {
        window.recaptcha.destroy(window.recaptchaWidgetId);
      } else {
        console.warn(
          "reCAPTCHA cleanup failed: window.recaptcha.destroy is not a function"
        );
      }
    };
  }, []);

  const handleClose = async () => {
    if (
      typeof grecaptcha !== "undefined" &&
      typeof window.recaptchaVerifier !== "undefined"
    ) {
      grecaptcha.reset(window.recaptchaVerifier);
    }
    setOpenConfirm(false);
  };

  const onSubmit = async (data) => {
    const { country, email } = data;
    const number = `+${country}${num}`;
    const newData = data;
    try {
      if (showPass) {
        await firebaseGetNumber({ email, phonenumber: number }).then(
          async (data) => {
            if (data.error) {
              console.log(data.error);
              enqueueSnackbar(data.error, {
                variant: "error",
              });
            } else {
              await login(data.email, newData.password);
            }
          }
        );
      } else {
        await firebaseGetNumber({ email, phonenumber: number }).then(
          async (data) => {
            if (data.error) {
              enqueueSnackbar(data.error, {
                variant: "error",
              });
            } else {
              try {
                const appVerifier = window.recaptchaVerifier;
                await signInWithPhoneNumber(
                  auth,
                  data.phoneNumber,
                  appVerifier
                ).then((confirmationResult) => {
                  window.confirmationResult = confirmationResult;
                  setOpenConfirm(true);
                  setUser(data);
                });
                // .catch(({ message }) => {
                //   enqueueSnackbar(message, {
                //     variant: "error"
                //   });
                // });
              } catch {
                enqueueSnackbar("Enter Valid Email Or Phone Number", {
                  variant: "error",
                });
              }
            }
          }
        );
      }
    } catch (error) {
      window.recaptchaVerifier.render().then((widgetId) => {
        window.grecaptcha.reset(widgetId);
      });
      const errorCode = error.code;
      const errorMessage =
        errorCode === "auth/wrong-password" ? "Wrong password" : error.message;
      console.log(errorMessage);
      if (isMountedRef.current) {
        enqueueSnackbar(errorMessage, { variant: "error" });
        // setError('afterSubmit', { ...error, message: error.message });
      }
    }
  };

  return (
    <div>
      <span id="recaptcha-container">.</span>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Stack direction="row" justifyContent="center">
            {showCountryBox && (
              <RHFSelect
                sx={{ width: 90, mr: 0.5 }}
                name="country"
                label="Country"
                placeholder="Country"
                native={false}
              >
                <option value="91">+91 India</option>

                {countries.map((option) => (
                  <option key={option.code} value={option.phone}>
                    +{option.phone} {option.label}
                  </option>
                ))}
              </RHFSelect>
            )}
            <RHFTextField name="email" label="Mobile Number or Email address" />
          </Stack>
          {showPass && (
            <RHFTextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      <Iconify
                        icon={
                          showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                        }
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ my: 2 }}
        >
          <Link variant="subtitle2" href={"/reset-password"}>
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          {showPass ? "Login" : "Login with OTP"}
        </LoadingButton>
        <Stack direction="row" sx={{ m: 2 }} justifyContent="center">
          <div style={{ display: !showPass ? "block" : "none" }}>
            <LoadingButton
              onClick={() => {
                setShowPass(true);
              }}
            >
              Login With Password
            </LoadingButton>
          </div>
          <div style={{ display: showPass ? "block" : "none" }}>
            <LoadingButton
              onClick={() => {
                setShowPass(false);
              }}
            >
              Login With OTP
            </LoadingButton>
          </div>
        </Stack>
      </FormProvider>
      <VerifyCodePopup open={openConfirm} onClose={handleClose} user={user} />
    </div>
  );
}
