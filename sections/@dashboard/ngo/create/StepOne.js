import { Box, Stack, Typography } from '@mui/material';
import { RHFTextField } from '../../../../components/hook-form';
import useResponsive from '../../../../hooks/useResponsive';

function StepOne() {
  const isMobile = useResponsive('down', 'md');

  return (
    <Box sx={{ flex: 0.8 }}>
      {!isMobile && (
        <Box>
          <Typography variant="h4">Basic NGO Details</Typography>
          <Typography variant="caption">NGO information for better profiling.</Typography>
        </Box>
      )}
      <Box sx={{ my: 5 }}>
        <Stack spacing={2}>
          <RHFTextField name="name" label="Name of the Organisation*" />
          <RHFTextField
            name="registered_name"
            label="Registered Name (as per the Registration Certificate/ PAN Card)"
          />
          <RHFTextField multiline rows={4} name="bio" label="About Organisation*" />
        </Stack>
      </Box>
    </Box>
  );
}

export default StepOne;
