import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";

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
import {
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  StepFive,
  StepSix,
  StepSeven,
} from "./index";
import { pinCodeInfo } from "../../../../utils/pinCode";
// import { bandAccountRegex, ifscCodeRegex, socialLinkRegex } from '../../../../utils/regex';
// import { updateKYCHelper } from '../../../../helper/user';
import { NgoValidationSchema } from "./NgoValidateSchema";
import { NgoDefaultValue } from "./NgoDefaultValue";

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
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  mb: 5,
  mr: 5,
}));

// ----------------------------------------------------------------------

const steps = [
  {
    header: "Enter NGO Basic Information",
    label: "Basic Details",
  },
  {
    header: "Enter NGO's Location and Email",
    label: "Location and Email",
  },
  {
    header: "Enter NGO Registration Details",
    label: "Registration Details",
  },
  {
    header: "Enter NGO Bank Account Details",
    label: "Bank Details",
  },
  {
    header: "Enter NGO FCRA Account Details",
    label: "FCRA Details",
  },
  {
    header: "Enter Users KYC Details",
    label: "User KYC Details",
  },
  {
    header: "Enter NGO Social Links",
    label: "Social Links",
  },
];

export default function NgoOnboarding({ handleClose, setOpen }) {
  const {
    user,
    ngoProfile,
    userProfile,
    refreshUser,
    registerNgo,
    refreshNgo,
    updateNgoProfile,
  } = useAuth();

  const [activeStep, setActiveStep] = useState(0);
  const isMobile = useResponsive("down", "md");
  const isLastStep = activeStep === steps.length - 1;
  const [show, setShow] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = () => setShow(!show);
  const kycVerified = userProfile?.kyc_status === "verified";

  const currentValidationSchema = NgoValidationSchema[activeStep];

  const methods = useForm({
    resolver: yupResolver(currentValidationSchema),
    defaultValues: NgoDefaultValue(ngoProfile),
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

  useEffect(() => {
    refreshUser(user.uid, user.token);
    refreshNgo(user.id, user.token, ngoProfile._id);
  }, []);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const submitForm = async (data) => {
    const payload = {
      name: data.name,
      registered_name: data.registered_name,
      bio: data.bio,
      social_media: {
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

    if (
      data.reg_number &&
      ngoProfile.reg_cert?.is_verified !== "verified" &&
      activeStep === 2
    ) {
      payload.reg_cert = {
        number: data.reg_number,
        document: data.reg_doc,
      };
    }

    if (
      data.pan &&
      ngoProfile.pan_card?.is_verified !== "verified" &&
      activeStep === 2
    ) {
      payload.pan_card = {
        number: data.pan,
        document: data.pan_card_doc,
      };
    }

    if (
      data.twelve_a &&
      ngoProfile.twelve_a?.is_verified !== "verified" &&
      activeStep === 2
    ) {
      payload.twelve_a = {
        number: data.twelve_a,
        document: data.twelve_a_doc,
        expiry_date: data.twelve_a_expiry,
      };
    }

    if (
      data.eighty_g &&
      ngoProfile.eighty_g?.is_verified !== "verified" &&
      activeStep === 2
    ) {
      payload.eighty_g = {
        number: data.eighty_g,
        document: data.eighty_g_doc,
        expiry_date: data.eighty_g_expiry,
      };
    }

    if (
      data.csr &&
      ngoProfile.csr?.is_verified !== "verified" &&
      activeStep === 2
    ) {
      payload.csr = {
        number: data.csr,
        document: data.csr_doc,
        expiry_date: data.csr_expiry,
      };
    }

    if (
      data.acc_no &&
      userProfile.bank_info?.is_verified !== "verified" &&
      activeStep === 3
    ) {
      payload.account_details = {
        beneficiary_name: data.ben_name,
        account_type: data.acc_type,
        account_no: data.acc_no,
        ifsc_code: data.ifsc_code,
        document: data.bank_doc,
      };
    }

    if (
      data.fcra_no &&
      ngoProfile.fcra?.is_verified !== "verified" &&
      activeStep === 4
    ) {
      payload.fcra = {
        number: data.fcra_no,
        document: data.fcra_doc,
        expiry_date: data.fcra_expiry,
      };
    }

    if (
      data.f_acc_no &&
      ngoProfile.fcra_account_details?.is_verified !== "verified" &&
      activeStep === 4
    ) {
      payload.fcra_account_details = {
        beneficiary_name: data.f_ben_name,
        account_type: data.f_acc_type,
        account_no: data.f_acc_no,
        ifsc_code: data.f_ifsc_code,
        swift_code: data.f_swift_code,
        document: data.f_bank_doc,
      };
    }

    if (
      data.user_first_name &&
      userProfile.user_info?.is_verified !== "verified" &&
      activeStep === 5
    ) {
      payload.user_info = {
        first_name: data.user_first_name,
        last_name: data.user_last_name,
        doc_name: data.user_document_name,
        doc_no: data.user_document_number,
        doc_front_side: data.user_document_front,
        doc_back_side: data.user_document_back,
        designation: data.user_relation,
      };
    }

    if (activeStep === 5) {
      payload.kyc_status = "submitted";
    }

    if (activeStep === 6) {
      await updateNgoProfile(user.id, user.token, user.ngoId, payload);
      refreshUser(user.uid, user.token);
      refreshNgo(user.id, user.token, ngoProfile._id);
    }

    let profile;
    if (!user.ngoId) {
      profile = await registerNgo(user.id, user.token, payload, user.uid);
    } else {
      await updateNgoProfile(user.id, user.token, user.ngoId, payload);
    }

    if (!ngoProfile?._id) {
      await refreshNgo(user.id, user.token, user.ngoId);
    }

    if (isLastStep) {
      setShowMessage(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      localStorage.setItem("activeStep", activeStep + 1);
    }
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

  const handleCloseMessage = () => {
    setShowMessage(false);
    handleClose();
  };

  const ComponentForm = (step) => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo handleOnChange={handleOnChange} />;
      case 2:
        return (
          <StepThree
            setValue={setValue}
            value={getValues}
            control={control}
            ngo={ngoProfile}
          />
        );
      case 3:
        return (
          <StepFour
            setValue={setValue}
            value={getValues}
            kycVerified={kycVerified}
            user={userProfile}
          />
        );
      case 4:
        return (
          <StepFive
            show={show}
            setShow={setShow}
            value={getValues}
            setValue={setValue}
            handleChange={handleChange}
            control={control}
            kycVerified={kycVerified}
            ngo={ngoProfile}
          />
        );
      case 5:
        return (
          <StepSix
            value={getValues}
            setValue={setValue}
            watch={watch}
            kycVerified={kycVerified}
            user={userProfile}
          />
        );
      case 6:
        return <StepSeven />;
      default:
        return <StepOne />;
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
      {isMobile ? (
        <MobileStepperNav activeStep={activeStep} handleClose={handleClose} />
      ) : (
        <DesktopStepperNav activeStep={activeStep} />
      )}
      <Box sx={{ flex: 1, py: isMobile ? 2 : 5, px: isMobile ? 1 : 5 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(submitForm)}>
          {ComponentForm(activeStep)}
          <ButtonNav>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mt: 1, mr: 1 }}
            >
              Back
            </Button>
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
          </ButtonNav>
        </FormProvider>
      </Box>
      {!isMobile && (
        <CloseIcon
          sx={{ flex: 0.1, cursor: "pointer" }}
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
        top: -15,
        right: -15,
        color: "black",
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
