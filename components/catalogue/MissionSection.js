"use client";
import * as React from "react";
import { Stack, Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import Title from "./Title";
import useResponsive from "@/hooks/useResponsive";
import CatalogueImage from "./CatalogueImage";

export default function Mission({ title, description, image }) {
  const isMobile = useResponsive("down", "sm");
  return (
    <Grid container sx={{ mt: 4 }}>
      <Stack
        spacing={1}
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
      >
        <Grid item xs={12} md={6} lg={6} sx={{ mt: { xs: 4 } }}>
          <CatalogueImage
            image={image}
            alt={"mission"}
            style={{ width: "90%" }}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Box sx={{ my: { xs: 4, md: 4, sm: 6 }, mx: { xs: 1, sm: 4 } }}>
            <Title
              text={title}
              sx={{
                color: "rgb(57,127,183)",
                textAlign: { xs: "center", md: "left" },
              }}
            />
            <Box sx={{ mr: { md: 12 }, mb: 3, mt: 3 }}>
              <Typography>{description}</Typography>
              <ul style={{ paddingTop: 20, marginLeft: 20 }}>
                <li>
                  <b>Our Vision:</b> Building a Strong, Transparent, and
                  Trustworthy Platform
                </li>
                <li>
                  <b>Our Mission:</b> Empowering NGOs for Positive Social Change
                </li>
              </ul>
            </Box>
          </Box>
        </Grid>
      </Stack>
    </Grid>
  );
}
