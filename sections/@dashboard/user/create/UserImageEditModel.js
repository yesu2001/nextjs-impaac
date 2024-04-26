import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Box, Modal, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FormProvider } from "@/components/hook-form";
import useAuth from "@/hooks/useAuth";
import CropImage from "@/components/upload/CropImage";
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

export default function UserImageEditModel({
  open,
  handleClose,
  profile,
  label,
}) {
  const { user, refreshUser, updateUserProfile, ngoProfile, updateNgoProfile } =
    useAuth();
  const [waiting, setWaiting] = useState(false);

  const profileValidationSchema = Yup.object().shape({
    cover_image: Yup.string(),
    photo_url: Yup.string(),
  });

  const methods = useForm({
    resolver: yupResolver(profileValidationSchema),
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
      await updateUser(user.id, user.token, data);
      await refreshUser(user.uid, user.token);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        ".css-7355d1-MuiBackdrop-root-MuiModal-backdrop": {
          background: "rgba(0,0,0,0.8)",
        },
      }}
    >
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
          <Stack my={2}>
            <CropImage
              name="cover_image"
              setValue={setValue}
              path={`user/${profile?.id}/cover_image`}
              label={"Click to upload Cover Image"}
              aspect={16 / 7}
              sx={{ display: label === "cover_image" ? "flex" : "none" }}
              setWaiting={setWaiting}
            />

            <CropImage
              name="photo_url"
              setValue={setValue}
              path={`user/${profile?.id}/image`}
              label={"Click to upload Profile Picture"}
              aspect={1}
              setWaiting={setWaiting}
              sx={{
                display: label === "profile_image" ? "flex" : "none",
                mt: 0,
              }}
            />
          </Stack>
          <Stack direction="row" sx={{ mt: 2 }}>
            <LoadingButton
              type="submit"
              loading={waiting}
              sx={{
                flex: 1,
                background: waiting ? "white" : "#3CBA6F",
                color: "white",
                "&:hover": { color: "white", backgroundColor: "#3CBA6F" },
              }}
            >
              {waiting ? "Uploading" : "Update"}
            </LoadingButton>
          </Stack>
        </FormProvider>
      </Box>
    </Modal>
  );
}
