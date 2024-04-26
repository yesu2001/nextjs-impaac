// @mui
import { Box, Typography, Stack } from "@mui/material";
// assets
import { UploadIllustration } from "@/assets";
// ----------------------------------------------------------------------

export default function BlockContent({ title }) {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      direction={{ xs: "column", md: "row" }}
      sx={{ width: 1, textAlign: { xs: "center", md: "left" } }}
    >
      <UploadIllustration sx={{ width: 100 }} />

      <Box>
        <Typography gutterBottom variant="h5">
          {title || "Upload or Drop image"}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Drop image here or click&nbsp;
          <Typography
            variant="body2"
            component="span"
            sx={{
              border: "1px solid",
              borderRadius: 0.5,
              py: 0.2,
              background: "white",
              px: 1,
              color: "primary.main",
            }}
          >
            browse
          </Typography>
        </Typography>
        <Typography variant="caption" sx={{ color: "primary.main" }}>
          Image size must less than 2mb{" "}
        </Typography>
      </Box>
    </Stack>
  );
}
