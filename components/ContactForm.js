import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import { LoadingButton } from "@mui/lab";
import {
  Alert,
  DialogActions,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { m } from "framer-motion";
import { MotionViewport, varFade } from "./animate";

import { createContactFormHelper } from "@/helper/contactForm";
import { PHONEREGEX } from "@/utils/regex";
import { phoneNumberForCallBack } from "@/_mock/contactInfo";
import CircularLoader2 from "./CircularLoader2";
import { FormProvider, RHFTextField } from "./hook-form";

function ContactForm() {
  const enqueueSnackbar = useSnackbar();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState(false);

  const { pathname } = window.location;

  useEffect(() => {
    if (pathname === "/contact") {
      setContact(true);
    }
  }, []);

  const CallBackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Enter valid name").required("Name is required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(PHONEREGEX, "Mobile Number is not valid")
      .min(10, "Mobile Number is not valid")
      .required("Phone Number is required"),
  });

  const defaultValues = {
    email: "",
    phoneNumber: "",
  };

  const methods = useForm({
    resolver: yupResolver(CallBackSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    const { name, email, phoneNumber } = data;
    setLoading(true);
    try {
      createContactFormHelper({ name, email, phonenumber: phoneNumber }).then(
        async (data) => {
          if (data.error) {
            enqueueSnackbar(data.error, {
              variant: "error",
            });
          } else {
            setSuccess(true);
            setLoading(false);
          }
        }
      );
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <CircularLoader2 />}
      {success && (
        <Alert sx={{ m: 2 }}> Our team will reach out to you shortly!</Alert>
      )}
      {!success && (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          {!contact && (
            <>
              <Stack spacing={2} sx={{ px: 3, mt: 3 }}>
                <RHFTextField name="name" label="Name" />
                <RHFTextField name="email" label="Email" />
                <RHFTextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                  }}
                  name="phoneNumber"
                  label="Phone Number"
                />
              </Stack>

              <DialogActions sx={{ justifyContent: "center" }}>
                <LoadingButton
                  variant="contained"
                  type="submit"
                  size="large"
                  loading={isSubmitting}
                >
                  Arrange a Callback
                </LoadingButton>
              </DialogActions>
            </>
          )}
          {contact && (
            <Stack component={MotionViewport} spacing={3}>
              <m.div variants={varFade().inUp}>
                <Typography variant="h3" sx={{ letterSpacing: "-0.04rem" }}>
                  Request for A Call
                </Typography>
                <Typography variant="h5" sx={{ letterSpacing: "-0.04rem" }}>
                  Get Callback for All Your Needs
                </Typography>
              </m.div>

              <Stack spacing={2}>
                <m.div variants={varFade().inUp}>
                  <RHFTextField name="name" label="Name" />
                </m.div>

                <m.div variants={varFade().inUp}>
                  <RHFTextField name="email" label="Email" />
                </m.div>

                <m.div variants={varFade().inUp}>
                  <RHFTextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    }}
                    name="phoneNumber"
                    label="Phone Number"
                  />
                </m.div>
              </Stack>

              <m.div variants={varFade().inUp}>
                <DialogActions
                  sx={{
                    display: "block",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                >
                  <LoadingButton
                    variant="contained"
                    type="submit"
                    size="large"
                    loading={isSubmitting}
                  >
                    Arrange a Callback
                  </LoadingButton>
                </DialogActions>
              </m.div>
            </Stack>
          )}
        </FormProvider>
      )}
    </div>
  );
}

export default ContactForm;
