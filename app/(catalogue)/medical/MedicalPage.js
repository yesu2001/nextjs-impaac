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
import banner from "@/sections/catalogue/medical/catalogue_Pic/banner.webp";
import mobileBanner from "@/sections/catalogue/medical/catalogue_Pic/mobilebanner.jpg";
import change from "@/sections/catalogue/medical/catalogue_Pic/change.png";
import mission from "@/sections/catalogue/medical/catalogue_Pic/11.png";
import network from "@/sections/catalogue/medical/catalogue_Pic/network.png";
import csrcollab from "@/sections/catalogue/medical/catalogue_Pic/csrcollab.png";
import Namdev from "@/sections/catalogue/medical/catalogue_Pic/namdev.png";
import Saday from "@/sections/catalogue/medical/catalogue_Pic/saday.png";
import Healthify from "@/sections/catalogue/medical/catalogue_Pic/healthify.png";
import community from "@/sections/catalogue/medical/catalogue_Pic/community.png";

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

export default function MedicalPage() {
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
          title="Medical"
          description="Improving Healthcare and Medical Access: Commitment to a Healthier India"
          desktopBg={banner}
          mobileBg={mobileBanner}
          sx={{ width: "100%" }}
        />

        <Container>
          <Mission
            title={"Our Mission: Healthier India"}
            description={` At Impaac Foundation, we recognize the critical importance of accessible healthcare in building a healthier and
              more resilient India. Our Healthcare and Medical Access programs aim to bridge gaps in healthcare services,
              ensuring that individuals and communities receive the care they deserve. By focusing on preventive measures,
              treatment accessibility, and health education, we strive to contribute to a robust healthcare system for all.`}
            image={mission}
          />
        </Container>

        <Network
          title={"A Network of Trustworthy NGOs"}
          description={`  We partner with experienced healthcare professionals and organizations to ensure that our programs
            align with the best medical practices. Your support directly contributes to impactful healthcare
            solutions. Our campaigns cover a range of healthcare aspects, from providing medical equipment to
            supporting awareness programs. You can choose the health cause that resonates with your values and
            priorities.`}
          image={network}
        />

        <Change
          title={"How to Support Healthcare and Medical Access:"}
          description={`Discover our Healthcare and Medical Access campaigns to find the cause that resonates with your
            commitment to a healthier India. Contribute directly to your chosen campaign through our platform.
            Your donation goes towards improving healthcare services, making a significant impact on the
            well-being of communities.`}
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
