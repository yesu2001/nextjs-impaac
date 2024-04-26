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
import { povertystories } from "@/_mock/SuccessStories";
// Images
import banner from "@/sections/catalogue/poverty/catalogue_Pic/banner.webp";
import mobileBanner from "@/sections/catalogue/poverty/catalogue_Pic/mobilebanner.jpg";
import mission from "@/sections/catalogue/poverty/catalogue_Pic/1.webp";
import network from "@/sections/catalogue/poverty/catalogue_Pic/2.webp";
import change from "@/sections/catalogue/poverty/catalogue_Pic/3.webp";
import csr from "@/sections/catalogue/poverty/catalogue_Pic/csr.png";
import Meera from "@/sections/catalogue/poverty/catalogue_Pic/meera.png";
import Ckb from "@/sections/catalogue/poverty/catalogue_Pic/ckb.png";
import Sabar from "@/sections/catalogue/poverty/catalogue_Pic/sabar.png";
import community from "@/sections/catalogue/poverty/catalogue_Pic/community.png";

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

export default function PovertyPage() {
  const ngos = [
    {
      imgSrc: Meera,
      name: "Meera Charitable Trust",
      role: "Helping Poors to Earn",
    },
    {
      imgSrc: Ckb,
      name: "Chalo Khushiyan Baatien",
      role: "Free Food Distribution in Nagpur",
    },
    {
      imgSrc: Sabar,
      name: "Sabar NGO",
      role: "Working towards treating poors",
    },
  ];
  return (
    <RootStyle>
      <ContentStyle>
        <Hero
          title="Poverty"
          description="Bridging Impact: Empowering India through Seamless Giving"
          desktopBg={banner}
          mobileBg={mobileBanner}
          sx={{ width: "100%" }}
        />

        <Container>
          <Mission
            title={"Our Mission: Eradicating Poverty"}
            description={`Welcome to our platform where impact meets innovation, and generosity transforms lives. We are dedicated to
              eradicating poverty in India by building a seamless and trusted bridge between NGOs and donors. Join us in
              creating a brighter, more equitable future for those in need.`}
            image={mission}
          />
        </Container>

        <Network
          title={"A Network of Trustworthy NGOs"}
          description={` Our platform provides NGOs with a robust and user-friendly space to showcase their impactful projects.
            By connecting with compassionate donors, you can turn visions into reality and bring about positive
            change. The process is simple, efficient, and ensures that your efforts receive the support they
            deserve.`}
          image={network}
        />

        <Change
          title={"Employment and Skill Development:"}
          description={` Discover and support the best NGOs working tirelessly to alleviate poverty in India. Our platform
            empowers you to make informed decisions, track your contributions, and witness the tangible impact of
            your generosity. Every donation you make creates a ripple effect, transforming lives and communities.`}
          image={change}
        />

        <Campaigns category={"all"} />

        <AboutStats />

        <Container>
          <HomeSuccessStories stories={povertystories} />
        </Container>

        <Container>
          <CSRCollab
            title={"Empowering NGOs through CSR Collaborations"}
            description={` We are proud to present many CSR companies that collaborate with Impaac Foundation, extending their support to
              NGOs. These partnerships channel resources where they're needed most.`}
            note1={`BWe are proud to present many CSR companies that collaborate with Impaac Foundation,
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
