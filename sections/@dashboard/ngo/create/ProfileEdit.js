import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

// @mui
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { stepLabelClasses } from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';
// _mock
// import { _mapContact } from '../_mock';
// components
import { FormProvider } from '../../../components/hook-form';
import { pinCodeHelper } from '../../../helper/pincode';
import useAuth from '../../../hooks/useAuth';
import useResponsive from '../../../hooks/useResponsive';
import { addCart } from '../../../redux/slices/newCampaign';
import { useDispatch, useSelector } from '../../../redux/store';
import StepFive from '../../../sections/@dashboard/organisation/create/StepFive';
import StepFour from '../../../sections/@dashboard/organisation/create/StepFour';
import StepOne from '../../../sections/@dashboard/organisation/create/StepOne';
import StepThree from '../../../sections/@dashboard/organisation/create/StepThree';
import StepTwo from '../../../sections/@dashboard/organisation/create/StepTwo';
import { PHONEREGEX, bandAccountRegex, ifscCodeRegex } from '../../../utils/regex';

// import { ContactHero, ContactFormPage, ContactDetails, ContactSocial } from '../sections/contact';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

const ColorlibStepLabel = styled(StepLabel)(() => ({
  [`& .${stepLabelClasses.label}`]: {
    [`&.${stepLabelClasses.completed}`]: {
      color: 'rgb(255, 255, 255, 0.3)',
    },
    [`&.${stepLabelClasses.active}`]: {
      color: 'rgb(255, 255, 255, 0.9)',
    },

    color: '#BDBDBD',
  },
}));

const ButtonNav = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  mb: 5,
  mr: 5,
}));

// ----------------------------------------------------------------------

const steps = [
  {
    header: 'Enter NGO Basic Information',
    label: 'Basic Details',
  },
  {
    header: "Enter NGO's Location and Email",
    label: 'Location and Email',
  },
  {
    header: 'Enter NGO Registration Details',
    label: 'Registration Details',
  },
  {
    header: 'Enter NGO Bank Account Details',
    label: 'Bank Details',
  },
  {
    header: 'Enter NGO Social Links',
    label: 'Social Links',
  },
];

