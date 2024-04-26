import {
  ContactDetails,
  ContactFormPage,
  ContactHero,
  ContactSocial,
} from "@/sections/contact";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

export const metadata = {
  title: "Contact us",
};

export default function page() {
  return (
    <Box sx={{ pt: 10 }}>
      <ContactHero />
      <Container sx={{ my: 10 }}>
        <Grid
          container
          spacing={10}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Grid item xs={12} md={6}>
            <ContactFormPage />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactDetails />
          </Grid>
        </Grid>
      </Container>
      <ContactSocial />
    </Box>
  );
}
