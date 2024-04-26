"use client";
import { useRef } from "react";
import Image from "next/image";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import { CarouselArrows } from "../../components/carousel";
import useResponsive from "@/hooks/useResponsive";

export default function HomeSuccessStories({ stories }) {
  const theme = useTheme();
  const carouselRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    rtl: Boolean(theme.direction === "rtl"),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };
  return (
    <div style={{ position: "relative" }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          letterSpacing: "-0.09rem",
          paddingTop: "1.8rem",
        }}
      >
        Success Stories
      </Typography>
      <Divider
        sx={{
          backgroundColor: "steelblue",
          width: "50px",
          height: "5px",
          margin: "auto",
        }}
      />
      <Typography variant="body1" sx={{ textAlign: "center", m: 2 }}>
        Impaacful Stories of Happy Fundraisers{" "}
      </Typography>
      <CarouselArrows filled onNext={handleNext} onPrevious={handlePrevious}>
        <Slider ref={carouselRef} {...settings}>
          {stories.map((item, i) => (
            <Story key={i} item={item} />
          ))}
        </Slider>
      </CarouselArrows>
    </div>
  );
}

function Story(props) {
  const isMobile = useResponsive("down", "sm");

  return (
    <>
      <Box>
        <Grid
          container
          sx={{
            position: "relative",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: props.item.background,
            margin: "auto",
            width: { md: "80%", xs: "95%" },
            mb: 5,
            flexDirection: { md: "row", xs: "column-reverse" },
          }}
        >
          <Grid
            item
            md={6}
            sx={{ p: { md: 6, xs: 2 }, width: { md: "50%", xs: "100%" } }}
          >
            <Typography
              variant="h4"
              sx={{
                py: { md: 2, xs: 1 },
                fontWeight: 600,
                letterSpacing: "-0.09rem",
                color: "#1c1c1c",
                fontSize: { md: "30px", xs: "22px" },
              }}
            >
              {props.item.name}
            </Typography>
            <Typography variant="body1" sx={{ pb: 2, color: "black" }}>
              {props.item.description}{" "}
            </Typography>
          </Grid>
          <Grid item sx={{ width: { md: "50%", xs: "100%" }, height: "100%" }}>
            <Image
              src={props.item.imgsrc}
              alt="Story Image"
              height={isMobile ? 250 : 400}
              objectFit="cover"
              style={{ borderRadius: "8px", width: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
