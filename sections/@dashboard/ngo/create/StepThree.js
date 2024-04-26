import { useState, useRef } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
// import { DatePicker } from "@mui/lab";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { Controller } from "react-hook-form";

import { Box, Divider, Stack, TextField, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import {
  RHFTextField,
  RHFUploadSingleFile2,
} from "../../../../components/hook-form";
import useAuth from "../../../../hooks/useAuth";
import useResponsive from "../../../../hooks/useResponsive";

// ----------------------------//
function StepThree({ setValue, value, control, ngo }) {
  const isMobile = useResponsive("down", "md");
  const [date80G, setDate80G] = useState(false);
  const [dateCsr, setDateCsr] = useState(false);
  const [date12A, setDate12A] = useState(false);
  const {
    have_pan,
    have_twelve_a,
    have_reg,
    have_eighty_g,
    have_csr,
    pan_card_doc,
    twelve_a_doc,
    eighty_g_doc,
    reg_doc,
    csr_doc,
  } = value();
  const { ngoProfile } = useAuth();
  const [changeState, setChangeState] = useState(false);

  const isRegVerified = ngo?.reg_cert?.is_verified
    ? ngo?.reg_cert?.is_verified === "verified"
    : false;
  const isPanVerified = ngo?.pan_card?.is_verified
    ? ngo?.pan_card?.is_verified === "verified"
    : false;
  const isEightyGVerified = ngo?.eighty_g?.is_verified
    ? ngo?.eighty_g?.is_verified === "verified"
    : false;
  const isTwelveAVerified = ngo?.twelve_a?.is_verified
    ? ngo?.twelve_a?.is_verified === "verified"
    : false;
  const isCsrVerified = ngo?.csr?.is_verified
    ? ngo?.csr?.is_verified === "verified"
    : false;

  const reg_cert = ngo?.reg_cert;
  const pan_card = ngo?.pan_card;
  const twelve_a = ngo?.twelve_a;
  const eighty_g = ngo?.eighty_g;
  const csr = ngo?.csr;

  return (
    <Box sx={{ flex: 0.8 }}>
      {!isMobile && (
        <Box>
          <Typography variant="h4">
            Enter the NGO Registration Details
          </Typography>
          <Typography variant="caption">
            NGO information to verify whether you are an NGO.
          </Typography>
        </Box>
      )}
      <Box sx={{ my: 5 }}>
        <Box
          sx={{
            my: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            Registration/Trust Deed/MOA Certificate{" "}
            {isRegVerified && (
              <VerifiedIcon
                color="green"
                fontSize="small"
                sx={{ color: "green" }}
              />
            )}
          </Typography>
          {isRegVerified && (
            <Typography sx={{ fontSize: 11, fontWeight: 600, color: "green" }}>
              Document is verified and cannot be modified
            </Typography>
          )}
          {reg_cert?.message && (
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
                sx={{
                  ml: 1,
                  fontSize: 12,
                  fontWeight: "bold",
                  color: red[800],
                }}
              >
                {reg_cert?.message}
              </Typography>
            </Box>
          )}
        </Box>
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={2}
          my={3}
          alignItems={!isMobile ? "center" : ""}
        >
          <RHFTextField
            name="reg_number"
            label="Enter NGO's Registration/Trust Deed/MOA Number"
            sx={{ flex: 0.6 }}
            disabled={isRegVerified}
          />
          <RHFUploadSingleFile2
            accept="image/*, .pdf"
            isUploaded={reg_doc}
            setValue={setValue}
            name={"reg_doc"}
            path={`Ngo/${ngoProfile._id}/registration_cert`}
            label={"Click to upload Certificate"}
            width={0.4}
            disabled={isRegVerified}
          />
        </Stack>
        <Divider my={2} />
        <Box
          sx={{
            my: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            NGO's Pan card{" "}
            {isPanVerified && (
              <VerifiedIcon
                color="green"
                fontSize="small"
                sx={{ color: "green" }}
              />
            )}{" "}
          </Typography>
          {isPanVerified && (
            <Typography sx={{ fontSize: 11, fontWeight: 600, color: "green" }}>
              Document is verified and cannot be modified
            </Typography>
          )}
          {pan_card?.message && (
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
                sx={{
                  ml: 1,
                  fontSize: 12,
                  fontWeight: "bold",
                  color: red[800],
                }}
              >
                {pan_card?.message}
              </Typography>
            </Box>
          )}
        </Box>
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={2}
          my={3}
          alignItems={!isMobile ? "center" : ""}
        >
          <RHFTextField
            name="pan"
            label="Enter NGO's Pan Number"
            sx={{ flex: 0.6 }}
            disabled={isPanVerified}
          />
          <RHFUploadSingleFile2
            accept="image/*, .pdf"
            isUploaded={pan_card_doc}
            setValue={setValue}
            name={"pan_card_doc"}
            path={`Ngo/${ngoProfile?._id}/pan_card`}
            label={"Click to upload Pan "}
            width={0.4}
            disabled={isPanVerified}
          />
        </Stack>
        <Divider my={2} />

        <Box
          sx={{
            my: 2,
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            {isTwelveAVerified
              ? "NGO's 12A Certificate"
              : "Do you have NGO's 12A Certificate?"}{" "}
            {isTwelveAVerified && (
              <VerifiedIcon
                color="green"
                fontSize="small"
                sx={{ color: "green" }}
              />
            )}
          </Typography>
          {!isTwelveAVerified && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CancelIcon
                sx={{
                  cursor: "pointer",
                  mx: 1,
                  color: have_twelve_a ? "lightgrey" : "grey",
                }}
                onClick={() => {
                  setChangeState(!changeState);
                  setValue("have_twelve_a", false);
                }}
              />
              <CheckCircleIcon
                sx={{
                  cursor: "pointer",
                  mx: 1,
                  color: have_twelve_a ? "grey" : "lightgrey",
                }}
                onClick={() => {
                  setChangeState(!changeState);
                  setValue("have_twelve_a", true);
                }}
              />
            </Box>
          )}
        </Box>
        <Box>
          {isTwelveAVerified && (
            <Typography sx={{ fontSize: 11, fontWeight: 600, color: "green" }}>
              Document is verified and cannot be modified
            </Typography>
          )}
          {!isTwelveAVerified && twelve_a?.message && have_twelve_a && (
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
                sx={{
                  ml: 1,
                  fontSize: 12,
                  fontWeight: "bold",
                  color: red[800],
                }}
              >
                {twelve_a?.message}
              </Typography>
            </Box>
          )}
        </Box>

        {have_twelve_a && (
          <>
            <Stack
              direction={isMobile ? "column" : "row"}
              spacing={2}
              my={3}
              alignItems={!isMobile ? "center" : ""}
              justifyContent={"space-around"}
            >
              <RHFTextField
                name="twelve_a"
                label="Enter NGO's  12A Number "
                sx={{ flex: 0.6 }}
                disabled={isTwelveAVerified}
              />
              <RHFUploadSingleFile2
                accept="image/*, .pdf"
                isUploaded={twelve_a_doc}
                setValue={setValue}
                name={"twelve_a_doc"}
                path={`Ngo/${ngoProfile?._id}/twelve_a`}
                label={"Click to upload 12A"}
                width={0.4}
                disabled={isTwelveAVerified}
              />
            </Stack>
            <Controller
              name="twelve_a_expiry"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <DatePicker
                  fullWidth
                  label="Expiry Date"
                  value={dayjs(field.value)}
                  onChange={(newValue) => setValue("twelve_a_expiry", newValue)}
                  sx={{ widht: "100%", mb: 3 }}
                />
              )}
            />
          </>
        )}
        <Divider my={2} />
        {/* // <DatePicker
        //   open={date12A}
        //   label="Expiry Date"
        //   inputFormat="dd/MM/yyyy"
        //   minDate={new Date()}
        //   value={field.value}
        //   disabled={isTwelveAVerified}
        //   onChange={(newValue) => {
        //     setValue("twelve_a_expiry", newValue);
        //     setDate12A(false);
        //   }}
        //   renderInput={(params) => (
        //     <TextField
        //       {...params}
        //       onClick={() => setDate12A(true)}
        //       onKeyDown={(e) => e.preventDefault()}
        //       fullWidth
        //       error={!field.value && !!error}
        //       helperText={field.value ? "" : error?.message}
        //       sx={{ mb: 3 }}
        //     />
        //   )}
        // /> */}

        <Box
          sx={{
            my: 2,
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            {isEightyGVerified
              ? "NGO's 80G Certificate"
              : "Do you have NGO's 80G Certificate?"}
            {isEightyGVerified && (
              <VerifiedIcon
                color="green"
                fontSize="small"
                sx={{ color: "green" }}
              />
            )}
          </Typography>
          {!isEightyGVerified && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CancelIcon
                sx={{
                  cursor: "pointer",
                  mx: 1,
                  color: have_eighty_g ? "lightgrey" : "grey",
                }}
                onClick={() => {
                  setChangeState(!changeState);
                  setValue("have_eighty_g", false);
                }}
              />
              <CheckCircleIcon
                sx={{
                  cursor: "pointer",
                  mx: 1,
                  color: have_eighty_g ? "grey" : "lightgrey",
                }}
                onClick={() => {
                  setChangeState(!changeState);
                  setValue("have_eighty_g", true);
                }}
              />
            </Box>
          )}
        </Box>
        <Box>
          {isEightyGVerified && (
            <Typography sx={{ fontSize: 11, fontWeight: 600, color: "green" }}>
              Document is verified and cannot be modified
            </Typography>
          )}
          {!isEightyGVerified && eighty_g?.message && have_eighty_g && (
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
                sx={{
                  ml: 1,
                  fontSize: 12,
                  fontWeight: "bold",
                  color: red[800],
                }}
              >
                {eighty_g?.message}
              </Typography>
            </Box>
          )}
        </Box>

        {have_eighty_g && (
          <>
            <Stack
              direction={isMobile ? "column" : "row"}
              spacing={2}
              my={3}
              alignItems={!isMobile ? "center" : ""}
            >
              <RHFTextField
                name="eighty_g"
                label="Enter NGO's 80G Number"
                sx={{ flex: 0.6 }}
                disabled={isEightyGVerified}
              />
              <RHFUploadSingleFile2
                accept="image/*, .pdf"
                isUploaded={eighty_g_doc}
                setValue={setValue}
                name={"eighty_g_doc"}
                path={`Ngo/${ngoProfile?._id}/eighty_g`}
                label={"Click to upload 80G"}
                width={0.4}
                disabled={isEightyGVerified}
              />
            </Stack>
            <Controller
              name="eighty_g_expiry"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <DatePicker
                  label="Expiry Date"
                  value={dayjs(field.value)}
                  onChange={(newValue) => setValue("eighty_g_expiry", newValue)}
                  sx={{ widht: "100%", mb: 3 }}
                />
              )}
            />
          </>
        )}
        <Divider my={2} />
        {/* <DatePicker
                open={date80G}
                label="Expiry Date"
                inputFormat="dd/MM/yyyy"
                minDate={new Date()}
                value={field.value || new Date()}
                disabled={isEightyGVerified}
                onChange={(newValue) => {
                  setValue("eighty_g_expiry", newValue);
                  setDate80G(false);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    onClick={() => setDate80G(true)}
                    onKeyDown={(e) => e.preventDefault()}
                    fullWidth
                    error={!field.value && !!error}
                    helperText={field.value ? "" : error?.message}
                    sx={{ mb: 3 }}
                  />
                )}
              /> */}

        <Box
          sx={{
            my: 2,
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            {isCsrVerified
              ? "NGO's CSR Certificate"
              : "Do you have NGO's CSR Certificate?"}
            {isCsrVerified && (
              <VerifiedIcon
                color="green"
                fontSize="small"
                sx={{ color: "green" }}
              />
            )}
          </Typography>
          {!isCsrVerified && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CancelIcon
                sx={{
                  cursor: "pointer",
                  mx: 1,
                  color: have_csr ? "lightgrey" : "grey",
                }}
                onClick={() => {
                  setChangeState(!changeState);
                  setValue("have_csr", false);
                }}
              />
              <CheckCircleIcon
                sx={{
                  cursor: "pointer",
                  mx: 1,
                  color: have_csr ? "grey" : "lightgrey",
                }}
                onClick={() => {
                  setChangeState(!changeState);
                  setValue("have_csr", true);
                }}
              />
            </Box>
          )}
        </Box>
        <Box>
          {isCsrVerified && (
            <Typography sx={{ fontSize: 11, fontWeight: 600, color: "green" }}>
              Document is verified and cannot be modified
            </Typography>
          )}
          {!isCsrVerified && csr?.message && have_csr && (
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
                sx={{
                  ml: 1,
                  fontSize: 12,
                  fontWeight: "bold",
                  color: red[800],
                }}
              >
                {csr?.message}
              </Typography>
            </Box>
          )}
        </Box>

        {have_csr && (
          <>
            <Stack
              direction={isMobile ? "column" : "row"}
              spacing={2}
              my={3}
              alignItems={!isMobile ? "center" : ""}
              justifyContent={"space-around"}
            >
              <RHFTextField
                name="csr"
                label="Enter NGO's  CSR Number "
                sx={{ flex: 0.6 }}
                disabled={isCsrVerified}
              />
              <RHFUploadSingleFile2
                accept="image/*, .pdf"
                isUploaded={csr_doc}
                setValue={setValue}
                name={"csr_doc"}
                path={`Ngo/${ngoProfile?._id}/csr`}
                label={"Click to upload CSR"}
                width={0.4}
                disabled={isCsrVerified}
              />
            </Stack>
          </>
        )}
      </Box>
    </Box>
  );
}

export default StepThree;
