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
import banner from "@/sections/catalogue/socialimpact/catalogue_Pic/banner.webp";
import mobileBanner from "@/sections/catalogue/socialimpact/catalogue_Pic/mobilebanner.webp";
import change from "@/sections/catalogue/socialimpact/catalogue_Pic/change.webp";
import mission from "@/sections/catalogue/socialimpact/catalogue_Pic/mission.webp";
import network from "@/sections/catalogue/socialimpact/catalogue_Pic/network.webp";
import csrcollab from "@/sections/catalogue/socialimpact/catalogue_Pic/csr.webp";
import Namdev from "@/sections/catalogue/medical/catalogue_Pic/namdev.png";
import Saday from "@/sections/catalogue/medical/catalogue_Pic/saday.png";
import Healthify from "@/sections/catalogue/medical/catalogue_Pic/healthify.png";
import community from "@/sections/catalogue/socialimpact/catalogue_Pic/community.webp";

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

export default function SocialImpactPage() {
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
          title="Social Impact"
          description="Empowering Innovative Ideas for Change"
          desktopBg={banner}
          mobileBg={mobileBanner}
          sx={{ width: "100%" }}
        />

        <Container>
          <Mission
            title={"Our Mission: Creating Social Impact"}
            description={` At Impaac Foundation, we believe in the power of impactful ideas to drive positive change and transform communities. Our Social Impact programs are dedicated to nurturing innovative solutions to pressing social and environmental challenges. By supporting visionary thinkers, changemakers, and grassroots initiatives, we aim to catalyze sustainable development and create a better world for all.`}
            image={mission}
          />
        </Container>

        <Network
          title={"Fostering Collaboration and Partnerships"}
          description={`Collaboration is key to driving meaningful impact. We facilitate partnerships between diverse stakeholders, including NGOs, corporations, governments, and communities, to amplify the reach and effectiveness of social impact initiatives.`}
          image={network}
        />

        <Change
          title={"Investing in Sustainable Solutions:"}
          description={`Sustainability is at the core of our approach. We prioritize projects and initiatives that offer sustainable solutions to social and environmental challenges, ensuring long-term impact and resilience.`}
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
