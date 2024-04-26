"use client";
import {
  Container,
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import Image from "next/image";
import ReactPlayer from "react-player";
import Slide from "./Slide";
import HomeFeatures from "@/sections/home/HomeFeatures";
import useResponsive from "@/hooks/useResponsive";
import Iconify from "@/components/Iconify";
import person1 from "@/assets/person1.webp";
import person2 from "@/assets/person2.webp";
import person3 from "@/assets/person3.webp";
import person4 from "@/assets/person4.webp";
import person5 from "@/assets/person5.webp";
import person6 from "@/assets/person6.webp";
import pic1 from "@/assets/p1.webp";
import pic2 from "@/assets/p2.webp";
import pic3 from "@/assets/p3.webp";
import bannerBg from "@/assets/banner-bg.webp";
import bannerimage from "@/assets/banner-image.webp";
import offerimage from "@/assets/offerimage.webp";
import { CreateFund } from "@/_mock/faqs";
import { stats } from "@/_mock/statistics";
import "../../../sections/home/customcss.css";

export default function CreateCampaign() {
  const isMobile = useResponsive("down", "sm");
  const isTablet = useResponsive("only", "sm");
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Box sx={{ gap: 3 }}>
        <CampaignHeading />
        <Box
          sx={{
            borderRadius: 1,
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            gap: 3,
            px: { xs: 0, sm: 3, md: 5 },
            my: 4,
            background: "#F3F3F3",
          }}
        >
          {isMobile && <CampaignVideo />}
          {isTablet && <CampaignVideoTablet />}
          <CampaignForm isMobile={isMobile} isTablet={isTablet} />
          {!isMobile && !isTablet && <CampaignVideo />}
        </Box>
        <Box
          sx={{
            px: { xs: 1, sm: 5, md: 10 },
          }}
        >
          <Banner isMobile={isMobile} />
        </Box>
        <Box
          sx={{
            position: "relative",
            mx: { xs: 1, sm: 5, md: 10 },
            mb: "3rem",
          }}
        >
          <HomeFeatures />
        </Box>
        <UserTestimonials />
        <FaqSection />
      </Box>
    </Container>
  );
}

const FaqSection = () => {
  return (
    <Box
      container
      sx={{ width: { xs: "90%", sm: "70%" }, mx: "auto", pt: 2, pb: 5 }}
    >
      <Typography variant="h6" sx={{ textAlign: "center", my: 3, mx: "auto" }}>
        Get Started: Your Campaign Creation FAQs
      </Typography>
      {CreateFund?.map((accordion, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={
              <Iconify
                icon={"eva:arrow-ios-downward-fill"}
                width={20}
                height={20}
              />
            }
          >
            <Typography variant="subtitle1">{accordion.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{accordion.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

const CampaignHeading = () => {
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 0 },
      }}
    >
      <Typography variant="h2" sx={{ color: "#2E4F7E", textAlign: "center" }}>
        Make a Difference with Your Campaign
      </Typography>
      <Typography
        vairant="body2"
        sx={{
          textAlign: "center",
          mx: "auto",
          width: { xs: "98%", sm: "50%", md: "35%" },
        }}
      >
        <i style={{ color: "#777" }}>
          Effortlessly launch your campaign in minutes with our user-friendly
          platform — simple steps, powerful impact.
        </i>
      </Typography>
    </Box>
  );
};

const CampaignForm = ({ isMobile, isTablet }) => {
  return (
    <Box sx={{ flex: 0.6, p: 0, m: 0 }}>
      {(isMobile || isTablet) && <hr />}
      <Typography variant="h5" sx={{ textAlign: "center", py: 2 }}>
        Enter Campaign Details
      </Typography>
      <Slide
        maxWidth={"lg"}
        sx={{
          width: "100%",
        }}
      />
    </Box>
  );
};

const CampaignVideoTablet = () => {
  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <Box
        sx={{
          flex: 0.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            background: "#E9F9FF",
            py: 1,
            borderRadius: 1,
          }}
        >
          <Typography variant="h6" sx={{ color: "#385f96" }}>
            Community Contributors
          </Typography>
          <AvatarGroup
            max={10}
            renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
            total={5000}
          >
            <Avatar alt="Remy Sharp" src={person1} />
            <Avatar alt="Travis Howard" src={person2} />
            <Avatar alt="Agnes Walker" src={person3} />
            <Avatar alt="Remy Sharp" src={person4} />
            <Avatar alt="Travis Howard" src={person5} />
            <Avatar alt="Agnes Walker" src={person6} />
          </AvatarGroup>
          <Typography variant="body2">
            and more have created campaign.
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" textAlign={"center"}>
            The Power of Your Contributions
          </Typography>
          <Box
            sx={{
              p: 2,
              display: "flex",
              gap: 3,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                flex: 0.33,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#4A90E2",
                color: "white",
                p: 1,
                borderRadius: 1,
              }}
            >
              <Typography variant="h6">30M+</Typography>
              <Typography variant="body2">Donations</Typography>
            </Box>
            <Box
              sx={{
                flex: 0.33,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#00B67A",
                color: "white",
                p: 1,
                borderRadius: 1,
              }}
            >
              <Typography variant="h6">50K+</Typography>
              <Typography variant="body2">Campaigns</Typography>
            </Box>
            <Box
              sx={{
                flex: 0.33,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#FFA935",
                color: "white",
                p: 1,
                borderRadius: 1,
              }}
            >
              <Typography variant="h6">500K+</Typography>
              <Typography variant="body2">Donors</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flex: 0.5 }}>
        <div className="video-responsive">
          <ReactPlayer
            playing
            muted
            loop
            url="https://www.youtube.com/embed/l9-HvVlPkEc?autoplay=1&mute=1"
            width="100%"
            height="100%"
            className="iframe"
          />
        </div>
      </Box>
    </Box>
  );
};

