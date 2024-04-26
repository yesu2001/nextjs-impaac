import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { nanoid } from "nanoid";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import * as Yup from "yup";

// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { LoadingButton } from "@mui/lab";
import { Box, Stack } from "@mui/material";
// hooks
import useAuth from "../../../hooks/useAuth";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
// components
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
} from "../../../components/hook-form";

// ----------------------------------------------------------------------
import { PHONEREGEX } from "../../../utils/regex";
import { countries } from "../../../_mock";
import { VerifyCodePopup } from "../../auth/verify-code";
import { createUpiDonorHelper } from "../../../helper/upiDonor";
import { useSelector } from "../../../redux/store";

export default function PaymentLoginBox({ campaign }) {
  const { generateRecaptcha, grecaptcha, isAuthenticated, user } = useAuth();
  const auth = getAuth();
  const { enqueueSnackbar } = useSnackbar();

  const [userData, setUserData] = useState();

  const [openConfirm, setOpenConfirm] = useState(false);

  const isMountedRef = useIsMountedRef();

  // const { donationCheckout } = useSelector((state) => state.donation);

  // const { amount, currency, isAnonymous } = donationCheckout;
  const amount = 0;

  useEffect(() => {
    setOpenConfirm(false);
  }, [isAuthenticated]);

  useEffect(async () => {
    await generateRecaptcha("recaptcha-container", { size: "invisible" });
    window.recaptchaVerifier.render().then((widgetId) => {
      window.recaptchaWidgetId = widgetId;
    });
  }, []);

  const handleClose = async () => {
    if (
      typeof grecaptcha !== "undefined" &&
      typeof window.recaptchaVerifier !== "undefined"
    ) {
      grecaptcha.reset(window.recaptchaVerifier);
    }
    setOpenConfirm(false);
  };

  const RegisterSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Name required")
      .max(30, "Full Name is too long"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(PHONEREGEX, "Mobile Number is not valid")
      .min(8, "Mobile Number is not valid")
      .max(12, "Mobile Number is not valid")
      .required("Phone Number is required"),
  });

  const defaultValues = {
    fullName: user?.displayName || "",
    email: user?.email || "",
    country: "91",
    phoneNumber: "",
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    const appVerifier = window.recaptchaVerifier;
    const { country, phoneNumber } = data;
    const number = `+${country}${phoneNumber}`;
    data.phoneNumber = number;
    try {
      await signInWithPhoneNumber(auth, number, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setOpenConfirm(true);
          setUserData(data);
        })
        .catch(({ message }) => {
          enqueueSnackbar(message, { variant: "error" });
        });
    } catch (error) {
      reset();
      if (isMountedRef.current) {
        setError("afterSubmit", { ...error, message: error.message });
      }
    }
  };

  const handleSubmitUpiDonor = () => {
    handleSubmit(async (data) => {
      const { phoneNumber } = data;
      // ReactGA.event({
      //     category: `${title}`,
      //     action: 'Donate now(Direct Upi)'
      // });

      if (!amount) {
        enqueueSnackbar("Donation Amount Required", {
          variant: "error",
        });
        return false;
      }

      const donor_id = nanoid();

      createUpiDonorHelper({ donor_id, phonenumber: phoneNumber, amount }).then(
        (data) => {
          if (data.error) {
            console.log(data.error);
          }
        }
      );

      window.location.href = `upi://pay?pa=${campaign?.upi_id}&pn=Dog+home&am=${amount}&tr=${donor_id}&invoiceNo=${donor_id}`;
    })();
  };

  const selectForeignCurrency = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div>
      <Box sx={{ p: 2, pt: 0 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <RHFTextField name="fullName" label="Full name" />

            <RHFTextField name="email" label="Email address" />

            <Stack direction="row" justifyContent="center">
              <RHFSelect
                sx={{ width: 95, mr: 0.5 }}
                name="country"
                label="Country"
                placeholder="Country"
              >
                <option value="91">+91 India</option>

                {countries.map((option) => (
                  <option key={option.code} value={option.phone}>
                    +{option.phone} {option.label}
                  </option>
                ))}
              </RHFSelect>
              <RHFTextField name="phoneNumber" label="Phone Number" />
            </Stack>

            {
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                DONATE NOW
              </LoadingButton>
            }

            {campaign?.is_virtual_account && (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <LoadingButton
                  variant="contained"
                  size="large"
                  onClick={handleSubmitUpiDonor}
                >
                  DONATE Via UPI
                </LoadingButton>
              </Box>
            )}
          </Stack>
        </FormProvider>
        <span id="recaptcha-container" style={{ visibility: "hidden" }} />
        <VerifyCodePopup
          open={openConfirm}
          onClose={handleClose}
          user={userData}
        />
      </Box>
    </div>
  );
}
