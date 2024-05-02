import React from "react";
import { Box } from "@mui/material";
import Home from "@/pages/Home";
import { seoPageData } from "@/_mock/seoPageData";

export const metadata = {
  title: seoPageData.home.title,
  description: seoPageData.home.description,
  images: [
    {
      url: "/sections/home/FeaturesPic/Donate-Funds.png",
      width: 1200,
      height: 630,
    },
  ],
};

export default function page() {
  return (
    <Box>
      <Home />
    </Box>
  );
}
