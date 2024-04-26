import React, { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Box, Button, Modal, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { FormProvider } from "@/components/hook-form";
import useAuth from "@/hooks/useAuth";
import { UserDefaultValue } from "./UserDefaultValue";
import { socialLinkRegex } from "@/utils/regex";
import { updateUser } from "@/helper/user";

// -------------------------- //
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%",
    sm: "50%",
    md: "35%",
    lg: "25%",
  },
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
//   -------------------  //

export default function UserEditModel({ open, handleClose, children }) {
  const { user, userProfile, updateNgoProfile, refreshUser } = useAuth();

  const profileValidationSchema = Yup.object().shape({
    bio: Yup.string()
      .required("Bio / about is required")
      .min(30, "Maximum of 30 words"),
    tags: Yup.array(),

    instagram: Yup.string()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .matches(socialLinkRegex, "Instagram Link is not valid"),
    facebook: Yup.string()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .matches(socialLinkRegex, "Facebook Link is not valid"),
    linkedin: Yup.string()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .matches(socialLinkRegex, "Linkedin Link is not valid"),
    twitter: Yup.string()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .matches(socialLinkRegex, "Twitter Link is not valid"),
  });

  const methods = useForm({
    resolver: yupResolver(profileValidationSchema),
    defaultValues: UserDefaultValue(userProfile),
  });

  const {
    control,
    watch,
    setValue,
    handleSubmit,
    clearErrors,
    setError,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const handleAddTag = () => {};

  const submitForm = async (data) => {
    try {
      const payload = {
        about: data.bio,
        social_links: {
          facebook: data.facebook,
          linkedin: data.linkedin,
          twitter: data.twitter,
          instagram: data.instagram,
        },
      };

      await updateUser(user.id, user.token, payload);
      await refreshUser(user.uid, user.token);

      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <CloseIcon
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "grey",
            cursor: "pointer",
          }}
        />
        <FormProvider methods={methods} onSubmit={handleSubmit(submitForm)}>
          {children}

          <Stack direction="row" justifyContent="center" sx={{ mt: 2 }}>
            <LoadingButton
              type="submit"
              loading={isSubmitting}
              sx={{
                fontSize: 17,
                height: 45,
                flex: 1,
                background: "#3CBA6F",
                color: "white",
                "&:hover": { color: "white", backgroundColor: "#3CBA6F" },
              }}
            >
              Update
            </LoadingButton>
          </Stack>
        </FormProvider>
      </Box>
    </Modal>
  );
}
