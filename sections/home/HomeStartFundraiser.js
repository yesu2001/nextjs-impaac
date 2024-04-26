"use client";
import { Grid, styled, Typography, Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Raise_Funds1 } from "./FeaturesPic";
import useResponsive from "@/hooks/useResponsive";

const Container = styled(Grid)(({ theme }) => ({
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
}));

const LeftBox = styled(Grid)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "30%",
    textAlign: "left",
  },
}));

const RightBox = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
  [theme.breakpoints.up("md")]: {
    width: "60%",
    marginBottom: "0px",
  },
}));

export default function HomeStartFundraiser() {
  const isMobile = useResponsive("down", "sm");
  return (
    <div
      style={{ padding: "2rem 0", marginTop: "3rem", background: "#fafafa" }}
    >
      <Container
        container
        sx={{ flexDirection: { md: "row-reverse", xs: "column-reverse" } }}
      >
        <LeftBox item>
          <Typography variant="h2">Raise funds</Typography>
          <Typography sx={{ fontStyle: "italic", fontSize: "24px" }}>
            Empower Your Cause
          </Typography>
          <Typography sx={{ fontSize: "21px", color: "#777" }}>
            with Impaac Foundation
            <br />
          </Typography>
          <Button
            id="b_start_campaign_banner"
            href={"/fundraisers/new"}
            variant="contained"
            sx={{
              fontWeight: "400",
              fontSize: "18px",
              margin: "20px 0 0",
              minHeight: "45px",
              minWidth: "300px",
              boxSizing: "border-box",
            }}
          >
            Start a Campaign
          </Button>
          <Typography sx={{ fontSize: "15px", color: "grey", mt: 2 }}>
            *Launch Your Fundraising Campaign Today, Where Every Service and
            Assistance Comes Free..
          </Typography>
        </LeftBox>
        <RightBox item>
          <Image
            src={Raise_Funds1}
            height={isMobile ? 185 : 340}
            objectFit="cover"
            style={{ borderRadius: "8px", width: "100%" }}
          />
        </RightBox>
      </Container>
    </div>
  );
}
