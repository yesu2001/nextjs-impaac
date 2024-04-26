import { Box, Stack, TextField, Typography, styled } from '@mui/material';
import { RHFTextField } from '../../../../components/hook-form';
import useResponsive from '../../../../hooks/useResponsive';

function StepSeven() {
  const isMobile = useResponsive('down', 'md');

  return (
    <Box sx={{ flex: 0.8 }}>
      {!isMobile && (
        <Box>
          <Typography variant="h4">Enter the NGO Social Profile Links</Typography>
          <Typography variant="caption">NGO social links for sharing and connecting.</Typography>
        </Box>
      )}

      <Box sx={{ my: 5 }}>
        <Stack direction={isMobile ? 'column' : 'row'} spacing={2} alignItems={!isMobile ? 'center' : ''}>
          <RHFTextField name="website" label="Organisation Website " />
          <RHFTextField name="linkedin" label="Linkedin Link " />
        </Stack>
        <Stack direction={isMobile ? 'column' : 'row'} spacing={2} alignItems={!isMobile ? 'center' : ''} my={2}>
          <RHFTextField name="facebook" label="Facebook Website " />
          <RHFTextField name="youtube" label="Youtube Link " />
        </Stack>
        <Stack direction={isMobile ? 'column' : 'row'} spacing={2} alignItems={!isMobile ? 'center' : ''}>
          <RHFTextField name="instagram" label="Instagram Link " />
          <RHFTextField name="twitter" label="Twitter Link " />
        </Stack>
      </Box>
    </Box>
  );
}

export default StepSeven;
