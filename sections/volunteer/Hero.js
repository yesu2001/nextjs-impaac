import React, { useState } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import * as Yup from "yup";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  Grid,
  Fade,
  Button,
  Stack,
  Dialog,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
} from "../../components/hook-form";
import useSettings from "../../hooks/useSettings";
import animal from "./catalogue_Pic/23.webp";
import HeroTitle from "../../components/catalogue/HeroTitle";
import { PHONEREGEX } from "../../utils/regex";
import { countries } from "../../_mock";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <Container maxWidth={"lg"}>
      <Grid container py={5} sx={{ height: { xs: "auto", md: "90vh" } }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          sx={{ width: { xs: "100%", md: "80%" } }}
        >
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                width: { xs: "100%", sm: "100%", md: "95%" },
                fontSize: { sm: 50, md: 76 },
                color: "rgb(57, 127, 183)",
                textAlign: "left",
              }}
            >
              Join the Impact: Volunteer with Impaac Foundation for a Better
              World
            </Typography>
          </m.div>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{
              width: { xs: "100%", sm: 200 },
              my: 4,
              borderRadius: 25,
              fontSize: 25,
              px: 5,
              py: 1,
            }}
          >
            Join Us
          </Button>
          <VolunteerForm open={open} onClose={onClose} />
        </Grid>
        <Grid
          Item
          xs={12}
          sm={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Animate the image using MotionValue */}
          <m.div
            animate={{ translateX: 0 }}
            initial={{ translateX: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              alt={animal}
              src={animal}
              height={450}
              sx={{ width: { xs: "70%", sm: "70%", md: "100%" } }}
            />
          </m.div>
        </Grid>
      </Grid>
    </Container>
  );
}

const VolunteerForm = ({ open, onClose }) => {
  const RegisterSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Name required")
      .max(30, "Full Name is too long"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(PHONEREGEX, "Mobile Number is not valid")
      .min(8, "Mobile Number is not valid")
      .max(12, "Mobile Number is not valid")
      .required("Phone Number is required"),
    education: Yup.string()
      .required("Education details required")
      .max(20, "Education details is required"),
    experience: Yup.string(),
  });

  const defaultValues = {
    fullName: "",
    email: "",
    country: "91",
    phoneNumber: "",
    education: "",
    experience: "",
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      transitionDuration={900}
      sx={{
        ".css-1igvg07-MuiPaper-root-MuiDialog-paper": {
          margin: 0,
        },
        ".css-1m9bonx-MuiBackdrop-root-MuiDialog-backdrop": {
          background: "rgba(0,0,0,0.8)",
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1">Volunteer Details</Typography>
              <CloseIcon
                onClick={onClose}
                sx={{ mt: -4, mr: -2, cursor: "pointer" }}
              />
            </Box>
            <RHFTextField name="fullName" label="Full name" />
            <RHFTextField name="email" label="Email address" />
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
            <RHFTextField name="education" label="Education Qualification" />
            <RHFTextField
              name="experience"
              label="Something about your volunterer experiences"
            />
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Join Now
            </LoadingButton>
          </Stack>
        </FormProvider>
      </Box>
    </Dialog>
  );
};
