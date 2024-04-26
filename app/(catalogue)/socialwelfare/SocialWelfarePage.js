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
import banner from "@/sections/catalogue/socialwelfare/catalogue_Pic/banner.webp";
import mobileBanner from "@/sections/catalogue/socialwelfare/catalogue_Pic/mobilebanner.webp";
import change from "@/sections/catalogue/socialwelfare/catalogue_Pic/change.webp";
import mission from "@/sections/catalogue/socialwelfare/catalogue_Pic/mission.webp";
import network from "@/sections/catalogue/socialwelfare/catalogue_Pic/network.webp";
import csrcollab from "@/sections/catalogue/socialwelfare/catalogue_Pic/csr.webp";
import Namdev from "@/sections/catalogue/medical/catalogue_Pic/namdev.png";
import Saday from "@/sections/catalogue/medical/catalogue_Pic/saday.png";
import Healthify from "@/sections/catalogue/medical/catalogue_Pic/healthify.png";
import community from "@/sections/catalogue/socialwelfare/catalogue_Pic/community.webp";

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

export default function SocialWelfarePage() {
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
          title="Social Welfare"
          description="Building a Better Tomorrow "
          desktopBg={banner}
          mobileBg={mobileBanner}
          sx={{ width: "100%" }}
        />

        <Container>
          <Mission
            title={"Our Mission: Brighter future "}
            description={` At Impaac Foundation, we are dedicated to advancing social welfare and creating positive change in communities around the world. Through our wide-ranging programs and initiatives, we strive to address pressing social issues, uplift marginalized populations, and promote inclusive development. Your support is crucial in enabling us to continue our mission of building a more equitable and compassionate society.`}
            image={mission}
          />
        </Container>

        <Network
          title={"A Network of Trustworthy NGOs"}
          description={`We work to empower marginalized and vulnerable communities, including women, children, persons with disabilities, and the elderly. Through targeted interventions and support programs, we strive to enhance their well-being, dignity, and social inclusion.`}
          image={network}
        />

        <Change
          title={"How to Support:"}
          description={`Contribute to our social welfare programs directly through our secure online donation platform. Your donation, no matter the size, has the power to change lives and create a more just and equitable society.`}
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
               Sustainable Development Goal.`}
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
