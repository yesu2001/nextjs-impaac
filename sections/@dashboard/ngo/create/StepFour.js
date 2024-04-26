// import { useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Box, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import {
  RHFTextField,
  RHFSelect,
  RHFUploadSingleFile2,
} from "../../../../components/hook-form";
// import { UploadFile } from "../../../../components/upload";
import useResponsive from "../../../../hooks/useResponsive";
import useAuth from "../../../../hooks/useAuth";

const bankOption = [
  {
    label: "Select Account",
    value: "no_account",
  },
  {
    label: "Current Account",
    value: "current_account",
  },
  {
    label: "Savings Account",
    value: "savings_account",
  },
];

function StepFour({ value, setValue, user }) {
  const isMobile = useResponsive("down", "md");
  const { bank_doc } = value();
  const { ngoProfile } = useAuth();
  // const [selected, setSelected] = useState("None");
  const isBankVerified = user?.bank_info?.is_verified
    ? user?.bank_info?.is_verified === "verified"
    : false;

  return (
    <Box sx={{ flex: 0.8 }}>
      {!isMobile && (
        <Box>
          <Typography variant="h4">Enter the NGO Bank Details</Typography>
          <Typography variant="caption">
            NGO information for accepting donations.
          </Typography>
          <br />
        </Box>
      )}
      {isBankVerified && (
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
      {!isBankVerified && user?.bank_info?.message && (
        <Box
          sx={{
            background: red[50],
            display: "flex",
            py: 1,
            borderRadius: 1,
            alignItems: "center",
            justifyContent: "center",
            mt: 3,
          }}
        >
          <Typography sx={{ fontSize: 12 }}>
            This document got rejected. Reason -{" "}
          </Typography>
          <Typography
            sx={{ ml: 1, fontSize: 12, fontWeight: "bold", color: red[800] }}
          >
            {user?.bank_info?.message}
          </Typography>
        </Box>
      )}
      <Box sx={{ alignItems: "center", my: 5 }}>
        <Box>
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={2}
            alignItems={!isMobile ? "center" : ""}
            mb={2}
          >
            <RHFTextField
              name="ben_name"
              label="Beneficiary Name"
              sx={{ flex: 0.5, my: 1 }}
              disabled={isBankVerified}
            />

            <RHFSelect
              name="acc_type"
              label="Account Type"
              placeholder="Account Type"
              sx={{ flex: 0.5, mx: 2, bgcolor: "#fff" }}
              disabled={isBankVerified}
            >
              {bankOption.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </RHFSelect>
          </Stack>
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={2}
            alignItems={!isMobile ? "center" : ""}
          >
            <RHFTextField
              name="acc_no"
              label="Account Number"
              sx={{ my: 1 }}
              disabled={isBankVerified}
            />
            <RHFTextField
              name="ifsc_code"
              label="IFSC Code"
              sx={{ my: 1 }}
              disabled={isBankVerified}
            />
          </Stack>
          <Stack
            my={2}
            direction={isMobile ? "column" : "row"}
            spacing={2}
            alignItems={!isMobile ? "center" : ""}
          >
            <RHFUploadSingleFile2
              accept="image/*"
              isUploaded={bank_doc}
              setValue={setValue}
              name="bank_doc"
              path={`Ngo/${ngoProfile?._id}/bank_proof`}
              label={"Click to upload"}
              width={0.5}
              placeholder="Cancelled Cheque / Bank statement / PassBook"
              disabled={isBankVerified}
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default StepFour;
