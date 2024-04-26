import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
// @mui
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { stepLabelClasses } from "@mui/material/StepLabel";
import { styled } from "@mui/material/styles";
// components
import { FormProvider } from "@/components/hook-form";
import PopUp from "@/components/PopUp";
// hook
import useAuth from "@/hooks/useAuth";
import useResponsive from "@/hooks/useResponsive";
// section
import { StepOne, StepTwo, StepThree, StepFour, StepFive } from ".";
import { pinCodeInfo } from "@/utils/pinCode";
import { updateUser } from "@/helper/user";
import { UserValidationSchema } from "./UserValidateSchema";
import { UserDefaultValue } from "./UserDefaultValue";

// ----------------------------------------------------------------------

const ColorlibStepLabel = styled(StepLabel)(() => ({
  [`& .${stepLabelClasses.label}`]: {
    [`&.${stepLabelClasses.completed}`]: {
      color: "rgb(255, 255, 255, 0.3)",
    },
    [`&.${stepLabelClasses.active}`]: {
      color: "rgb(255, 255, 255, 0.9)",
    },

    color: "#BDBDBD",
  },
}));

const ButtonNav = styled(Box)(() => ({
  flex: 0.1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  mb: 5,
  mr: 5,
}));

// ----------------------------------------------------------------------

const steps = [
  {
    header: "Enter your basic information",
    label: "Basic details",
  },
  {
    header: "Enter your location and email",
    label: "Location and email",
  },
  {
    header: "Enter  your bank account details",
    label: "Bank details",
  },
  {
    header: "Enter your KYC details",
    label: "User KYC details",
  },
  {
    header: "Enter your social links",
    label: "Social links",
  },
];

export default function UserOnboarding({ handleClose }) {
  const {
    user,
    updateUserProfile,
    userProfile,
    refreshUser,
    registerNgo,
    refreshNgo,
    updateNgoProfile,
  } = useAuth();
  // console.log(userProfile);

  const [activeStep, setActiveStep] = useState(0);
  const isMobile = useResponsive("down", "md");
  const isLastStep = activeStep === steps.length - 1;
  const [show, setShow] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = () => setShow(!show);

  const currentValidationSchema = UserValidationSchema[activeStep];

  const methods = useForm({
    resolver: yupResolver(currentValidationSchema),
    defaultValues: UserDefaultValue(userProfile),
  });

  const {
    getValues,
    control,
    watch,
    setValue,
    handleSubmit,
    clearErrors,
    setError,
    formState: { isSubmitting },
  } = methods;

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSkip = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const submitForm = async (data) => {
    const payload = {
      name: data.name,
      about: data.bio,
      social_links: {
        website: data.website,
        facebook: data.facebook,
        linkedin: data.linkedin,
        twitter: data.twitter,
        instagram: data.instagram,
        youtube: data.youtube,
      },
    };

    if (data.street) {
      payload.address = {
        street: data.street,
        city: data.city,
        state: data.state,
        country: data.country,
        area_code: data.area_code,
      };
    }

    if (data.acc_no) {
      payload.account_details = {
        beneficiary_name: data.ben_name,
        account_type: data.acc_type,
        account_no: data.acc_no,
        ifsc_code: data.ifsc_code,
        document: data.bank_doc,
      };
    }

    if (data.user_first_name) {
      payload.user_info = {
        first_name: data.user_first_name,
        last_name: data.user_last_name,
        doc_name: data.user_document_name,
        doc_no: data.user_document_number,
        doc_front_side: data.user_document_front,
        doc_back_side: data.user_document_back,
        is_verified: "submitted",
      };
    }

    if (activeStep === 3) {
      payload.kyc_status = "submitted";
    }

    if (activeStep === 4) {
      refreshUser(user.uid, user.token);
    }

    if (activeStep === 1) {
      await updateUserProfile(user.id, { displayName: data.name });
    }
    await updateUser(user.id, user.token, payload);

    if (isLastStep) {
      setShowMessage(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      localStorage.setItem("activeStep", activeStep + 1);
    }
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
    handleClose();
  };

  const handleOnChange = async (e) => {
    const code = e.target.value;
    setValue("area_code", code);
    if (code.length === 6) {
      clearErrors("area_code");

      const { city, state, country } = await pinCodeInfo(code);
      setValue("city", city);
      setValue("state", state);
      setValue("country", country);
    }
  };

  const ComponentForm = (step) => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo handleOnChange={handleOnChange} />;
      case 2:
        return (
          <StepThree setValue={setValue} value={getValues} control={control} />
        );
      case 3:
        return <StepFour value={getValues} setValue={setValue} watch={watch} />;
      case 4:
        return <StepFive />;
      default:
        return <StepOne />;
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      {isMobile ? (
        <MobileStepperNav activeStep={activeStep} handleClose={handleClose} />
      ) : (
        <DesktopStepperNav activeStep={activeStep} />
      )}
      <Box
        sx={{
          height: "100%",
          flex: 1,
          py: isMobile ? 2 : 5,
          px: isMobile ? 1 : 5,
        }}
      >
        <FormProvider
          methods={methods}
          onSubmit={handleSubmit(submitForm)}
          sx={{ height: "100%" }}
        >
          {ComponentForm(activeStep)}
          <ButtonNav>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mt: 1, mr: 1 }}
            >
              Back
            </Button>
            <Box>
              {/* {activeStep === 4 && (
                <Button onClick={handleSkip} sx={{ mt: 1, mr: 4 }}>
                  Skip
                </Button>
              )} */}
              <LoadingButton
                type="submit"
                loading={isSubmitting}
                sx={{
                  mt: 1,
                  mr: 1,
                  backgroundColor: "#3CBA6F",
                  textTransform: "initial",
                  color: "white",
                  "&:hover": { color: "white", backgroundColor: "#3CBA6F" },
                  ".MuiLoadingButton-loadingIndicator": {
                    color: "white",
                  },
                }}
              >
                {isLastStep ? "Finish" : "Save and Next"}
              </LoadingButton>
            </Box>
          </ButtonNav>
        </FormProvider>
      </Box>
      {!isMobile && (
        <CloseIcon
          sx={{
            flex: 0.1,
            position: "absolute",
            top: 10,
            right: 10,
            cursor: "pointer",
          }}
          onClick={handleClose}
        />
      )}
      <PopUp open={showMessage} onClose={handleCloseMessage}>
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            dispay: "flex",
            gap: 4,
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Typography variant="h2">✅</Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Thank you for submitting your documents.
          </Typography>
          <Typography variant="subtitle2" sx={{ mt: 1 }}>
            You'll receive a verification confirmation within
            <br /> 48 hours through your registered email.
          </Typography>
        </Box>
      </PopUp>
    </Box>
  );
}

