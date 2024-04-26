"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @mui
import { Button, Grid, Typography, Box } from "@mui/material";
import {
  Happy_Children,
  Happy_Women,
  Happy_girl,
  Patient,
  JoinHands,
  NoPlastic,
  Poverty_india,
  Reliable_Platform,
  Ultimate_Charity,
} from "./FeaturesPic";
import useResponsive from "@/hooks/useResponsive";
// ----------------------------------------------------------------------

export default function HomeHero() {
  const slides = [
    {
      name: "Empower Change: Support Causes That Matter",
      description:
        "At IMPAAC, we believe in the power of collective impact. From Vision to Victory: Our Trusted Campaigns Redefining the Future of Charitable Initiatives that touch the lives of many.",
      imgsrc: Happy_Children,
      linkname: "Join us now!",
      path: "/fundraisers/new",
      alt: "at impaac empowering Indian rural child education for social work",
      id: "b_homepage_slide_one",
    },
    {
      name: "100% Reliable and Authenticated NGOs and Campaigns",
      description:
        "India's Exclusive and Authentic Platform for Charitable Contributions! We Issue Tax Exemption Certificates Under Section 80G on donations . A Genuine Platform Dedicated to Making a Difference through Giving!",
      imgsrc: Ultimate_Charity,
      linkname: "Support Our Campaigns",
      path: "/campaign",
      alt: "eliable and Authenticated NGOs and Campaigns, Tax Exemption Certificates Under Section 80G on donations",
      id: "b_homepage_slide_two",
    },
    {
      name: "The Ultimate Charity Hub You Can Rely On",
      description:
        "India's Pioneering Non-Profit Charity Platform, Completely Free for All Social Causes. Your Comprehensive Solution for Any Charity Need.",
      imgsrc: Reliable_Platform,
      linkname: "Know About Us!",
      path: "/about",
      alt: "India's Pioneering Non-Profit Charity Platform, Solution for Any Charity Need",
      id: "b_homepage_slide_three",
    },
    {
      name: "Education for All: that many people value",
      description:
        "Ensure access to quality education for every child. Supporting education initiatives, especially those aimed at providing quality education to underprivileged children and promoting literacy.",
      imgsrc: Happy_Women,
      linkname: "Know More!",
      path: "/education",
      alt: "at impaac we support education for all in India growth",
      id: "b_homepage_slide_four",
    },
    {
      name: "Support Animal Welfare:",
      description:
        "Join Impaac in safeguarding the lives and well-being of our furry friends. We are passionate about supporting organizations that work to protect animals from cruelty, provide shelter and care for abandoned or mistreated animals, and promote the overall well-being of animals.",
      imgsrc: JoinHands,
      linkname: "Know More!",
      path: "/animal",
      alt: "protect Animal Welfare cruelty, provide shelter",
      id: "b_homepage_slide_five",
    },
    {
      name: "Healthcare Access and Medical Research:",
      description:
        "Funding for research to find cures and treatments for complicated diseases. Join our mission to provide healthcare for those in need. It will help in delivering medical aid, vaccinations, and essential health services to vulnerable communities.",
      imgsrc: Patient,
      linkname: "Know More!",
      path: "/medical",
      alt: "Healthcare Access Medical Research aid, vaccinations, and essential health services",
      id: "b_homepage_slide_six",
    },
    {
      name: "Environmental Conservation:",
      description:
        "To protect the planet for future generations. Lets contribute and work togethering for initiatives that promote sustainable practices, conservation of wildlife, protection of endangered species, addressing environmental issues and the restoration of our ecosystems.",
      imgsrc: NoPlastic,
      linkname: "Know More!",
      path: "/env",
      alt: "Environmental Conservation of wildlife protection of endangered species, addressing environmental issues and the restoration of our ecosystems",
      id: "b_homepage_slide_seven",
    },
    {
      name: "Eradicating Poverty: Transforming Lives Together",
      description:
        "At Impaac, we're on a mission to break the cycle of poverty and build a future where everyone has the opportunity to thrive. We work to provide access to basic needs such as food and clean water, and empower communities to break the cycle of poverty are often supported by donors.",
      imgsrc: Poverty_india,
      linkname: "Know More!",
      path: "/poverty",
      alt: "Eradicating Poverty empower communities provide access to basic needs",
      id: "b_homepage_slide_eight",
    },
    {
      name: "Disaster And Emergency Relief:",
      description:
        "Be a lifeline in times of crisis. Support aids in providing immediate relief to those affected by natural disasters, conflicts, and emergencies. We help those affected by natural disasters such as earthquakes, hurricanes, floods, and wildfires.",
      imgsrc: Happy_girl,
      linkname: "Know More!",
      path: "/relief",
      alt: "Disaster And Emergency Relief natural disasters, conflicts earthquakes, hurricanes, floods, and wildfires",
      id: "b_homepage_slide_nine",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ marginTop: "0px" }}>
      <Slider {...settings}>
        {slides.map((item, index) => (
          <Slide key={index} item={item} />
        ))}
      </Slider>
    </div>
  );
}

function Slide({ item }) {
  const isMobile = useResponsive("down", "sm");
  return (
    <Grid
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        textAlign: { xs: "left", md: "left" },
        paddingTop: "5rem",
        paddingBottom: "3rem",
      }}
      container
    >
      <Grid item md={6}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
            color: "#1D1D1B",
            margin: "20px 0",
            fontSize: { md: "40px", xs: "29px" },
            letterSpacing: "-0.04em",
            textAlign: "left",
            textTransform: "capitalize",
            ml: { md: 1 },
          }}
        >
          {item.name}
        </Typography>
        <Typography
          sx={{
            ml: { md: 1 },
            fontSize: "18px",
            textAlign: "left",
            letterSpacing: "-0.02em",
            textTransform: "capitalize",
          }}
        >
          {item.description}
        </Typography>
        <Button
          href={item.path}
          variant="contained"
          size="large"
          id={item?.id}
          sx={{
            ml: { md: 1 },
            marginTop: { xs: "26px", md: "33px" },
            fontSize: "16px",
            borderRadius: 7,
            fontWeight: "500",
          }}
        >
          {item.linkname}
        </Button>
      </Grid>
      <Grid item md={6}>
        <Box>
          <Image
            alt={item?.alt}
            src={item.imgsrc}
            width={isMobile ? 570 : 570}
            height={isMobile ? 250 : 400}
            objectFit="cover"
          />
        </Box>
      </Grid>
    </Grid>
  );
}