export default function NgoOnboarding({ handleClose }) {
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuth();
  console.log(user);
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const isMobile = useResponsive('down', 'md');
  const isLastStep = activeStep === steps.length - 1;
  const [show, setShow] = React.useState(false);
  const [localLocation, setLocalLocation] = React.useState();
  const dispatch = useDispatch();
  const { newCampaign } = useSelector((state) => state.newCampaign);

  const handleOnChange = async (e) => {
    const pincode = e.target.value;
    setValue('pincode', pincode);
    if (pincode.length === 6) {
      clearErrors('areaCode');
      pinCodeHelper(pincode)
        .then((response) => {
          setLocalLocation(response[0]);
          dispatch(addCart({ ...newCampaign, location: `${response[0].district}, ${response[0].circle}` }));
        })
        .catch((err) => {
          setError('areaCode', { type: 'custom', message: 'Invalid PIN Code' });
          enqueueSnackbar('Invalid PIN Code', {
            variant: 'error',
          });
        });
    }
  };

  React.useEffect(() => {
    const step = Number(localStorage.getItem('activeStep'));
    if (step) {
      setActiveStep(step);
    }
  }, []);

  const handleChange = () => {
    setShow(!show);
  };

  const [ngoData, setNgoData] = React.useState({
    name: user.displayName || '',
    registeredName: '',
    bio: user.about || '',
    email: user.email || '',
    contact: user.phoneNumber || '',
    address: user.address || '',
    pincode: user.areaCode || '',
    city: user.city || '',
    state: user.state || '',
    country: user.country || '',
    pan: '',
    panDoc: '',
    twelveADoc: '',
    twelveA: '',
    eightyGDoc: '',
    eightyG: '',
    ben_name: '',
    acc_type: '',
    acc_no: '',
    ifsc_code: '',
    f_ben_name: '',
    f_acc_type: '',
    f_acc_no: '',
    f_ifsc_code: '',
    website: user.website || '',
    instagram: user.instagram || '',
    facebook: user.facebook || '',
    twitter: user.twitter || '',
    youtube: user.website || '',
    linkedin: user.linkedin || '',
  });

  const validationSchema = [
    Yup.object().shape({
      name: Yup.string().required('Name of the organisation is required').min(5, 'Enter valid name'),
      registeredName: Yup.string(),
      bio: Yup.string().required('Bio / about is required').min(30, 'Maximum of 30 words'),
    }),
    Yup.object().shape({
      email: Yup.string().email('Email must be a valid email address').required('Email is required'),
      contact: Yup.string()
        .matches(PHONEREGEX, 'Mobile Number is not valid')
        .min(10, 'Mobile Number is not valid')
        .required('Phone Number is required'),
      address: Yup.string().required('Street no / building Name is required').min(10, 'Enter valid address'),
      pincode: Yup.string().required('pincode is required'),
      city: Yup.string(),
      state: Yup.string(),
      country: Yup.string(),
    }),
    Yup.object().shape({
      pan: Yup.string(),
      panDoc: Yup.string(),
      twelveA: Yup.string(),
      twelveADoc: Yup.string(),
      eightyG: Yup.string(),
      eightyGDoc: Yup.string(),
    }),
    Yup.object().shape({
      ben_name: Yup.string().required('Beneficiery Name is required').min(5, 'Enter valid name'),
      acc_no: Yup.string()
        .matches(bandAccountRegex, 'Account Number is not valid')
        .required('Account number is required')
        .min(10, 'Enter valid account number'),
      acc_type: Yup.string().required('Account type is required').min(5, 'Enter valid account type'),
      ifsc_code: Yup.string()
        .matches(ifscCodeRegex, 'IFSC code is not valid')
        .required('IFSC Code is required')
        .min(10, 'Enter valid IFSC code'),
      f_ben_name: Yup.string(),
      f_acc_no: Yup.string(),
      f_acc_type: Yup.string(),
      f_ifsc_code: Yup.string(),
    }),
    Yup.object().shape({
      website: Yup.string(),
      instagram: Yup.string(),
      facebook: Yup.string(),
      youtube: Yup.string(),
      linkedin: Yup.string(),
      twitter: Yup.string(),
    }),
  ];

  const currentValidationSchema = validationSchema[activeStep];

  const defaultValues = {
    name: ngoData.name || '',
    registeredName: ngoData.registeredName || '',
    bio: ngoData.bio || '',
    email: ngoData.email || '',
    contact: ngoData.contact.substring(3) || '',
    address: ngoData.address || '',
    pincode: ngoData.pincode || '',
    city: ngoData.city || '',
    state: ngoData.state || '',
    country: ngoData.country || '',
    pan: ngoData.pan || '',
    panDoc: ngoData.panDoc || '',
    twelveA: ngoData.twelveA || '',
    twelveADoc: ngoData.twelveADoc || '',
    eightyG: ngoData.eightyG || '',
    eightyGDoc: ngoData.eightyGDOc || '',
    ben_name: ngoData.ben_name || '',
    acc_no: ngoData.acc_no || '',
    acc_type: ngoData.acc_type || '',
    ifsc_code: ngoData.ifsc_code || '',
    f_ben_name: ngoData.f_ben_name || '',
    f_acc_type: ngoData.f_acc_type || '',
    f_acc_no: ngoData.f_acc_no || '',
    f_ifsc_code: ngoData.f_ifsc_code || '',
    website: ngoData.website || '',
    instagram: ngoData.instagram || '',
    facebook: ngoData.facebook || '',
    youtube: ngoData.youtube || '',
    linkedin: ngoData.linkedin || '',
    twitter: ngoData.twitter || '',
  };

  const methods = useForm({
    resolver: yupResolver(currentValidationSchema),
    defaultValues,
  });

  const {
    control,
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
    if (isLastStep) {
      console.log('submitted successfully');
      await setNgoData(data);
      handleClose();
    } else {
      if (!show) {
        setValue('f_ben_name', '');
        setValue('f_acc_type', '');
        setValue('f_acc_no', '');
        setValue('f_ifsc_code', '');
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      localStorage.setItem('activeStep', activeStep + 1);
    }
  };

  const setFileValue = (nameField, fileValue) => {
    setValue(nameField, fileValue);
  };

  const ComponentForm = (step) => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo localLocation={localLocation} handleOnChange={handleOnChange} />;
      case 2:
        return <StepThree setFileValue={setFileValue} />;
      case 3:
        return <StepFour show={show} setShow={setShow} handleChange={handleChange} />;
      case 4:
        return <StepFive />;
      default:
        return <StepOne />;
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
      {isMobile ? <MobileStepperNav activeStep={activeStep} /> : <DesktopStepperNav activeStep={activeStep} />}
      <Box sx={{ flex: 1, p: 5 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(submitForm)}>
          {ComponentForm(activeStep)}
          <ButtonNav>
            <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
              Back
            </Button>
            <Box>
              {(activeStep === 2 || activeStep === 3) && (
                <Button onClick={handleSkip} sx={{ mt: 1, mr: 4 }}>
                  Skip
                </Button>
              )}
              <LoadingButton
                type="submit"
                loading={isSubmitting}
                sx={{
                  mt: 1,
                  mr: 1,
                  backgroundColor: '#3CBA6F',
                  color: 'white',
                  '&:hover': { color: 'white', backgroundColor: '#3CBA6F' },
                }}
              >
                {isLastStep ? 'Finish' : 'Next'}
              </LoadingButton>
            </Box>
          </ButtonNav>
        </FormProvider>
      </Box>
    </Box>
  );
}

// Mobile view stepper Header
const MobileStepperNav = ({ activeStep }) => (
    <Box sx={{ flex: 0.2, background: '#f0f1f2', color: 'white', p: 3, borderRadius: 2 }}>
      <Typography variant="h3" sx={{ fontSize: '15px', textAlign: 'center', py: 1, color: 'black' }}>
        {steps[activeStep].header}
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ my: 3 }}>
        {steps.map((label, index) => (
          <Step key={index}>
            <ColorlibStepLabel>{null}</ColorlibStepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );

// Desktop view Stepper Navbar
const DesktopStepperNav = ({ activeStep }) => (
    <Box sx={{ flex: 0.3, background: '#385F96', color: 'white', p: 4, borderRadius: 2 }}>
      <Typography variant="h3" sx={{ py: 1 }}>
        Step {activeStep + 1}
      </Typography>
      <Typography variant="body2" sx={{ py: 1, color: '#D9D9D9' }}>
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
