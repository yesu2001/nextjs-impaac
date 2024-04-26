import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { paramCase } from "change-case";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
// @mui
import { Card, Grid, Link, Stack, Typography, useTheme } from "@mui/material";
import { useSnackbar } from "notistack";
// components
import {
  FormProvider,
  RHFEditor,
  RHFSelect,
  RHFTextField,
  RHFCheckbox,
} from "@/components/hook-form";
import { createCampaignHelper } from "@/helper/campaign";
import { PixeEvent } from "@/utils/facebookPixel";
import { GtmEvent } from "@/utils/googleTagManager";
import { DISCRIPTION, renderDescription } from "@/_mock/description";
import CropImageBox from "./cropImage/CropImageDialog";
import { CATEGORY_OPTION } from "@/_mock/campaignCategory";
import RegisterAndLogin from "@/sections/auth/popupAuth/RegisterAndLogin";
import useAuth from "@/hooks/useAuth";

export default function Slide({ sx }) {
  const theme = useTheme();
  const { user, isAuthenticated } = useAuth();

  const campaignCategories = [
    {
      label: "----- Select Category -----",
      value: "nocategory",
    },
    ...CATEGORY_OPTION,
  ];

  const { enqueueSnackbar } = useSnackbar();
  const route = useRouter();

  const [openConfirm, setOpenConfirm] = useState(false);

  const [successRedirect, setSuccessRedirect] = useState(false);

  const refCode = Cookies.get("ref");

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  useEffect(() => {
    if (successRedirect && user?.id) {
      createCampaignFunction();
    }
  }, [user.token]);

  const NewCampaignSchema = Yup.object().shape({
    category: Yup.string().required("Category  is required"),
    title: Yup.string()
      .required("Fundraiser title is required")
      .max(100, "Title must be least than 100 characters")
      .min(20, "Title must be at least 20 characters"),
    description: Yup.string().required("Story is required"),
    targetAmount: Yup.number()
      .typeError("Raise Amount must be a number")
      .min(10000, "Raise amount cannot be less than 10000")
      .max(100000000, "Raise amount cannot be greater than 10,00,00,000"),
    isChecked: Yup.boolean().oneOf([true], "Accept terms and conditions"),
  });

  const defaultValues = {
    category: CATEGORY_OPTION[0].value,
    title: "",
    description: DISCRIPTION,
    images: [],
    targetAmount: "10000",
    isChecked: false,
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(NewCampaignSchema),
    defaultValues,
  });

  const {
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
  } = methods;

  const values = watch();

  useEffect(() => {
    setTimeout(() => {
      setValue("description", DISCRIPTION);
    }, 1000);
  }, [setValue]);

  useEffect(() => {
    const newDescription = renderDescription(values.category);
    setValue("description", newDescription);
  }, [values.category]);

  const onError = (errors, e) => {
    if (errors) {
      const errorsvalues = Object.keys(errors);
      if (errorsvalues.length > 0) {
        const firstErrorElement = document.getElementById(errorsvalues[0]);
        firstErrorElement.scrollIntoView({
          behavior: `smooth`,
          block: "center",
        });
      }
    }
  };

  const onSubmit = async (data) => {
    const { category, title, description, images, targetAmount, isChecked } =
      data;
    try {
      PixeEvent("b_create_campaign_submit", data);
      GtmEvent("b_create_campaign_submit", data);

      if (!isAuthenticated) {
        handleOpenConfirm(true);
        setSuccessRedirect(true);
      } else {
        createCampaignFunction(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const createCampaignFunction = (data) => {
    const metaData = {
      gallery: data?.images === undefined ? images : data.images,
      category: data?.category || category,
      title: data?.title || title,
      description: data?.description || description,
      target_amount: data?.targetAmount || targetAmount,
      ref: refCode,
    };

    createCampaignHelper(user.id, user.token, metaData).then(async (data) => {
      if (data.error) {
        enqueueSnackbar(data.error, {
          variant: "error",
        });
      } else {
        localStorage.setItem(
          "isCampaignNew",
          JSON.stringify({ newCampaign: true })
        );
        route.push(`/fundraisers/${paramCase(data?.slug)}/${data.id}`);
      }
    });
  };

  return (
    <div style={{ ...sx }}>
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <Grid spacing={3}>
          <Grid item xs={12} md={8}>
            <Card variant="outlined" sx={{ mb: 3 }}>
              <Stack>
                <Card
                  sx={{
                    p: { xs: 2, sm: 3 },
                    m: { xs: 2, sm: 3 },
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.background.neutral,
                    border: "1px solid rgba(145, 158, 171, 0.32)",
                  }}
                >
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <Typography variant="h4" sx={{ color: "#444444" }}>
                      I am raising funds for
                    </Typography>
                    <RHFSelect
                      name="category"
                      sx={{ borderRadius: 1, width: 250, bgcolor: "#fff" }}
                    >
                      {campaignCategories.map((value, index) => (
                        <option key={index} value={value.value}>
                          {value.label}
                        </option>
                      ))}
                    </RHFSelect>
                  </Stack>
                </Card>
              </Stack>
              <Card
                sx={{
                  p: { xs: 2, md: 3 },
                  background: "rgba(255,255,255,0.7)",
                }}
              >
                <Stack spacing={3} mt={2}>
                  <div>
                    <Typography variant="subtitle2" sx={{ ml: "5px" }}>
                      Fundraiser Title *
                    </Typography>
                    <RHFTextField
                      name="title"
                      tip='Heading should be simple, small, and clear. Giving a better understanding of your problem. Ex. "Please Help me with Medical Emergency."'
                      sx={{ m: 0 }}
                      id="title"
                    />
                  </div>

                  <div>
                    <Typography variant="subtitle2" sx={{ ml: "5px" }}>
                      Fundraiser Description *
                    </Typography>
                    <RHFEditor
                      simple
                      id="description"
                      name="description"
                      placeholder="Tell the story about why you are running a fundraiser"
                    />
                  </div>

                  <div>
                    <CropImageBox setValue={setValue} values={values} />
                  </div>
                  <div>
                    <Typography variant="subtitle2" sx={{ ml: "5px" }}>
                      Donation Amount *
                    </Typography>
                    <RHFTextField
                      id="targetAmount"
                      name="targetAmount"
                      tip="The donation amount should be as per your cause requirement by default it is Rs.10000. You may change it at the time of fundraiser campaign creation."
                      sx={{ m: 0 }}
                    />
                  </div>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ position: "relative" }}
                  >
                    <RHFCheckbox name="isChecked" sx={{ ml: "0.5px", mr: 0 }} />
                    <Typography
                      variant="body2"
                      sx={{ position: "absolute", top: 10, left: 50 }}
                    >
                      I agree to the Impaac foundation &nbsp;
                      <Link
                        underline="always"
                        color="text.primary"
                        target="_blank"
                        rel="noopener"
                        href={"/terms-conditions"}
                        sx={{ color: "#4169E1" }}
                      >
                        Terms
                      </Link>
                      {"  "}
                      and{"  "}
                      <Link
                        underline="always"
                        color="text.primary"
                        target="_blank"
                        rel="noopener"
                        href={"/privacy-policy"}
                        sx={{ color: "#4169E1" }}
                      >
                        Privacy Policy
                      </Link>
                      .
                    </Typography>
                  </Stack>
                </Stack>
              </Card>
              <Stack direction="row" justifyContent="center">
                <LoadingButton
                  fullWidth
                  sx={{ m: 1 }}
                  type="submit"
                  variant="contained"
                  size="large"
                  loading={isSubmitting}
                >
                  Submit
                </LoadingButton>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </FormProvider>
      <RegisterAndLogin open={openConfirm} onClose={handleCloseConfirm} />
    </div>
  );
}
