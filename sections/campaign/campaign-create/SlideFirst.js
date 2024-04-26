import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { sentenceCase } from "change-case";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import dayjs from "dayjs";
// @mui
import {
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
// components
import {
  FormProvider,
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@/components/hook-form";
import { updateCampaignHelper } from "@/helper/campaign";
import { PixeEvent } from "@/utils/facebookPixel";
import { GtmEvent } from "@/utils/googleTagManager";
import { pinCodeHelper } from "@/helper/pincode";
import { CATEGORY_OPTION } from "@/_mock/campaignCategory";

// ----------------------------------------------------------------------

export default function SlideFirst({
  isEdit,
  currentCampaign,
  setCampaign,
  user,
  isAuthenticated,
  activeStep,
  setActiveStep,
}) {
  const campaignCategories = [
    {
      label: "----- Select Category -----",
      value: "nocategory",
    },
    ...CATEGORY_OPTION,
  ];

  const theme = useTheme();

  const { enqueueSnackbar } = useSnackbar();

  const {
    campaignId,
    beneficiaryName,
    areaCode,
    location,
    targetAmount,
    category,
    endDate,
    hasExpiry,
  } = currentCampaign;

  const [localLocation, setLocalLocation] = useState();

  const NewCampaignSchema = Yup.object().shape({
    beneficiaryName: Yup.string()
      .required("Name is required")
      .min(5, "Enter valid name"),
    areaCode: Yup.string()
      .required("Pin Code is required")
      .min(6, "Enter valid Pin Code")
      .max(6, "Enter valid Pin Code"),
    category: Yup.string().required("Category  is required"),
    hasExpiry: Yup.boolean(),
    endDate: Yup.string().required("End date is required"),
    targetAmount: Yup.number()
      .typeError("Raise Amount must be a number")
      .required("Raise Amount is required")
      .min(10000, "Raise amount cannot be less than 10,000")
      .max(100000000, "Raise amount cannot be greater than 10,00,00,000"),
  });

  const defaultValues = {
    beneficiaryName: currentCampaign.beneficiaryName || "",
    areaCode: currentCampaign.areaCode || "",
    targetAmount: currentCampaign.targetAmount || "",
    category: currentCampaign.category || campaignCategories[0].value,
    localLocation: currentCampaign.location || "",
    hasExpiry: false,
    endDate: currentCampaign.endDate || new Date(),
  };

  const methods = useForm({
    resolver: yupResolver(NewCampaignSchema),
    defaultValues,
  });

  const {
    control,
    setValue,
    handleSubmit,
    clearErrors,
    setError,
    watch,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  console.log(defaultValues);

  useEffect(() => {
    if (currentCampaign) {
      setValue("beneficiaryName", currentCampaign.beneficiaryName);
      setValue("areaCode", currentCampaign.areaCode);
      setValue("targetAmount", currentCampaign.targetAmount);
      setValue("category", currentCampaign.category);
      setValue("localLocation", currentCampaign.location);
      setValue("endDate", currentCampaign.endDate);
    }
  }, [currentCampaign]);

  const onSubmit = async (data) => {
    const { beneficiaryName, areaCode, category, targetAmount, endDate } = data;
    try {
      if (isEdit) {
        const metaData = {
          beneficiary_name: beneficiaryName,
          category,
          target_amount: targetAmount,
          end_date: endDate,
          pincode: areaCode,
          location: localLocation,
        };

        updateCampaignHelper(campaignId, user.id, user.token, metaData).then(
          async (data) => {
            if (data.error) {
              enqueueSnackbar(data.error, {
                variant: "error",
              });
            } else {
              // dispatch(onNextStep());
              setActiveStep(activeStep + 1);
            }
          }
        );
      } else {
        // dispatch(
        //   addCart({
        //     ...newCampaign,
        //     beneficiaryName,
        //     areaCode,
        //     targetAmount,
        //     category,
        //     endDate,
        //   })
        // );
        // dispatch(onNextStep());
        setActiveStep(activeStep + 1);
      }
      PixeEvent("b_campaign_first_step", data);
      GtmEvent("b_campaign_first_step", data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChange = async (e) => {
    const pincode = e.target.value;
    setValue("areaCode", pincode);
    if (pincode.length === 6) {
      clearErrors("areaCode");
      pinCodeHelper(pincode)
        .then((response) => {
          setLocalLocation(`${response[0].district}, ${response[0].circle}`);
          setCampaign((prevState) => ({
            ...prevState,
            location: localLocation,
          }));
        })
        .catch((err) => {
          setError("areaCode", { type: "custom", message: "Invalid PIN Code" });
          enqueueSnackbar("Invalid PIN Code", {
            variant: "error",
          });
        });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 3 }}>
            <Grid item xs={12} md={12}>
              <Card
                sx={{
                  p: 3,
                  m: 2,
                  color: theme.palette.text.secondary,
                  backgroundColor: theme.palette.background.neutral,
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Typography variant="h4">I am raising funds for</Typography>
                  <RHFSelect
                    name="category"
                    sx={{ width: 240, bgcolor: "#fff" }}
                  >
                    {campaignCategories.map((value, index) => (
                      <option key={index} value={value.value} sx={{ p: 1 }}>
                        {sentenceCase(value.label)}
                      </option>
                    ))}
                  </RHFSelect>
                </Stack>
              </Card>
            </Grid>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3} mt={2}>
                <RHFTextField name="beneficiaryName" label="Beneficiary Name" />

                <RHFTextField name="targetAmount" label="Raise amount" />

                <RHFTextField
                  name="areaCode"
                  label="Pin Code"
                  onChange={handleOnChange}
                  maxLength={6}
                />

                {localLocation && <Typography>{localLocation}</Typography>}
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ position: "relative" }}
                >
                  <RHFCheckbox name="hasExpiry" sx={{ ml: "0.5px", mr: 0 }} />
                  <Typography
                    variant="body2"
                    sx={{ position: "absolute", top: 10, left: 40 }}
                  >
                    Add Expiry Date
                  </Typography>
                </Stack>

                {values.hasExpiry && (
                  <Controller
                    name="endDate"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <DatePicker
                        label="Campaign end date"
                        value={dayjs(field.value)}
                        onChange={(newValue) => {
                          setValue("endDate", newValue);
                        }}
                      />
                    )}
                  />
                )}
              </Stack>
            </Card>
            <Stack direction="row" justifyContent="flex-end">
              <LoadingButton
                sx={{ m: 1 }}
                type="submit"
                variant="contained"
                size="large"
                loading={isSubmitting}
              >
                Next
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
