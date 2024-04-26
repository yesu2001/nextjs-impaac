"use client";
import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";
// components
import {
  MotionContainer,
  TextAnimate,
  varFade,
} from "../../components/animate";
// import {PolicyBanner,PolicyBannerPhone} from './PolicyImages'

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  height: 520,
  //   backgroundImage:
  //     `url(${PolicyBannerPhone})`,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up("md")]: {
    height: 550,
    padding: 0,
    // backgroundImage:
    // `url(${PolicyBanner})`,
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  width: "80%",
  float: "right",
  [theme.breakpoints.up("md")]: {
    width: "45%",
  },
}));

// ----------------------------------------------------------------------

export default function PolicyHero() {
  return (
    <RootStyle>
      <Container
        component={MotionContainer}
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          alignItems: { md: "center", xs: "center" },
          justifyContent: { md: "right", xs: "center" },
        }}
      >
        <ContentStyle>
          <Box
            sx={{
              display: "block",
              color: "#f3f1f1",
              letterSpacing: "-0.09rem",
              background: { xs: "#00000069", md: "#0000" },
              py: 1,
              borderRadius: "9px",
            }}
          >
            <TextAnimate
              text="Privacy"
              sx={{ mr: 1.2, fontSize: { md: "2.6rem", xs: "3.3rem" } }}
            />
            <TextAnimate
              text="Policy"
              sx={{ fontSize: { md: "2.6rem", xs: "3.3rem" } }}
            />
          </Box>

          <m.div variants={varFade().inRight}>
            <Typography
              variant="body1"
              sx={{
                color: "#f1f1f1",
                fontWeight: "fontWeightMedium",
                mt: 1.4,
                background: "#00000069",
                py: 1,
                width: "80%",
                borderRadius: "9px",
                display: { xs: "none", md: "inline-flex" },
              }}
            >
              Impaac for a real dynamic Impact! An impact startup passionate
              Policy solving global challenges through social entrepreneurship!
            </Typography>
          </m.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
