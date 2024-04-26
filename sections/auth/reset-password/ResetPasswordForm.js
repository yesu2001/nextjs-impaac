import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Modal, Stack, Typography } from '@mui/material';
// routes
// components
import { FormProvider, RHFSelect, RHFTextField } from '../../../components/hook-form';
import { firebaseGetNumber } from '../../../helper/firebase';
import { PHONEREGEX } from '../../../utils/regex';
import PopUp from '../../../components/PopUp';

import useAuth from '../../../hooks/useAuth';
import { countries } from '../../../_mock';

export default function ResetPasswordForm() {
  const { enqueueSnackbar } = useSnackbar();
  const { resetPassword } = useAuth();
  const [open, setOpen] = useState(false);
  const [showCountryBox, setCountryBox] = useState(false);
  const [num, setNum] = useState('');
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
  });

  const handleClose = () => setOpen(false);

  const defaultValues = {
    email: '',
    country: '91',
  };

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (PHONEREGEX.test(values.email)) {
      setCountryBox(true);
      setNum(values.email);
    } else {
      setCountryBox(false);
    }
  }, [values.email]);

  const onSubmit = async (data) => {
    try {
      const { country, email } = data;
      const number = `+${country}${num}`;

      await firebaseGetNumber({ email, phonenumber: number }).then(async (data) => {
        if (!num && data.error) {
          enqueueSnackbar(data.error, {
            variant: 'error',
          });
        } else {
          await resetPassword(data.email);
          // let hiddenEmail = '';
          // for (let i = 0; i < data.email.length; i++) {
          //   if (i > 2 && i < data.email.indexOf('@') - 2) {
          //     emailtosend += '*';
          //   } else {
          //     emailtosend += data.email[i];
          //   }
          // }
          setOpen(true);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {showCountryBox && (
          <RHFSelect name="country" label="Country" placeholder="Country">
            <option value="91">India+91</option>

            {countries.map((option) => (
              <option key={option.code} value={option.phone}>
                {option.label} +{option.phone}
              </option>
            ))}
          </RHFSelect>
        )}
        <RHFTextField name="email" label="Email address" />

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Send Request
        </LoadingButton>
      </Stack>
      <PopUp open={open} onClose={handleClose}>
        <Typography variant="h2" sx={{ borderRadius: '50%' }}>
          ✅
        </Typography>
        <Typography sx={{ fontWeight: 600 }}>Check your inbox for further instructions {values.email}</Typography>
      </PopUp>
    </FormProvider>
  );
}
