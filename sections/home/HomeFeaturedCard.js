"use client";
import PropTypes from "prop-types";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @mui
import { Box, CardHeader, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// components
import CampaignCard from "../../components/CampaignCard";
import { CarouselArrows } from "../../components/carousel";

// ----------------------------------------------------------------------

HomeFeaturedCard.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
  sx: PropTypes.object,
};

export default function HomeFeaturedCard({ list, sx, slides, ...other }) {
  const theme = useTheme();

  const carouselRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: slides || 4,
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
    <div>
      <Box sx={{ py: 4, ...sx }} {...other}>
        <Box sx={{ position: "relative", mb: 3, mt: 3 }}>
          <CarouselArrows
            filled
            onNext={handleNext}
            onPrevious={handlePrevious}
          >
            <Slider ref={carouselRef} {...settings}>
              {list.map((item) => (
                <CampaignItem key={item._id} item={item} />
              ))}
            </Slider>
          </CarouselArrows>
        </Box>
      </Box>
    </div>
  );
}

// ----------------------------------------------------------------------

CampaignItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    imageURL: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    person: PropTypes.string,
    target_amount: PropTypes.number,
  }),
};

function CampaignItem({ item }) {
  return (
    <Paper
      sx={{ mx: 1.5, borderRadius: 2, m: 1, bgcolor: "background.neutral" }}
    >
      <CampaignCard key={item._id} campaign={item} />
    </Paper>
  );
}
