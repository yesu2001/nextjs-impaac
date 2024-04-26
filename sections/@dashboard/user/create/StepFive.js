import { Box, Stack, Typography } from "@mui/material";
import { RHFTextField } from "@/components/hook-form";
import useResponsive from "@/hooks/useResponsive";

function StepFive() {
  const isMobile = useResponsive("down", "md");

  return (
    <Box sx={{ flex: 1 }}>
      {!isMobile && (
        <Box>
          <Typography variant="h4">Enter your social profile links</Typography>
          <Typography variant="caption">
            Social links for sharing and connecting.
          </Typography>
        </Box>
      )}

      <Box sx={{ my: 5 }}>
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={2}
          alignItems={!isMobile ? "center" : ""}
        >
          <RHFTextField name="instagram" label="Instagram Link " />
          <RHFTextField name="linkedin" label="Linkedin Link " />
        </Stack>
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={2}
          alignItems={!isMobile ? "center" : ""}
          my={2}
        >
          <RHFTextField name="twitter" label="Twitter Link " />
          <RHFTextField name="facebook" label="Facebook Website " />
        </Stack>
      </Box>
    </Box>
  );
}

export default StepFive;
