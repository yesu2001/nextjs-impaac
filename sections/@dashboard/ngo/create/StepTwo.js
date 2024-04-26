import { Box, Stack, Typography } from '@mui/material';
import { RHFTextField } from '../../../../components/hook-form';
import useResponsive from '../../../../hooks/useResponsive';

function StepTwo({ handleOnChange }) {
  const isMobile = useResponsive('down', 'md');

  return (
    <Box sx={{ flex: 0.8 }}>
      {!isMobile && (
        <Box>
          <Typography variant="h4">Enter the NGO Location and Email</Typography>
          <Typography variant="caption">NGO information for contact and billing purpose.</Typography>
        </Box>
      )}
      <Box sx={{ my: 5 }}>
        <Stack
          direction={isMobile ? 'column' : 'row'}
          spacing={!isMobile ? 2 : 2}
          alignItems={!isMobile ? 'center' : ''}
        >
          <RHFTextField name="email" label="Email*" disabled />
          <RHFTextField name="phone_number" label="Phone Number*" disabled />
        </Stack>
        <RHFTextField name="street" label="Address - House No. / street*" sx={{ my: 2 }} />
        <Stack
          direction={isMobile ? 'column' : 'row'}
          spacing={!isMobile ? 2 : 2}
          alignItems={!isMobile ? 'center' : ''}
        >
          <RHFTextField name="area_code" label="Pin Code*" onChange={handleOnChange} maxLength={6} />
        </Stack>
        <Stack
          direction={isMobile ? 'column' : 'row'}
          spacing={!isMobile ? 2 : 2}
          alignItems={!isMobile ? 'center' : ''}
          sx={{ my: 2 }}
        >
          <RHFTextField name="city" label="City" maxLength={6} />
          <RHFTextField name="state" label="State" maxLength={6} />
          <RHFTextField name="country" label="Country" maxLength={6} />
        </Stack>
      </Box>
    </Box>
  );
}

export default StepTwo;
