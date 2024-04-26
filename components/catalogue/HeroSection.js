"use client";
import * as React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  styled,
} from "@mui/material";
import useSettings from "@/hooks/useSettings";
import { MotionContainer, TextAnimate, varFade } from "../animate";
import useResponsive from "@/hooks/useResponsive";

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  height: 490,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up("md")]: {
    height: 500,
    padding: 0,
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  width: "80%",
  float: "right",
  [theme.breakpoints.up("md")]: {
    width: "40%",
  },
}));

export default function Hero({ title, description, desktopBg, mobileBg }) {
  const isMobile = useResponsive("down", "sm");
  return (
    <RootStyle>
      <Image
        src={isMobile ? mobileBg : desktopBg}
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
              py: 1,
              borderRadius: "9px",
            }}
          >
            <TextAnimate
              text={title}
              sx={{
                color: "white",
                textShadow: "2px 3px 4px grey",
                mr: 1.2,
                fontSize: { md: "2.6rem", xs: "2.8rem" },
              }}
            />
          </Box>

          <m.div
            variants={varFade().inRight}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#ffffff",
                fontWeight: "fontWeightMedium",
                mt: 0.1,
                background: "#00000069",
                p: 1,
                px: 2,
                borderRadius: "9px",
              }}
            >
              {description}
            </Typography>
          </m.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
