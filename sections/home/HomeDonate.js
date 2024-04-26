import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Donate_Funds } from "./FeaturesPic";
import useResponsive from "@/hooks/useResponsive";

export default function HomeDonate() {
  const isMobile = useResponsive("down", "sm");
  return (
    <div
      style={{ padding: "2rem 0", marginTop: "1rem", background: "#fafafa" }}
    >
      <Grid
        container
        spacing={1}
        sx={{
          alignItems: "center",
          flexDirection: { md: "row", xs: "column-reverse" },
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          <Typography variant="h2">Be a Change</Typography>
          <Typography sx={{ fontStyle: "italic", fontSize: "24px" }}>
            Support our trusted campaigns
          </Typography>
          <Typography sx={{ fontSize: "21px", color: "#777" }}>
            Fuel Impactful Vision <br />
            Through Your Donations!
          </Typography>
          <Button
            href={"/campaign"}
            variant="contained"
            id="b_homepage_donate_be_a_change_section"
            sx={{
              fontWeight: "400",
              fontSize: "18px",
              margin: "20px 0 0",
              minHeight: "45px",
              minWidth: "300px",
              boxSizing: "border-box",
            }}
          >
            Explore Campaigns For Donation
          </Button>
          <Typography sx={{ fontSize: "15px", color: "grey", mt: 2 }}>
            *Avail Tax Benefit Certifications under 80G.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Image
            src={Donate_Funds}
            alt="donate_funds image"
            height={isMobile ? 185 : 400}
            objectFit="cover"
            style={{ borderRadius: "8px", width: "100%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
