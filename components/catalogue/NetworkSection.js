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
import Image from "next/image";
import Title from "./Title";
import useResponsive from "@/hooks/useResponsive";

export default function Network({ title, description, image }) {
  const isTab = useResponsive("down", "md");
  return (
    <Box py={{ xs: 3, sm: 5 }}>
      <Container maxWidth={"lg"}>
        <Grid container spacing={{ xs: 1, sm: 3 }}>
          {isTab && (
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                direction: "row",
                justifyContent: "center",
                p: { xs: 2 },
              }}
            >
              <Image
                src={image}
                height={340}
                objectFit="contain"
                objectPosition="center"
              />
            </Grid>
          )}
          <Grid
            item
            xs={12}
            md={5}
            sx={{ ml: { md: 5 }, my: { xs: 2, sm: 5 } }}
          >
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
                  id="b_catalogue_page_create_campaign"
                  href="/fundraisers/new"
                  sx={{
                    width: "220px",
                    textAlign: "center",
                    borderRadius: 3,
                    py: 1,
                    background: "white",
                    fontSize: "20px",
                    ":hover": { textDecoration: "none", background: "white" },
                  }}
                >
                  Create Campaign
                </Link>
              </Stack>
            </Card>
          </Grid>
          {!isTab && (
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                direction: "row",
                justifyContent: "center",
                p: { xs: 2 },
              }}
            >
              <Image
                src={image}
                alt={"mission"}
                height={550}
                objectFit="contain"
                objectPosition="center"
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
