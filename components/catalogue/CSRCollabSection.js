import * as React from "react";
import { Stack, Grid, Typography, Box } from "@mui/material";
import LinkCard from "./LinkCard";
import Title from "./Title";
import CatalogueImage from "./CatalogueImage";

export default function CSRCollab({ title, description, note1, note2, image }) {
  return (
    <Grid container sx={{ m: 0 }}>
      <Stack
        spacing={1}
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
      >
        <Grid item xs={12} md={6} lg={6} sx={{ mt: { xs: 4 } }}>
          <CatalogueImage alt={image} image={image} />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Box sx={{ my: { xs: 4, md: 4, sm: 6 }, mx: { xs: 2, sm: 4 } }}>
            <Title
              text={title}
              sx={{
                color: "rgb(57,127,183)",
                textAlign: { xs: "center", md: "left" },
              }}
            />
            <Box sx={{ mr: { md: 12 }, my: 5 }}>
              <Typography>{description}</Typography>
              <ul style={{ paddingTop: 20, marginLeft: 20 }}>
                <li>
                  <b>CSR Partnerships:</b>
                  {note1}
                </li>
                <li>
                  <b>Access to Millions:</b> {note2}
                </li>
              </ul>
            </Box>
            <LinkCard link={"/csr"} />
          </Box>
        </Grid>
      </Stack>
    </Grid>
  );
}
