"use client";
import { Box } from "@mui/material";
import Markdown from "../../components/Markdown";
import { PrivacyPolicyContent } from "../../_mock/privacypolicycontent";

export default function PolicyContent() {
  return (
    <Box sx={{ padding: "4rem 2rem" }}>
      <Markdown>{PrivacyPolicyContent}</Markdown>
    </Box>
  );
}
