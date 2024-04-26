import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import * as Yup from "yup";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { LoadingButton } from "@mui/lab";
import { IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import { green, orange, red } from "@mui/material/colors";
// hooks
import useAuth from "@/hooks/useAuth";
import useIsMountedRef from "@/hooks/useIsMountedRef";
// components
import {
  FormProvider,
  RHFRadioGroup,
  RHFSelect,
  RHFTextField,
} from "@/components/hook-form";
import Iconify from "@/components/Iconify";

// ----------------------------------------------------------------------
import { firebaseValidation } from "@/helper/firebase";
import { PHONEREGEX } from "@/utils/regex";
import { countries } from "@/_mock";
import { VerifyCodePopup } from "../verify-code";

const CATEGORY_OPTION = [
  { label: "Individual", value: "individual" },
  { label: "Organisation", value: "organisation" },
];

export default function RegisterForm() {
  const { generateRecaptcha, grecaptcha, isAuthenticated } = useAuth();
  const auth = getAuth();
  const { enqueueSnackbar } = useSnackbar();

  const [user, setUser] = useState();

  const [openConfirm, setOpenConfirm] = useState(false);

  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Full Name required")
      .max(30, "Full Name is too long"),
    email: Yup.string()
      .transform((value) => (value ? value.replace(/\s/g, "") : value))
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Must Contain 6 Characters")
      // .matches(PASSWORDREGEX, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character')
      .required("Password is required"),
    phoneNumber: Yup.string()
      .transform((value) => (value ? value.replace(/\s/g, "") : value))
      .matches(PHONEREGEX, "Mobile Number is not valid")
      .min(10, "Mobile Number is not valid")
      .required("Phone Number is required"),
  });

  const defaultValues = {
    category: CATEGORY_OPTION[0].value,
    fullName: "",
    email: "",
    password: "",
    country: "91",
    phoneNumber: "",
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    watch,
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const values = watch();

  const isIndividual = values.category === "individual";

  useEffect(() => {
    if (isAuthenticated) {
      setOpenConfirm(false);
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
    const appVerifier = window.recaptchaVerifier;
    const { country, phoneNumber } = data;
    const number = `+${country}${phoneNumber}`;
    data.phoneNumber = number;
    const Udata = data;

    try {
      await firebaseValidation({ email: data.email, phonenumber: number }).then(
        async (data) => {
          if (data.error) {
            setError("afterSubmit", { message: data.error });
            enqueueSnackbar(data.error, { variant: "error" });
          } else {
            await signInWithPhoneNumber(auth, number, appVerifier)
              .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setOpenConfirm(true);
                setUser(Udata);
              })
              .catch(({ message }) => {
                enqueueSnackbar(message, { variant: "error" });
              });
          }
        }
      );
    } catch (error) {
      reset();
      if (isMountedRef.current) {
        enqueueSnackbar(error.message, { variant: "error" });
      }
    }
  };

  return (
    <div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {/* {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>} */}
          <Stack direction="row" justifyContent="center">
            <RHFRadioGroup
              name="category"
              options={CATEGORY_OPTION}
              sx={{
                alignItem: "center",
                "& .MuiFormControlLabel-root": { mr: 4 },
              }}
            />
          </Stack>

          <Typography
            variant="caption"
            sx={{
              textAlign: "center",
              background: orange[50],
              color: orange[800],
              p: 1,
              borderRadius: 1,
              fontWeight: 600,
            }}
          >
            Note:{" "}
            {isIndividual
              ? "Select individual only if you are donor or not registered as an ngo."
              : "Select organisation only if you are registered as an NGO and have relevant documents."}
          </Typography>

          <RHFTextField
            name="fullName"
            label={isIndividual ? "Full Name" : "Organisation Full Name"}
          />

          <RHFTextField
            name="email"
            label={`${!isIndividual ? "Organisation" : ""} Email `}
            tip={
              isIndividual ? "" : "Enter organization gmail, not personal gmail"
            }
          />
          <RHFTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <Iconify
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Stack direction="row" justifyContent="center">
            <RHFSelect
              sx={{ width: 95, mr: 0.5 }}
              name="country"
              label="Country"
              placeholder="Country"
            >
              <option value="91">+91 India</option>

              {countries.map((option) => (
                <option key={option.code} value={option.phone}>
                  +{option.phone} {option.label}
                </option>
              ))}
            </RHFSelect>
            <RHFTextField name="phoneNumber" label="Phone Number" />
          </Stack>

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Register
          </LoadingButton>
        </Stack>
      </FormProvider>
      <span id="recaptcha-container" />
      <VerifyCodePopup open={openConfirm} onClose={handleClose} user={user} />
    </div>
  );
}
