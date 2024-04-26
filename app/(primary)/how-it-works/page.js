import Tips from "@/components/Tips";
import HomeHowitworks from "@/sections/home/HomeHowitworks";
import { HowItWorksHeroPage, HowItWorksVideo } from "@/sections/howitworks";
import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <Box sx={{ pt: 10 }}>
      <HowItWorksHeroPage />
      <Container maxWidth={"lg"}>
        <HowItWorksVideo />
      </Container>
      <div style={{ background: "#fafafa" }}>
        <Container maxWidth={"lg"}>
          <HomeHowitworks />
        </Container>
      </div>
      <Container sx={{ pt: "1rem", pb: "2rem" }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", letterSpacing: "-0.09rem" }}
        >
          Top Fundraising Tips
        </Typography>
        <Divider
          sx={{
            backgroundColor: "steelblue",
            width: "50px",
            height: "5px",
            margin: "auto",
          }}
        />
        <Typography variant="body1" sx={{ textAlign: "center", m: 2 }}>
          Ways To Create A Popular Campaign
        </Typography>
        <Tips />
      </Container>
    </Box>
  );
}
