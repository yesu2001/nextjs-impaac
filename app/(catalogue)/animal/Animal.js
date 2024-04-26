"use client";
import React from "react";
// @mui
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

// components
import Hero from "@/components/catalogue/HeroSection";
import Campaigns from "@/components/catalogue/CampaignSection";
import Mission from "@/components/catalogue/MissionSection";
import Network from "@/components/catalogue/NetworkSection";
import Change from "@/components/catalogue/ChangeSection";
import NgoSection from "@/components/catalogue/NgoSection";
import ImpaacCommunity from "@/components/catalogue/ImpaacCommunity";
import CSRCollab from "@/components/catalogue/CSRCollabSection";
// Sections
import { AboutStats, AboutTestimonials } from "@/sections/about";
import HomeSuccessStories from "@/sections/home/HomeSuccessStories";
// Mock
import { animalstories } from "@/_mock/SuccessStories";
// Images
import banner from "@/sections/catalogue/animal/catalogue_Pic/banner.webp";
import mobilebanner from "@/sections/catalogue/animal/catalogue_Pic/mobilebanner.jpg";
import community from "@/sections/catalogue/animal/catalogue_Pic/community.webp";
import letthepawroar from "@/sections/catalogue/animal/catalogue_Pic/letthepawroar.png";
import earthlings from "@/sections/catalogue/animal/catalogue_Pic/earthlings.png";
import stronglittle from "@/sections/catalogue/animal/catalogue_Pic/stronglittle.png";
import donors from "@/sections/catalogue/animal/catalogue_Pic/donors.png";
import network from "@/sections/catalogue/animal/catalogue_Pic/network.png";
import mission from "@/sections/catalogue/animal/catalogue_Pic/mission.png";
import csr from "@/sections/catalogue/animal/catalogue_Pic/csr.png";

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

export default function AnimalPage() {
  const ngos = [
    {
      imgSrc: letthepawroar,
      name: "Let the Paw Roar",
      role: "Saving Little Animals",
    },
    {
      imgSrc: earthlings,
      name: "Earthlings Trust",
      role: "Rescuing animals and vaccination",
    },
    {
      imgSrc: stronglittle,
      name: "Strong Little Paws",
      role: "Helping animals to survive",
    },
  ];

  return (
    <RootStyle>
      <ContentStyle>
        <Hero
          title="Animals"
          description="Save Animals, Save Humanity"
          desktopBg={banner}
          mobileBg={mobilebanner}
          sx={{ width: "100%" }}
        />

        <Container maxWidth="lg">
          <Mission
            title={"Our Mission: Animal Welfare for All"}
            description={
              "At Impaac Foundation, our mission is to empower animal welfare initiatives, touching the lives of strays, pets, and wild animals. We provide NGOs a powerful platform to create  campaigns for fundraising, nurturing compassion across India and beyond."
            }
            image={mission}
          />
        </Container>

        <Network
          title={"A Network of Trustworthy NGOs"}
          description={`We unite with NGOs dedicated to animal welfare, whether it's the protection of stray dogs, cows, wild
                  animals, shelters, feeding, medical care, or any other activity.<br/> Our platform is home to trusted entities, working passionately on a global and Indian stage.`}
          image={network}
        />

        <Change
          title={"Connecting Compassionate Donors"}
          description={
            " For donors seeking to make a difference in the lives of animals, we are the ultimate destination. We showcase a myriad of trusted NGOs, making it effortless for you to support the cause that touches your heart. We're the bridge between your compassion and their mission."
          }
          image={donors}
        />

        <Campaigns category={"animal"} />

        <AboutStats />

        <Container>
          <HomeSuccessStories stories={animalstories} />
        </Container>

        <Container>
          <CSRCollab
            title={"Empowering NGOs through CSR Collaborations"}
            description={` We are proud to present many CSR companies that collaborate with Impaac Foundation, extending their
                support to NGOs. These partnerships channel resources where they're needed most.`}
            note1={
              "Benefit from our collaborations with numerous CSR companies committed to animal welfare."
            }
            note2={
              "Join our network to gain access to millions of potential donors and volunteers eager to support your cause."
            }
            image={csr}
          />
        </Container>

        <AboutTestimonials />

        <NgoSection ngos={ngos} />

        <ImpaacCommunity image={community} />
      </ContentStyle>
    </RootStyle>
  );
}
