"use client";
// @mui
import { styled } from "@mui/material/styles";

// components

import Hero from "@/sections/volunteer/Hero";
import Missionn from "@/sections/volunteer/Missionn";
import Change from "@/sections/volunteer/Change";
import SDG from "@/sections/volunteer/SDG";
import CSRCollab from "@/sections/volunteer/CSRCollab";
import Power from "@/sections/volunteer/Power";
import TrustedNgos from "@/sections/volunteer/TrustedNgos";
import WhyVolunteer from "@/sections/volunteer/WhyVolunteer";
import Reasons from "@/sections/volunteer/Reasons";
import Join from "@/sections/volunteer/Join";
import Programs from "@/sections/volunteer/Programs";
import ImpaacCommunity from "@/components/catalogue/ImpaacCommunity";
import community from "../../../sections/volunteer/catalogue_Pic/1.webp";

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

export default function VolunteerPage() {
  return (
    <RootStyle>
      <ContentStyle>
        <Hero sx={{ width: "100%" }} />

        <Missionn />

        <WhyVolunteer />

        <Reasons />

        <Change />

        <TrustedNgos />

        <SDG />

        <Join />

        <Programs />

        <CSRCollab />

        <Power />

        <ImpaacCommunity image={community} />
      </ContentStyle>
    </RootStyle>
  );
}