// Mobile view stepper Header
const MobileStepperNav = ({ activeStep, handleClose }) => (
  <Box
    sx={{
      flex: 0.2,
      position: "relative",
      background: "#f0f1f2",
      color: "white",
      p: 3,
      borderRadius: 2,
    }}
  >
    <Typography
      variant="h3"
      sx={{ fontSize: "15px", textAlign: "center", py: 1, color: "black" }}
    >
      {steps[activeStep].header}
    </Typography>
    <Stepper activeStep={activeStep} alternativeLabel sx={{ my: 3 }}>
      {steps.map((label, index) => (
        <Step key={index}>
          <ColorlibStepLabel>{null}</ColorlibStepLabel>
        </Step>
      ))}
    </Stepper>
    <CloseIcon
      sx={{
        position: "absolute",
        top: 0,
        color: "black",
        right: 0,
        cursor: "pointer",
      }}
      onClick={handleClose}
    />
  </Box>
);

// Desktop view Stepper Navbar
const DesktopStepperNav = ({ activeStep }) => (
  <Box
    sx={{
      height: "100%",
      flex: 0.3,
      background: "#385F96",
      color: "white",
      p: 4,
      borderRadius: 2,
    }}
  >
    <Typography variant="h3" sx={{ py: 1 }}>
      Step {activeStep + 1}
    </Typography>
    <Typography variant="body2" sx={{ py: 1, color: "#D9D9D9" }}>
      {steps[activeStep].header}
    </Typography>

    <Stepper activeStep={activeStep} sx={{ my: 3 }} orientation="vertical">
      {steps.map((step, index) => (
        <Step key={index}>
          <ColorlibStepLabel>{step.label}</ColorlibStepLabel>
        </Step>
      ))}
    </Stepper>
  </Box>
);
