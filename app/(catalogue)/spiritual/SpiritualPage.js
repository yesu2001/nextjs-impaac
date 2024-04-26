"use client";
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
// sections
import HomeSuccessStories from "@/sections/home/HomeSuccessStories";
import { AboutStats, AboutTestimonials } from "@/sections/about";
// Mock
import { medicalstories } from "@/_mock/SuccessStories";
// Images
import banner from "@/sections/catalogue/spiritual/catalogue_Pic/banner.webp";
import mobileBanner from "@/sections/catalogue/spiritual/catalogue_Pic/mobilebanner.webp";
import change from "@/sections/catalogue/spiritual/catalogue_Pic/change.webp";
import mission from "@/sections/catalogue/spiritual/catalogue_Pic/mission.webp";
import network from "@/sections/catalogue/spiritual/catalogue_Pic/network.webp";
import csrcollab from "@/sections/catalogue/spiritual/catalogue_Pic/csr.webp";
import Namdev from "@/sections/catalogue/medical/catalogue_Pic/namdev.png";
import Saday from "@/sections/catalogue/medical/catalogue_Pic/saday.png";
import Healthify from "@/sections/catalogue/medical/catalogue_Pic/healthify.png";
import community from "@/sections/catalogue/spiritual/catalogue_Pic/community.webp";

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

export default function SpiritualPage() {
  const ngos = [
    {
      imgSrc: Namdev,
      name: "Namdev Foundation",
      role: "Awaring Peoples Against Diseases",
    },
    {
      imgSrc: Saday,
      name: "Saday NGO",
      role: "Gives Free Mental Health Therapies",
    },
    {
      imgSrc: Healthify,
      name: "Healthify Foundation",
      role: "Working towards treating poors",
    },
  ];
  return (
    <RootStyle>
      <ContentStyle>
        <Hero
          title="Spirituality"
          description=" Nurturing Inner Peace and Collective Harmony "
          desktopBg={banner}
          mobileBg={mobileBanner}
          sx={{ width: "100%" }}
        />

        <Container>
          <Mission
            title={"Our Mission "}
            description={` At Impaac Foundation, we recognize the profound impact of spirituality on individual well-being and collective harmony. Our spirituality programs are dedicated to fostering a deeper connection with oneself, others, and the world around us. Through practices, teachings, and community gatherings, we seek to inspire inner transformation, promote compassion, and cultivate a sense of unity and purpose.`}
            image={mission}
          />
        </Container>

        <Network
          title={"Why Explore Spirituality with Impaac Foundation?"}
          description={`We honor and respect the diversity of spiritual paths and traditions. Our programs welcome individuals from all backgrounds and beliefs, creating a space for dialogue, understanding, and mutual respect across cultural and religious divides.`}
          image={network}
        />

        <Change
          title={"How to Explore Spirituality with Impaac Foundation:"}
          description={`True spirituality is expressed through service to others. We encourage participants to embody the values of compassion, kindness, and generosity in their daily lives, fostering a culture of care and interconnectedness within our communities.`}
          image={change}
        />

        <Campaigns category={"animal"} />

        <AboutStats />

        <Container>
          <HomeSuccessStories stories={medicalstories} />
        </Container>

        <Container>
          <CSRCollab
            title={"Empowering NGOs through CSR Collaborations"}
            description={`We are proud to present many CSR companies that collaborate with Impaac Foundation, extending their support to
              NGOs. These partnerships channel resources where they're needed most.`}
            note1={`Benefit from our collaborations with numerous CSR companies committed to the
              Education Sustainable Development Goal.`}
            note2={`Join our network to gain access to millions of potential donors and volunteers
                eager to support your cause.`}
            image={csrcollab}
          />
        </Container>

        <AboutTestimonials />

        <NgoSection ngos={ngos} />

        <ImpaacCommunity image={community} />
      </ContentStyle>
    </RootStyle>
  );
}