const CampaignVideo = () => {
  return (
    <Box sx={{ flex: 0.4, width: "100%", position: "relative", mt: 2 }}>
      <Box
        sx={{
          position: "sticky",
          top: 100,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="h4" textAlign={"center"}>
            The Power of Your Contributions
          </Typography>
          <Box
            sx={{
              p: 1,
              display: "flex",
              gap: 3,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                flex: 0.33,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#4A90E2",
                color: "white",
                p: 1,
                borderRadius: 1,
              }}
            >
              <Typography variant="h6">{stats.raisedFund}M+</Typography>
              <Typography variant="body2">Donations</Typography>
            </Box>
            <Box
              sx={{
                flex: 0.33,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#00B67A",
                color: "white",
                p: 1,
                borderRadius: 1,
              }}
            >
              <Typography variant="h6">{stats.globalCampaign}+</Typography>
              <Typography variant="body2">Campaigns</Typography>
            </Box>
            <Box
              sx={{
                flex: 0.33,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#FFA935",
                color: "white",
                p: 1,
                borderRadius: 1,
              }}
            >
              <Typography variant="h6">{stats.donor}K+</Typography>
              <Typography variant="body2">Donors</Typography>
            </Box>
          </Box>
        </Box>
        <div className="video-responsive">
          <ReactPlayer
            playing
            muted
            loop
            url="https://www.youtube.com/embed/l9-HvVlPkEc?autoplay=1&mute=1"
            width="100%"
            height="100%"
            className="iframe"
          />
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            // justifyContent: 'center',
            gap: 1.5,
            background: "#E9F9FF",
            py: 2,
            px: 2,
            borderRadius: 1,
            mb: 2,
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "left", color: "#385f96" }}>
            Community Contributors
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AvatarGroup
              max={10}
              renderSurplus={(surplus) => (
                <span>+{surplus.toString()[0]}k</span>
              )}
              total={5000}
            >
              <Avatar alt="Remy Sharp" src={person1} />
              <Avatar alt="Travis Howard" src={person2} />
              <Avatar alt="Agnes Walker" src={person3} />
              <Avatar alt="Remy Sharp" src={person4} />
              <Avatar alt="Travis Howard" src={person5} />
              <Avatar alt="Agnes Walker" src={person6} />
            </AvatarGroup>
            <Typography variant="body2" sx={{ mt: 1 }}>
              ...and many have created campaign.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Banner = ({ isMobile }) => {
  const today = new Date();
  const monthName = today.toLocaleString("default", { month: "long" });
  // console.log(monthName);
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 200, sm: 290, md: 500 },
        display: "flex",
        alignItems: "center",
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <Image
        src={bannerBg}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        alt="banner bg"
      />
      <Box
        sx={{
          zIndex: 9,
          flex: 0.6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography variant="h3" sx={{ fontSize: { xs: 20, sm: 30 } }}>
          Get 5000 Donation
        </Typography>
        <Image
          src={offerimage}
          alt="Offer Image"
          // width={200}
          height={isMobile ? 50 : 150}
        />
        <Typography
          sx={{
            background: "#FFFF00",
            color: "#B11E29",
            py: { xs: 0.5, sm: 1 },
            px: { xs: 1, sm: 2 },
            my: { xs: 1, sm: 2 },
            fontSize: { xs: 9, sm: 18 },
            fontWeight: "bold",
          }}
        >
          {monthName} Welcome Offer
        </Typography>
        <Typography
          variant="caption"
          sx={{ fontSize: { xs: 8, sm: 14 }, width: { xs: "100%", sm: "60%" } }}
        >
          Raise donation worth 1 Lakh this month and get 5000 donation from
          Impaac Foundation.
        </Typography>
        <Typography
          variant="caption"
          sx={{
            mt: 2,
            fontSize: { xs: 8, sm: 16 },
            width: { xs: "100%", sm: "60%" },
          }}
        >
          Hurry! Limited Offer!
        </Typography>
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            left: -150,
            bottom: 3,
            fontSize: { xs: 4, sm: 10 },
            width: { xs: "100%", sm: "50%" },
          }}
        >
          Terms and Conditions applied*
        </Typography>
      </Box>
      <Box sx={{ zIndex: 9, flex: 0.4 }}>
        <Image
          src={bannerimage}
          alt="left image"
          objectFit="contain"
          objectPosition="center"
          height={isMobile ? 200 : 450}
        />
      </Box>
    </Box>
  );
};

