"use client";
import React from "react";
import {
  AboutFounder,
  AboutHero,
  AboutLegal,
  AboutStats,
  AboutTeam,
  AboutTestimonials,
  AboutVision,
  AboutWhat,
} from "@/sections/about";
import { Box, Typography } from "@mui/material";
import { MotionViewport } from "@/components/animate";

export default function About() {
  return (
    <Box sx={{ pt: 10, overflowX: "hidden" }}>
      <AboutHero />
      <Box
        spacing={3}
        component={MotionViewport}
        sx={{
          borderRadius: 1,
          border: "1px solid #16141426",
          m: "2rem",
          p: 3,
          py: { md: 7, xs: 3 },
          height: "inherit",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            margin: "auto",
            fontStyle: "italic",
            fontWeight: "500",
            fontSize: { md: "25px", xs: "20px" },
            width: { md: "70%", xs: "100%" },
          }}
        >
          “The purpose of life is not to be happy. It is to be useful, to be
          honorable, to be compassionate, to have it make some difference that
          you have lived and lived well.” - Ralph Waldo Emerson
        </Typography>
      </Box>
      <AboutStats />
      <AboutWhat />
      <AboutVision />
      <AboutFounder />

      <AboutTeam />
      <AboutLegal />

      <AboutTestimonials />
    </Box>
  );
}
