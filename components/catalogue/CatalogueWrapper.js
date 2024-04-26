"use client";
import { styled } from "@mui/material";
import React from "react";

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

export default function CatalogueWrapper({ children }) {
  return (
    <RootStyle>
      <ContentStyle>{children}</ContentStyle>
    </RootStyle>
  );
}
