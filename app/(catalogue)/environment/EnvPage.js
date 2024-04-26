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
import { environmentstories } from "@/_mock/SuccessStories";
// Images
import banner from "@/sections/catalogue/env/catalogue_Pic/banner.webp";
import mobileBanner from "@/sections/catalogue/env/catalogue_Pic/mobilebanner.jpg";
import mission from "@/sections/catalogue/env/catalogue_Pic/mission.png";
import network from "@/sections/catalogue/env/catalogue_Pic/network.png";
import change from "@/sections/catalogue/env/catalogue_Pic/change.png";
import csr from "@/sections/catalogue/env/catalogue_Pic/csr.png";
import env1 from "@/sections/catalogue/env/catalogue_Pic/8.png";
import env2 from "@/sections/catalogue/env/catalogue_Pic/9.png";
import env3 from "@/sections/catalogue/env/catalogue_Pic/10.png";
import community from "@/sections/catalogue/env/catalogue_Pic/trust.png";

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

export default function EnvPage() {
  const ngos = [
    {
      imgSrc: env1,
      name: "Environment Foundation",
      role: "Saving Environments for Future",
    },
    {
      imgSrc: env2,
      name: "Eco Watch",
      role: "Help in adopting Sustainability",
    },
    {
      imgSrc: env3,
      name: "Save Planet Organisation",
      role: "Working for Saving Planet",
    },
  ];
  return (
    <RootStyle>
      <ContentStyle>
        <Hero
          title="Environment"
          description="Environmental Sustainability for All"
          desktopBg={banner}
          mobileBg={mobileBanner}
          sx={{ width: "100%" }}
        />

        <Container>
          <Mission
            title={"Our Mission: Environmental Sustainability for All"}
            description={`  At Impaac Foundation, our mission is to empower environmental sustainability, preserving and protecting our planet for future generations. We provide NGOs a dynamic platform to create campaigns for raising funds to
              advance environmental causes across India and around the world.`}
            image={mission}
          />
        </Container>

        <Network
          title={"A Network of Trustworthy NGOs"}
          description={` We unite with NGOs dedicated to environmental sustainability, whether it's reforestation, wildlife
            conservation, clean energy, or reducing pollution. Our platform is home to trusted entities, working
            passionately on a global and Indian stage.`}
          image={network}
        />

        <Change
          title={"Connecting Environmental Change-Makers"}
          description={`For donors seeking to make a difference in preserving our planet, we are the ultimate destination. We showcase a myriad of trusted NGOs, making it effortless for you to support the environmental cause that touches your heart. We're the bridge between your passion and their environmental mission.`}
          image={change}
        />

        <Campaigns category={"environment"} />

        <AboutStats />

        <Container>
          <HomeSuccessStories stories={environmentstories} />
        </Container>

        <Container>
          <CSRCollab
            title={"Empowering NGOs through CSR Collaborations"}
            description={`We are proud to present many CSR companies that collaborate with Impaac Foundation, extending their support to
              NGOs. These partnerships channel resources where they're needed most.`}
            note1={` We are proud to present many CSR companies that collaborate with Impaac Foundation,
              extending their support to NGOs. These partnerships channel resources where they're needed most.`}
            note2={`Join our network to gain access to millions of potential donors and volunteers
                eager to support your cause.`}
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
