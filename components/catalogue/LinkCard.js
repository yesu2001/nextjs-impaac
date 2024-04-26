"use client";
import React from "react";
import { Link, Card, styled } from "@mui/material";

const LinkCardOne = styled(Card)(({ theme }) => ({
  backgroundColor: "rgb(57,127,183)",
  height: 50,
  width: "90%",
  borderRadius: 26,
  textAlign: "center",
  marginTop: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    width: "100%",
  },
}));

const textStyle = {
  color: "#ffffff",
  fontSize: "18px",
  paddingTop: { xs: 3 },
  paddingLeft: 2,
  paddingRight: 2,
  margin: "0 auto",
};

export default function LinkCard({ link }) {
  return (
    <LinkCardOne>
      <Link href={link || "#"} underline="none" style={textStyle}>
        POWER OF POSITIVE IMPACT
      </Link>
    </LinkCardOne>
  );
}
