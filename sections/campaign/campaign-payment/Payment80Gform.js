import { useState } from "react";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Card, Stack, styled, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { PANCARD } from "@/utils/regex";
import { FormProvider, RHFTextField } from "@/components/hook-form";
import { claim80Ghelper } from "@/helper/donor";
import Iconify from "@/components/Iconify";
import DonationPDF from "@/sections/@dashboard/donation/details/DonationPDF";

const CardSection = styled(Card)(({ theme }) => ({
  width: "95%",
  margin: "auto",
  padding: 20,
  [theme.breakpoints.up("md")]: {
    width: "35%",
  },
}));

export default function Payment80Gform({
  donorId,
  user,
  donor: donorInfo,
  style,
  donation,
  handleClose,
}) {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  const [donor, setDonor] = useState();
  const [taxInfo, setTaxInfo] = useState({ pancard: "", address: "" });

  console.log(donation);

  const donationInfo = {
    ...donation,
    address: taxInfo.address,
    pancard: taxInfo.pancard,
  };

  const NewCampaignSchema = Yup.object().shape({
    pancard: Yup.string()
      .required("Pan card is required")
      .matches(PANCARD, "Enter Valid Pan Card"),
    address: Yup.string()
      .required("Address is required")
      .min(15, "Enter valid address"),
  });

  const defaultValues = {
    pancard: "",
    address: "",
  };

  const methods = useForm({
    resolver: yupResolver(NewCampaignSchema),
    defaultValues,
  });

  const {
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    setIsLoading(true);
    const { pancard, address } = data;
    setTaxInfo({
      address,
      pancard,
    });
    try {
      //
      claim80Ghelper(donorId, user?.id, user?.token, { pancard, address }).then(
        (data) => {
          if (data.error) {
            enqueueSnackbar(data.error, {
              variant: "error",
            });
          } else {
            setDonor(data);
          }
        }
      );
      if (donor) {
        setIsLoading(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ display: "flex", m: 2, width: 400 }}>
      <CardSection sx={style}>
        <CloseIcon
          sx={{
            cursor: "pointer",
            position: "absolute",
            top: "7px",
            right: "7px",
          }}
          onClick={handleClose}
        />
        <Typography
          variant="subtitle2"
          sx={{ pt: 3, mx: 1, fontWeight: 600, textAlign: "center" }}
        >
          Claim tax benefit certificate under 80G for your donation
        </Typography>
        {!donor && (
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} sx={{ my: 2 }}>
              <RHFTextField name="pancard" label="Pan Card" />

              <RHFTextField name="address" label="Address" />
            </Stack>
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              {isLoading ? "Loading..." : "Submit"}
            </LoadingButton>
          </FormProvider>
        )}
        {donor && (
          <Stack alignItems="center" justifyContent="center">
            <Iconify
              icon={"icon-park-solid:success"}
              sx={{ my: 3, color: "green", width: 200, height: 100 }}
            />
            <PDFDownloadLink
              document={
                <DonationPDF donation={donationInfo} style={{ marginTop: 3 }} />
              }
              fileName="eighty_g.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? (
                  "Loading document..."
                ) : (
                  <Button variant="contained" onClick={handleClose}>
                    Download Invoice
                  </Button>
                )
              }
            </PDFDownloadLink>
          </Stack>
        )}
      </CardSection>
    </Box>
  );
}
