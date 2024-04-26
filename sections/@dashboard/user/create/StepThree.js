import { Box, Stack, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import {
  RHFTextField,
  RHFSelect,
  RHFUploadSingleFile2,
} from "@/components/hook-form";
import useResponsive from "@/hooks/useResponsive";
import useAuth from "@/hooks/useAuth";

const bankOption = [
  {
    label: "Current Account",
    value: "current_account",
  },
  {
    label: "Savings Account",
    value: "savings_account",
  },
];

function StepThree({ value, setValue }) {
  const isMobile = useResponsive("down", "md");
  const { bank_doc, f_bank_doc } = value();
  const { userProfile, user } = useAuth();

  const isBankVerified = userProfile?.bank_info?.is_verified === "verified";

  return (
    <Box sx={{ flex: 1 }}>
      {!isMobile && (
        <Box>
          <Typography variant="h4">Enter your bank details</Typography>
          <Typography variant="caption">
            Information for accepting donations.
          </Typography>
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
      {userProfile?.bank_info?.is_verified === "rejected" &&
        userProfile?.bank_info?.message && (
          <Typography
            sx={{
              mt: 1,
              textAlign: "center",
              fontSize: 11,
              fontWeight: 600,
              color: "red",
            }}
          >
            This Document is rejected. Reason :{" "}
            {userProfile?.bank_info?.message}
          </Typography>
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
              label="Beneficiery Name"
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
              accept="image/*, .pdf"
              isUploaded={bank_doc}
              setValue={setValue}
              name={"bank_doc"}
              path={`user/${user?.id}/bank_proof`}
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

export default StepThree;
