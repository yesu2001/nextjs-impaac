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
import banner from "@/sections/catalogue/women/catalogue_Pic/banner.webp";
import mobileBanner from "@/sections/catalogue/women/catalogue_Pic/mobilebanner.jpg";
import change from "@/sections/catalogue/women/catalogue_Pic/change.png";
import mission from "@/sections/catalogue/women/catalogue_Pic/mission.png";
import network from "@/sections/catalogue/women/catalogue_Pic/network.png";
import csrcollab from "@/sections/catalogue/women/catalogue_Pic/csr.png";
import Namdev from "@/sections/catalogue/medical/catalogue_Pic/namdev.png";
import Saday from "@/sections/catalogue/medical/catalogue_Pic/saday.png";
import Healthify from "@/sections/catalogue/medical/catalogue_Pic/healthify.png";
import community from "@/sections/catalogue/women/catalogue_Pic/community.png";

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

export default function WomenPage() {
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
          title="Women"
          description="Together, we can create a brighter future for all women."
          desktopBg={banner}
          mobileBg={mobileBanner}
          sx={{ width: "100%" }}
        />

        <Container>
          <Mission
            title={"Our Mission: Womens Empowerment for All"}
            description={` At Impaac Foundation, our mission is to empower women, unlocking their potential and fostering equality. We
              provide NGOs a dynamic platform to create campaigns for raising funds to advance women's causes across India and
              around the world.`}
            image={mission}
          />
        </Container>

        <Network
          title={"A Network of Trustworthy NGOs"}
          description={`We unite with NGOs dedicated to women's empowerment, whether it's education, healthcare, economic
            opportunities, or gender equality. Our platform is home to trusted entities, working passionately on a
            global and Indian stage.`}
          image={network}
        />

        <Change
          title={"Connecting Change Makers"}
          description={` For donors seeking to make a difference in the lives of women, we are the ultimate destination. We
            showcase a myriad of trusted NGOs, making it effortless for you to support the cause that touches your
            heart. We're the bridge between your compassion and their mission.`}
          image={change}
        />

        <Campaigns category={"women"} />

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
              empowering women.`}
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
