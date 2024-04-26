"use client";
import Tips from "@/components/Tips";
import { FaqsHero, FaqsList } from "@/sections/faqs";
import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <Box sx={{ pt: 10 }}>
      <FaqsHero />

      <Container sx={{ mt: 5, mb: 4, position: "relative" }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", letterSpacing: "-0.09rem" }}
        >
          Frequently Asked Questions
        </Typography>
        <Divider
          sx={{
            backgroundColor: "steelblue",
            width: "50px",
            height: "5px",
            margin: "auto",
          }}
        />
        <Typography variant="body1" sx={{ textAlign: "center", m: 2 }}>
          Answers For All Your Questions
        </Typography>
        <FaqsList />
      </Container>
      <div
        style={{
          background: "#f2f2f2",
          paddingTop: "2rem",
          paddingBottom: "1.8rem",
        }}
      >
        <Container sx={{ paddingTop: { md: "2rem", xs: "1rem" } }}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", letterSpacing: "-0.09rem" }}
          >
            Top Fundraising Tips
          </Typography>
          <Divider
            sx={{
              backgroundColor: "steelblue",
              width: "50px",
              height: "5px",
              margin: "auto",
            }}
          />
          <Typography variant="body1" sx={{ textAlign: "center", m: 2 }}>
            Ways To Create A Popular Campaign
          </Typography>
          <Tips />
        </Container>
      </div>
    </Box>
  );
}
