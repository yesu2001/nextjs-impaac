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
import banner from "@/sections/catalogue/child/catalogue_Pic/banner.webp";
import mobileBanner from "@/sections/catalogue/child/catalogue_Pic/mobilebanner.webp";
import change from "@/sections/catalogue/child/catalogue_Pic/change.webp";
import mission from "@/sections/catalogue/child/catalogue_Pic/mission.webp";
import network from "@/sections/catalogue/child/catalogue_Pic/network.webp";
import csrcollab from "@/sections/catalogue/child/catalogue_Pic/csr.webp";
import Namdev from "@/sections/catalogue/medical/catalogue_Pic/namdev.png";
import Saday from "@/sections/catalogue/medical/catalogue_Pic/saday.png";
import Healthify from "@/sections/catalogue/medical/catalogue_Pic/healthify.png";
import community from "@/sections/catalogue/child/catalogue_Pic/community.webp";

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

export default function ChildPage() {
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
          title="Child Welfare"
          description="Empowering Children for a Brighter Future"
          desktopBg={banner}
          mobileBg={mobileBanner}
          sx={{ width: "100%" }}
        />

        <Container>
          <Mission
            title={"Our Mission: Championing Child Welfare"}
            description={`At Impaac Foundation, we believe that every child deserves a safe, nurturing, and supportive environment in which to grow and thrive. Our Child Welfare programs are dedicated to protecting the rights and well-being of children, ensuring that they have access to education, healthcare, and opportunities for a better future. Through targeted interventions and holistic support, we aim to empower children to reach their full potential and break the cycle of poverty and adversity.`}
            image={mission}
          />
        </Container>

        <Network
          title={"Our Commitment to Child Welfare"}
          description={`We prioritize the safety and security of children, working to prevent exploitation, abuse, and neglect. We support initiatives that ensure every child has access to quality education, including scholarships, school improvements, and training programs. We provide healthcare services, nutrition support, and access to clean water and sanitation facilities to ensure that children grow up healthy and strong.`}
          image={network}
        />

        <Change
          title={"Child-Centered Approach"}
          description={` Contribute to our child welfare programs directly through our secure online donation platform. Your donation, no matter the size, has the power to transform the lives of vulnerable children and provide them with hope for a better future.Together, we can inspire more people to join us in our efforts to protect and empower children`}
          image={change}
        />

        <Campaigns category={"child"} />

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
