import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { paramCase } from "change-case";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
// @mui
import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
// redux
// import { addCart, onBackStep, resetCart } from '../../../redux/slices/newCampaign';
// import { useDispatch, useSelector } from '../../../redux/store';
// routes
// import { PATH_PAGE } from '../../../routes/paths';
// components
import { FormProvider, RHFEditor, RHFTextField } from "@/components/hook-form";
import Iconify from "@/components/Iconify";
import { createCampaignHelper, updateCampaignHelper } from "@/helper/campaign";
import { PixeEvent } from "@/utils/facebookPixel";
import { GtmEvent } from "@/utils/googleTagManager";
import RegisterAndLogin from "@/sections/auth/popupAuth/RegisterAndLogin";
import { validate } from "./CampaignCreateValidation";
import CropImageBox from "./cropImage/CropImageDialog";
import { youtubeVideoRegex } from "@/utils/regex";
import { useRouter } from "next/navigation";

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

// ----------------------------------------------------------------------

export default function SlideTwo({
  isEdit,
  currentCampaign,
  setCampaign,
  user,
  isAuthenticated,
  activeStep,
  setActiveStep,
}) {
  // const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();
  // const navigate = useNavigate();
  const router = useRouter();

  const [openConfirm, setOpenConfirm] = useState(false);

  const imagesRef = useRef(null);

  // const { newCampaign } = useSelector((state) => state.newCampaign);

  const { campaignId, title, description, ytlink, isChecked, gallery } =
    currentCampaign;

  const handleBackStep = () => {
    // dispatch(onBackStep());
    setActiveStep(activeStep - 1);
  };

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const NewCampaignSchema = Yup.object().shape({
    title: Yup.string()
      .required("Fundraiser title is required")
      .max(100, "Title too long")
      .min(20, "Title too small"),
    description: Yup.string().required("Description Code is required"),
    images: Yup.array().min(1, "Images is required"),
    ytlink: Yup.string()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .matches(youtubeVideoRegex, "Youtube Link is not valid"),
  });

  const defaultValues = {
    title: title || "",
    description: description || "",
    ytlink: ytlink || "",
    images: gallery || [],
  };

  const methods = useForm({
    resolver: yupResolver(NewCampaignSchema),
    defaultValues,
  });

  const {
    setFocus,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const values = watch();

  useEffect(() => {
    const firstError = Object.keys(errors).reduce(
      (field, a) => (errors[field] ? field : a),
      null
    );
    if (!firstError) return;
    if (firstError === "images") {
      imagesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      setFocus(firstError);
    }
  }, [errors, setFocus]);

  const onSubmit = async (data) => {
    const { title, description, ytlink, isChecked, images } = data;
    try {
      PixeEvent("b_campaign_second_step", data);
      GtmEvent("b_campaign_second_step", data);
      if (isEdit) {
        const metaData = {
          title,
          description,
          ytlink,
          gallery: images,
        };

        updateCampaignHelper(campaignId, user.id, user.token, metaData).then(
          async (data) => {
            if (data.error) {
              enqueueSnackbar(data.error, {
                variant: "error",
              });
            } else {
              // navigate(
              //   PATH_PAGE.campaignView(campaignId, paramCase(data?.slug))
              // );
              router.push(
                `/fundraisers/${paramCase(data?.slug)}/${campaignId}`
              );
            }
          }
        );
      } else {
        // dispatch(
        //   addCart({ ...newCampaign, title, description, ytlink, isChecked })
        // );
        const metaData = {
          beneficiary_name: beneficiaryName,
          gallery: images,
          category,
          title,
          description,
          target_amount: targetAmount,
          ytlink,
          end_date: endDate,
          pincode: areaCode,
          location,
          isChecked,
        };
        const error = validate(metaData);
        if (error) {
          enqueueSnackbar(error, {
            variant: "error",
          });
          return false;
        }

        if (!isAuthenticated) {
          handleOpenConfirm(true);
        } else {
          createCampaignHelper(user.id, user.token, metaData).then(
            async (data) => {
              if (data.error) {
                enqueueSnackbar(data.error, {
                  variant: "error",
                });
              } else {
                // dispatch(resetCart());
                router.push(`/fundraisers/${paramCase(data?.slug)}/${data.id}`);
                // navigate(
                //   PATH_PAGE.campaignView(data.id, paramCase(data?.slug)),
                //   { state: { newCampaign: true } }
                // );
              }
            }
          );
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Card sx={{ mb: 3 }}>
              <Card sx={{ p: 3 }}>
                <Box ref={imagesRef}>
                  <CropImageBox setValue={setValue} values={values} />
                </Box>

                <Stack spacing={3} mt={2}>
                  <RHFTextField
                    name="title"
                    label="Title"
                    tip="Campaign Title"
                    id="title"
                  />

                  <div>
                    <LabelStyle>Description</LabelStyle>
                    <RHFEditor simple name="description" />
                  </div>

                  <RHFTextField name="ytlink" label="Youtube Link (Optional)" />
                </Stack>
              </Card>
              <Stack direction="row" justifyContent="flex-end">
                <Button
                  sx={{ mr: 2 }}
                  size="small"
                  color="inherit"
                  onClick={handleBackStep}
                  startIcon={<Iconify icon={"eva:arrow-ios-back-fill"} />}
                >
                  Back
                </Button>
                <LoadingButton
                  sx={{ m: 1 }}
                  type="submit"
                  variant="contained"
                  size="large"
                  loading={isSubmitting}
                >
                  {isAuthenticated ? "Submit" : "Login"}
                </LoadingButton>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </FormProvider>
      <RegisterAndLogin open={openConfirm} onClose={handleCloseConfirm} />
    </>
  );
}