const UserTestimonials = () => {
  return (
    <Box
      sx={{
        background: "white",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 4, sm: 2 },
        px: { xs: 2, sm: 5, md: 10 },
        py: 4,
      }}
    >
      <Box sx={{ flex: 0.4, mt: { xs: 0, sm: 3, md: 3 } }}>
        <Typography
          variant="h3"
          sx={{
            width: { xs: "100%", sm: "90%", md: "80%" },
            textAlign: { xs: "center", sm: "left", lineHeight: 1 },
          }}
        >
          Hear What Our Happy Customers Have to Say
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 2, width: "90%", textAlign: { xs: "center", sm: "left" } }}
        >
          Get inspired by the stories of those who have benefited from the
          generosity of our community.
        </Typography>
      </Box>
      <Box sx={{ flex: 0.6 }}>
        {testimonials.map((item) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              p: 2,
            }}
          >
            <Box
              sx={{
                flex: { xs: 0.4, sm: 0.2 },
                height: { xs: 180, sm: 120, md: 150 },
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              <Image
                src={item.image}
                alt={item.name}
                height={170}
                objectFit="fill"
                objectPosition="center"
                sx={{ borderRadius: 2 }}
              />
            </Box>
            <Box sx={{ flex: { xs: 0.6, sm: 0.8 } }}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body">{item.testimonial}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const testimonials = [
  {
    name: "Vineet Shah",
    image: pic1,
    testimonial:
      "Absolutely love this leap of faith. When you look at the Impaac platform, it definitely reflects the values of Anoj. This would come as big bost to the social sector & a very rare instance of generosity which is never easy. Go #Impaac 5/5 stars!",
  },
  {
    name: "Priti Dogra",
    image: pic2,
    testimonial:
      'I am glad that a small contribution from me has made a positive difference in the lives of needy strays. I felt humble when I read the feedback".!',
  },
  {
    name: "Inayra Lamba",
    image: pic3,
    testimonial:
      "I found Impaac Foundation a completely free & transparent platform where all the donations raised were fully funded without any processing fees or tips like others charge. The team is really helpful and helped me to contribute to the society. Thanks!",
  },
];
