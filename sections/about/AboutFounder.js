import * as React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { Nivedika } from "./AboutImages";
import Image from "next/image";
import useResponsive from "@/hooks/useResponsive";

export default function AboutFounder() {
  const isMobile = useResponsive("down", "sm");
  return (
    <Box
      sx={{ py: { md: 10, xs: 7 }, px: 2, maxWidth: "1300px", margin: "auto" }}
    >
      <Grid container>
        <Grid
          item
          sx={{
            display: "flex",
            width: { md: "30%", xs: "100%" },
            pr: { md: 2, xs: 0 },
          }}
        >
          <Image
            src={Nivedika}
            alt="Nivedika"
            objectFit="cover"
            height={isMobile ? 400 : 450}
            style={{
              margin: "auto",
              width: { md: "100%", xs: "90%" },
            }}
          />
        </Grid>
        <Grid
          item
          sx={{
            mt: { md: 0, xs: 2 },
            pl: { md: 1, xs: 0 },
            ml: { md: 0, xs: 4 },
            mr: { md: 0, xs: 4 },
            width: { md: "70%", xs: "100%" },
          }}
        >
          <Typography
            variant="h3"
            sx={{ textAlign: "left", mb: 1, letterSpacing: "-1px" }}
          >
            Note From Founder and CEO
          </Typography>
          <Divider
            sx={{
              backgroundColor: "steelblue",
              width: "80px",
              height: "3px",
              mb: 3,
            }}
          />
          <Box>
            <Typography sx={{ fontSize: "16px" }}>
              Impaac Foundation was born to bridge the gap between the people
              who want to make a difference through giving back and those who
              are doing phenomenal work but need more support. Our focus has
              been to build trust for the social sector by strong due diligence
              and transparency on how donations impacted lives on the ground.
              <br />
              <br />
              We are proud to have played a small role in enabling giving across
              all segments of our society. Being self-funded, we have managed to
              build an entire system smoothly & effectively and run a charity
              platform & social community for NGOs & individuals.
              <br />
              <br />
              Building Free Global Non-Profit, Technology-driven, Social
              Networking & Charity Platform for social welfare and aiming to
              grow a trustworthy community for authorized non-profit
              organizations & volunteers is our long-term vision. We aim to
              create a transparent solution for validation of seamless charity
              and creating a self-sustainable system with the help of technology
              combining environmental needs.
              <br />
              <br />
              We will continue to stay tuned to the needs on the ground,
              innovate for scale, and find ways of inspiring every person who
              can give back. Join us in working towards our dream of seeing a
              poverty-free world standing on its own feet within our lifetimes
              and be True Impaactors!
            </Typography>
            <br />
            <br />
            <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
              {" "}
              - Nivedika Gupta, Co-Founder & CEO, Impaac Foundation{" "}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
