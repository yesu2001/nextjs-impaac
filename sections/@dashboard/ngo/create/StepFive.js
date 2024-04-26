import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import VerifiedIcon from "@mui/icons-material/Verified";
import { red } from "@mui/material/colors";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import {
  RHFSelect,
  RHFTextField,
  RHFUploadSingleFile2,
} from "../../../../components/hook-form";

import useAuth from "../../../../hooks/useAuth";
import useResponsive from "../../../../hooks/useResponsive";

const UploadButton = styled(Button)(({ theme }) => ({
  my: { xs: 1, md: 0 },
  color: "white",
  backgroundColor: "#ff6200",
  ":hover": {
    background: "#ff6200",
  },
}));

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

function StepFive({ control, value, setValue, kycVerified, ngo }) {
  const isMobile = useResponsive("down", "md");
  const [changeState, setChangeState] = useState(false);
  const [openDate, setOpenDate] = useState(false);

  const [selected, setSelected] = useState("None");
  const { ngoProfile } = useAuth();
  const {
    have_fcra,
    fcra_no,
    fcra_expiry,
    f_ben_name,
    f_acc_no,
    f_acc_type,
    f_swift_code,
    fcra_doc,
    f_bank_doc,
    f_ifsc_code,
  } = value();

  const handleaccountChange = (e) => {
    setSelected(e.target.value);
    setValue("f_acc_type", e.target.value);
  };
  const handleDateChange = async (name, date) => {
    setValue(name, date);
  };

  const isFcraVerified = ngo?.fcra?.is_verified
    ? ngo?.fcra?.is_verified === "verified"
    : false;
  const isFcraBankVerified = ngo?.fcra_account_details?.is_verified
    ? ngo?.fcra_account_details?.is_verified === "verified"
    : false;

  return (
    <Box sx={{ flex: 0.8 }}>
      {!isMobile && (
        <Box>
          <Typography variant="h4">Enter the FCRA Details</Typography>
          <Typography variant="caption">
            NGO information for better profiling
          </Typography>
          <br />
        </Box>
      )}
      <Box sx={{ alignItems: "center" }}>
        <Stack
          direction="row"
          alignItems="center"
          mt={3}
          justifyContent="space-between"
        >
          <Typography
            variant="body"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            {isFcraVerified
              ? "FCRA Document and bank details"
              : "Do you have FCRA Document and bank details?"}
            {isFcraVerified && (
              <VerifiedIcon
                color="green"
                fontSize="small"
                sx={{ color: "green" }}
              />
            )}
          </Typography>
          {!isFcraVerified && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CancelIcon
                value={false}
                name="have_fcra"
                sx={{
                  cursor: "pointer",
                  mx: 1,
                  color: have_fcra ? "lightgrey" : "grey",
                }}
                onClick={() => {
                  setChangeState(!changeState);
                  setValue("have_fcra", false);
                }}
              />
              <CheckCircleIcon
                sx={{
                  cursor: "pointer",
                  mx: 1,
                  color: have_fcra ? "grey" : "lightgrey",
                }}
                onClick={() => {
                  setChangeState(!changeState);
                  setValue("have_fcra", true);
                }}
              />
            </Box>
          )}
        </Stack>
      </Box>

      <Box>
        {isFcraVerified && (
          <Typography sx={{ fontSize: 11, fontWeight: 600, color: "green" }}>
            Document is verified and cannot be modified
          </Typography>
        )}
        {!isFcraVerified && ngo?.fcra?.message && have_fcra && (
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
              The FCRA document got rejected. Reason -{" "}
            </Typography>
            <Typography
              sx={{ ml: 1, fontSize: 12, fontWeight: "bold", color: red[800] }}
            >
              {ngo?.fcra?.message}
            </Typography>
          </Box>
        )}
      </Box>

      {have_fcra && (
        <Box sx={{ display: "flex", flexDirection: "column", py: 3, px: 1 }}>
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={2}
            alignItems={!isMobile ? "center" : ""}
            mb={2}
          >
            <RHFTextField
              name="fcra_no"
              label="FCRA Number"
              sx={{ flex: 0.5, my: 1 }}
              disabled={isFcraVerified}
            />
            <RHFUploadSingleFile2
              accept="image/*, .pdf"
              isUploaded={fcra_doc}
              setValue={setValue}
              name="fcra_doc"
              label={"Click to upload FCRA document"}
              width={0.5}
              path={`Ngo/${ngoProfile._id}/fcra`}
              disabled={isFcraVerified}
            />
          </Stack>
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={2}
            alignItems={!isMobile ? "center" : ""}
          >
            <Controller
              name="fcra_expiry"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <DatePicker
                  fullWidth
                  label="Expiry Date"
                  value={dayjs(field.value)}
                  onChange={(newValue) => setValue("fcra_expiry", newValue)}
                  sx={{ widht: "100%", mb: 3 }}
                />
              )}
            />
          </Stack>
        </Box>
      )}
      {/* <DatePicker
        open={openDate}
        label="Expiry Date"
        inputFormat="dd/MM/yyyy"
        minDate={new Date()}
        value={field.value || new Date()}
        disabled={isFcraVerified}
        onChange={(newValue) => {
          handleDateChange('fcra_expiry', newValue);
          setOpenDate(false);
        }}
        sx={{ width: '30%', flex: 0.5 }}
        renderInput={(params) => (
          <TextField
            {...params}
            onClick={() => setOpenDate(true)}
            onKeyDown={(e) => e.preventDefault()}
            fullWidth
            error={!field.value && !!error}
            helperText={field.value ? '' : error?.message}
          />
        )}
      /> */}

      <Box>
        {have_fcra && (
          <Typography variant="caption">FCRA Bank Details:</Typography>
        )}
        {isFcraBankVerified && (
          <Typography sx={{ fontSize: 11, fontWeight: 600, color: "green" }}>
            Document is verified and cannot be modified
          </Typography>
        )}
        {!isFcraBankVerified &&
          ngo?.fcra_account_details?.message &&
          have_fcra && (
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
                The FCRA bank document got rejected. Reason -{" "}
              </Typography>
              <Typography
                sx={{
                  ml: 1,
                  fontSize: 12,
                  fontWeight: "bold",
                  color: red[800],
                }}
              >
                {ngo?.fcra_account_details?.message}
              </Typography>
            </Box>
          )}
      </Box>

      {have_fcra && (
        <Box sx={{ display: "flex", flexDirection: "column", py: 3, px: 1 }}>
          <Stack
            mb={1}
            direction={isMobile ? "column" : "row"}
            spacing={2}
            alignItems={!isMobile ? "center" : ""}
          >
            <RHFTextField
              name="f_ben_name"
              label="Beneficiary Name"
              sx={{ my: 1, flex: 0.5 }}
              disabled={isFcraBankVerified}
            />
            <RHFTextField
              name="f_acc_no"
              label="Account Number"
              sx={{ flex: 0.5, my: 1 }}
              disabled={isFcraBankVerified}
            />
          </Stack>
          <Stack
            my={1}
            direction={isMobile ? "column" : "row"}
            spacing={2}
            alignItems={!isMobile ? "center" : ""}
          >
            <RHFSelect
              name="f_acc_type"
              label="Account Type"
              placeholder="Bank Type"
              sx={{ flex: 0.5, bgcolor: "#fff" }}
              disabled={isFcraBankVerified}
            >
              {bankOption.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </RHFSelect>
            <RHFTextField
              name="f_ifsc_code"
              label="IFSC Code"
              sx={{ flex: 0.5 }}
              disabled={isFcraBankVerified}
            />
          </Stack>
          <Stack
            my={1}
            direction={isMobile ? "column" : "row"}
            spacing={2}
            alignItems={!isMobile ? "center" : ""}
          >
            <RHFTextField
              name="f_swift_code"
              label="Swift Code"
              sx={{ my: 1, flex: 0.5 }}
              disabled={isFcraBankVerified}
            />
            <RHFUploadSingleFile2
              accept="image/*, .pdf"
              isUploaded={f_bank_doc}
              setValue={setValue}
              name={"f_bank_doc"}
              label={"Click to upload"}
              width={0.5}
              path={`Ngo/${ngoProfile?._id}/f_bank_doc`}
              placeholder="Cancelled Cheque / Bank statement / PassBook"
              disabled={isFcraBankVerified}
            />
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default StepFive;
