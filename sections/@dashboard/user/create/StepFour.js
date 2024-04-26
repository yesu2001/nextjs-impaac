import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import {
  RHFSelect,
  RHFTextField,
  RHFUploadSingleFile2,
} from "@/components/hook-form";
import { UploadFile } from "@/components/upload";
import useResponsive from "@/hooks/useResponsive";
import useAuth from "@/hooks/useAuth";

const proofOptions = [
  {
    label: "Aadhar Card",
    value: "aadhar_card",
  },
  {
    label: "Pan Card",
    value: "pan_card",
  },
  {
    label: "Passport",
    value: "passport",
  },
];

function getLabelByValue(value) {
  const option = proofOptions.find((option) => option.value === value);
  return option ? option.label : null;
}

function StepFour({ value, setValue, watch }) {
  const { ngo, ngoProfile, userProfile } = useAuth();
  const isMobile = useResponsive("down", "md");

  const { user_document_front, user_document_back } = value();
  const { user_document_name } = watch();
  const isPan = user_document_name === "pan_card";
  const isUserVerified = userProfile?.user_info?.is_verified === "verified";

  return (
    <Box sx={{ flex: 1 }}>
      {!isMobile && (
        <Box>
          <Typography variant="h4">Enter the user KYC details</Typography>
          <Typography variant="caption">KYC information of user.</Typography>
        </Box>
      )}
      {isUserVerified && (
        <Typography
          variant="caption"
          sx={{
            mt: 3,
            color: "green",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <VerifiedIcon
            color="green"
            fontSize="small"
            sx={{ color: "green" }}
          />
          This Document is Verifed.
        </Typography>
      )}
      {!isUserVerified && userProfile?.user_info?.message && (
        <Typography
          sx={{
            mt: 1,
            textAlign: "center",
            fontSize: 11,
            fontWeight: 600,
            color: "red",
          }}
        >
          This Document is rejected. Reason : {userProfile?.user_info?.message}
        </Typography>
      )}
      <Box sx={{ my: 5 }}>
        <Stack
          direction={isMobile ? "column" : "row"}
          alignItems="center"
          my={3}
          spacing={2}
        >
          <RHFTextField
            name="user_first_name"
            label="First Name"
            disabled={isUserVerified}
          />
          <RHFTextField
            name="user_last_name"
            label="Last Name"
            disabled={isUserVerified}
          />
        </Stack>
        <Stack
          direction={isMobile ? "column" : "row"}
          alignItems="center"
          my={3}
          spacing={2}
        >
          <Typography variant="subtitle2" sx={{ flex: 0.5 }}>
            Authorized User's Identity Proof
          </Typography>
          <RHFSelect
            name="user_document_name"
            label="Document"
            placeholder="Document"
            disabled={isUserVerified}
            sx={{ flex: 0.5, mx: 2, bgcolor: "#fff" }}
          >
            {proofOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </RHFSelect>
        </Stack>
        <RHFTextField
          name="user_document_number"
          disabled={isUserVerified}
          label={`${getLabelByValue(user_document_name)} Number`}
        />
        <Stack spacing={2} my={3}>
          <Stack
            direction={isMobile ? "column" : "row"}
            alignItems="center"
            spacing={2}
          >
            <RHFUploadSingleFile2
              accept="image/*, .pdf"
              isUploaded={user_document_front}
              setValue={setValue}
              name={"user_document_front"}
              label={`Click to Upload ${getLabelByValue(
                user_document_name
              )} (Front) `}
              width={0.5}
              path={`Ngo/${ngoProfile?._id}/user_document_front`}
              disabled={isUserVerified}
            />
            {!isPan && (
              <RHFUploadSingleFile2
                accept="image/*, .pdf"
                isUploaded={user_document_back}
                setValue={setValue}
                name={"user_document_back"}
                label={`Click to Upload ${getLabelByValue(
                  user_document_name
                )} (Back) `}
                path={`Ngo/${ngoProfile?._id}/user_document_back`}
                width={0.5}
                disabled={isUserVerified}
              />
            )}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default StepFour;
