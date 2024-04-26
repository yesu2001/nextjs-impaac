"use client";
// @mui
import { styled } from "@mui/material/styles";
import { Container, Box } from "@mui/material";
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
import { reliefstories } from "@/_mock/SuccessStories";
// Images
import banner from "@/sections/catalogue/relief/cataloguePics/banner.webp";
import mobileBanner from "@/sections/catalogue/relief/cataloguePics/mobilebanner.jpg";
import mission from "@/sections/catalogue/relief/cataloguePics/12.png";
import network from "@/sections/catalogue/relief/cataloguePics/13.png";
import change from "@/sections/catalogue/relief/cataloguePics/14.png";
import csr from "@/sections/catalogue/relief/cataloguePics/15.png";
import pic1 from "@/sections/catalogue/relief/cataloguePics/19.png";
import pic2 from "@/sections/catalogue/relief/cataloguePics/18.png";
import pic3 from "@/sections/catalogue/relief/cataloguePics/17.png";
import community from "@/sections/catalogue/relief/cataloguePics/16.png";

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

export default function ReliefPage() {
  const ngos = [
    {
      imgSrc: pic2,
      name: "Globe Saviours",
      role: "Helping in Setting Up Disaster Alarms",
    },
    {
      imgSrc: pic1,
      name: "Eco Earth Foundation",
      role: "Gives Medical Aid to Affected",
    },
    { imgSrc: pic3, name: "Our Nature", role: "Plant Trees to Save Nature" },
  ];
  return (
    <RootStyle>
      <ContentStyle>
        <Hero
          title="Relief"
          description="Relief United: Responding swiftly to Disasters and Social Crisis"
          desktopBg={banner}
          mobileBg={mobileBanner}
          sx={{ width: "100%" }}
        />

        <Container>
          <Mission
            title={"Our Commitment to Disaster Relief:"}
            description={`We act swiftly in the aftermath of disasters, providing essential supplies such as food, clean water, shelter,
              and medical assistance to those affected. Our goal is to address the immediate needs of survivors and offer a
              lifeline during their most challenging moments. We believe in proactive measures to mitigate the impact of
              future disasters. Our initiatives include community training programs, disaster preparedness drills, and the
              establishment of early warning systems.`}
            image={mission}
          />
        </Container>

        <Network
          title={"Why Choose Impaac Foundation for Disaster Relief:"}
          description={` Our experienced and dedicated teams are ready to deploy quickly in the wake of disasters, ensuring
            that aid reaches those in need as soon as possible. We prioritize transparency in all our operations.
            Detailed reports on the utilization of funds and the impact of relief efforts are made available,
            providing donors with a clear understanding of the difference their contributions make.`}
          image={network}
        />

        <Change
          title={"How to Support Disaster Relief:"}
          description={` Discover our Disaster Relief campaigns and choose the cause that aligns with your desire to make a
            positive impact in times of crisis. Make a donation directly to your selected campaign through our
            platform. Your contribution plays a crucial role in providing timely relief and aiding in the recovery
            process.`}
          image={change}
        />

        <Campaigns category={"relief"} />

        <AboutStats />

        <Container>
          <HomeSuccessStories stories={reliefstories} />
        </Container>

        <Container>
          <CSRCollab
            title={"Empowering NGOs through CSR Collaborations"}
            description={`We are proud to present many CSR companies that collaborate with Impaac Foundation, extending their support to
              NGOs. These partnerships channel resources where they're needed most.`}
            note1={`Benefit from our collaborations with numerous CSR companies committed to the
              disaster and relief.`}
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
