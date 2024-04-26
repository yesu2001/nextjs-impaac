"use client";
import React from "react";
// @mui
// import { styled } from "@mui/material/styles";
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
import { educationstories } from "@/_mock/SuccessStories";
// Images
import banner from "@/sections/catalogue/education/catalogue_Pic/banner.webp";
import mobileBanner from "@/sections/catalogue/education/catalogue_Pic/mobilebanner.jpg";
import mission from "@/sections/catalogue/education/catalogue_Pic/mission.png";
import network from "@/sections/catalogue/education/catalogue_Pic/network.png";
import donors from "@/sections/catalogue/education/catalogue_Pic/change.png";
import csr from "@/sections/catalogue/education/catalogue_Pic/csrcollab.png";
import Pehchaan from "@/sections/catalogue/education/catalogue_Pic/Pehchaan.png";
import Khayaal from "@/sections/catalogue/education/catalogue_Pic/Khayaal.png";
import Iskcon from "@/sections/catalogue/education/catalogue_Pic/Iskcon.png";
import community from "@/sections/catalogue/education/catalogue_Pic/community.png";
import { getAllCampaignHelper } from "@/helper/campaign";

// const RootStyle = styled("div")(({ theme }) => ({
//   paddingTop: theme.spacing(8),
//   [theme.breakpoints.up("md")]: {
//     paddingTop: theme.spacing(11),
//   },
// }));

// const ContentStyle = styled("div")(({ theme }) => ({
//   overflow: "hidden",
//   position: "relative",
//   backgroundColor: theme.palette.background.default,
// }));

export default function EducationPage() {
  const ngos = [
    {
      imgSrc: Pehchaan,
      name: "Pehchaan Street School",
      role: "Free Weekend Tutions",
    },
    {
      imgSrc: Khayaal,
      name: "Khayaal Foundation",
      role: "Give Education and Study Materials",
    },
    {
      imgSrc: Iskcon,
      name: "Iskcon Hyderabad",
      role: "Distribute Value Education Kit",
    },
  ];
  getAllCampaignHelper()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  // console.log(data);
  return (
    <Box sx={{ pt: 10 }}>
      <Hero
        title="Education"
        description="Empowering Education: Lighting the Path to Knowledge"
        desktopBg={banner}
        mobileBg={mobileBanner}
        sx={{ width: "100%" }}
      />

      <Container>
        <Mission
          title={"Our Mission: Empowering Education for All"}
          description={` At Impaac Foundation, our mission is to empower education, lighting the path to knowledge and enabling access to
                quality learning. We provide NGOs a dynamic platform to create campaigns for raising funds to advance
                educational causes across India and around the world.`}
          image={mission}
        />
      </Container>

      <Network
        title={"A Network of Trustworthy NGOs"}
        description={` We unite with NGOs dedicated to education, whether it's providing access to schools, improving
            educational infrastructure, enhancing digital literacy, or offering scholarships. Our platform is home
            to trusted entities, working passionately on a global and Indian stage.`}
        image={network}
      />

      <Change
        title={"Connecting Educational Change-Makers"}
        description={`For donors seeking to make a difference in the lives of learners, we are the ultimate destination. We
              showcase a myriad of trusted NGOs, making it effortless for you to support the educational cause that
              touches your heart. We're the bridge between your generosity and their educational mission.`}
        image={donors}
      />

      <Campaigns category={"child"} />

      <AboutStats />

      <Container>
        <HomeSuccessStories stories={educationstories} />
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
          image={csr}
        />
      </Container>

      <AboutTestimonials />

      <NgoSection ngos={ngos} />

      <ImpaacCommunity image={community} />
      {/* </ContentStyle> */}
    </Box>
  );
}
