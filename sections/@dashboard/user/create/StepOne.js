import { Box, Stack, Typography } from "@mui/material";
import { RHFTextField } from "@/components/hook-form";
import useResponsive from "@/hooks/useResponsive";

function StepOne() {
  const isMobile = useResponsive("down", "md");

  return (
    <Box sx={{ flex: 1 }}>
      {!isMobile && (
        <Box>
          <Typography variant="h4">Basic User details</Typography>
          <Typography variant="caption">
            Your basic info for profiling.
          </Typography>
        </Box>
      )}
      <Box sx={{ my: 5 }}>
        <Stack spacing={2}>
          <RHFTextField name="name" label="Your Name *" />
          <RHFTextField multiline rows={4} name="bio" label="About You*" />
        </Stack>
      </Box>
    </Box>
  );
}

export default StepOne;
