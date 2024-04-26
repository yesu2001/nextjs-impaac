"use client";
// @mui
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
// sections
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
import { csrstories } from "@/_mock/SuccessStories";
// Images
import banner from "@/sections/catalogue/csr/catalogue_Pic/banner.png";
import mobileBanner from "@/sections/catalogue/csr/catalogue_Pic/mobilebanner.png";
import change from "@/sections/catalogue/medical/catalogue_Pic/change.png";
import mission from "@/sections/catalogue/csr/catalogue_Pic/mission.png";
import network from "@/sections/catalogue/csr/catalogue_Pic/network.png";
import csrcollab from "@/sections/catalogue/csr/catalogue_Pic/csrcollab.png";
import community from "@/sections/catalogue/csr/catalogue_Pic/community.png";

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

export default function CsrPage() {
  return (
    <RootStyle>
      <ContentStyle>
        <Hero
          title="CSR"
          description="Empowering Communities, Creating Impact"
          desktopBg={banner}
          mobileBg={mobileBanner}
          sx={{ width: "100%" }}
        />

        <Container>
          <Mission
            title={"Our Approach to CSR:"}
            description={` At Impaac Foundation, we believe that businesses play a crucial role in shaping a better world. Our Corporate
              Social Responsibility (CSR) programs offer a meaningful avenue for companies to contribute to social
              development, environmental sustainability, and community well-being. By partnering with us, your organization
              can make a positive impact, leaving a lasting legacy that extends beyond profit margins.`}
            image={mission}
          />
        </Container>

        <Network
          title={"Why Choose Impaac Foundation for CSR:"}
          description={` We work closely with companies to tailor CSR programs that align with their values, industry, and
            corporate culture. Our goal is to create bespoke initiatives that reflect the unique identity of each
            partner. Our dedicated teams ensure that CSR initiatives are effectively executed, maximizing positive
            outcomes.`}
          image={network}
        />

        <Change
          title={"How to Engage in CSR with Impaac Foundation:"}
          description={` Work with our team to identify CSR goals that align with your company's values and priorities.
            Collaborate with us to design customized CSR programs that address specific social, environmental, and
            community needs. Encourage employee participation in volunteering and engagement activities to foster
            a sense of purpose and social responsibility.`}
          image={change}
        />

        <Campaigns category={"all"} />

        <AboutStats />

        <Container>
          <HomeSuccessStories stories={csrstories} />
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

        <ImpaacCommunity image={community} />
      </ContentStyle>
    </RootStyle>
  );
}
