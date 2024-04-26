"use client";
import Image from "next/image";
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
import { ContactBanner, ContactBannerPhone } from "./ContactImages";
import useResponsive from "@/hooks/useResponsive";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  height: 490,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up("md")]: {
    padding: 10,
    height: 530,
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

export default function ContactHero() {
  const isMobile = useResponsive("down", "sm");
  return (
    <RootStyle>
      <Image
        src={isMobile ? ContactBannerPhone : ContactBanner}
        alt="about image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
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
              text="Contact"
              sx={{ mr: 1.2, fontSize: { md: "2.6rem", xs: "2.6rem" } }}
            />
            <TextAnimate
              text="Us"
              sx={{ fontSize: { md: "2.6rem", xs: "2.6rem" } }}
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
                p: 2,
                borderRadius: "9px",
                display: { xs: "none", md: "inline-flex" },
              }}
            >
              Feel Free To Reach Us For Any Type Of Query
            </Typography>
          </m.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
