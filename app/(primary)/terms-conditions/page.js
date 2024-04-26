import { TermsContent } from "@/_mock/termscontent";
import Markdown from "@/components/Markdown";
import { Box } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <Box sx={{ pt: { xs: 8, sm: 10, md: 11 } }}>
      <Markdown>{TermsContent}</Markdown>
    </Box>
  );
}
