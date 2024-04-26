"use client";
import * as React from "react";
import {
  Stack,
  Grid,
  Card,
  Typography,
  Box,
  Container,
  Link,
} from "@mui/material";
import Title from "./Title";
import CatalogueImage from "./CatalogueImage";

export default function Change({ title, description, image }) {
  return (
    <Box py={{ xs: 3, sm: 5 }}>
      <Container maxWidth={"lg"}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              direction: "row",
              alignItems: "center",
              justifyContent: "center",
              p: { xs: 2 },
            }}
          >
            <CatalogueImage image={image} alt="change" />
          </Grid>
          <Grid item xs={12} md={6} sx={{ my: { xs: 2, sm: 5 } }}>
            <Title
              text={title}
              sx={{
                color: "rgb(57,127,183)",
                textAlign: { xs: "center", sm: "center", md: "left" },
              }}
            />

            <Card
              sx={{
                maxWidth: { md: "490px" },
                px: { xs: 3, sm: 5 },
                py: { xs: 3, sm: 5 },
                borderRadius: "25px",
                backgroundColor: "rgb(57,127,183)",
                marginTop: 3,
              }}
            >
              <Stack spacing={2} color="#ffffff">
                <Typography sx={{ letterSpacing: 1.7, lineHeight: 1.7 }}>
                  {description}
                </Typography>
                <Link
                  id="b_catalogue_page_explore_campaigns"
                  href="/campaign"
                  sx={{
                    width: "250px",
                    textAlign: "center",
                    borderRadius: 3,
                    py: 1,
                    background: "white",
                    fontSize: "20px",
                    ":hover": { textDecoration: "none", background: "white" },
                  }}
                >
                  Explore Campaigns
                </Link>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
