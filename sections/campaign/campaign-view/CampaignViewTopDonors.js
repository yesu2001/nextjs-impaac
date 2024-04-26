import React, { useEffect, useState } from 'react';
import { Stack, Box, Typography, Avatar } from '@mui/material';
import Slider from 'react-slick';
import { m } from 'framer-motion';
import { getRandomSoftColor } from '../../../utils/getRandomColor';
import Image from '../../../components/Image';
import cardS1 from '../../../assets/cardS1.jpg';
import cardS4 from '../../../assets/cards4.png';

export default function CampaignViewTopDonors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const settings1 = {
    dots: false,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: false,
    slidesToShow: 2,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: false,
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  return (
    <Slider {...settings1}>
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
    </Slider>
  );
}

const CardOne = () => {
  const [currentDonorIndex, setCurrentDonorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextDonor();
      // setCurrentDonorIndex((prevIndex) => (prevIndex + 1) % topDonors.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [topDonors.length]);

  const cardVariants = {
    initial: {
      opacity: 0,
      translateX: -100,
    },
    enter: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
    exit: {
      opacity: 0,
      translateX: -100,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleNextDonor = () => {
    setCurrentDonorIndex((prevIndex) => (prevIndex + 1) % topDonors.length);
  };

  return (
    <Box
      sx={{
        flex: 0.5,
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        border: '3px solid #7bced3',
        alignItems: 'center',
        borderRadius: 2,
        padding: { xs: 1, sm: 2 },
        ml: { xs: 1, sm: 3 },
        mr: 1,
      }}
    >
      <Typography variant="h6" sx={{ color: '#7bced3', mb: 1 }}>
        Top Donor
      </Typography>
      <m.div
        variants={cardVariants}
        key={currentDonorIndex}
        initial="initial"
        animate="enter"
        exit="exit"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Avatar
          sx={{
            width: 70,
            height: 70,
            mx: 1,
            backgroundColor: getRandomSoftColor(),
            color: 'white',
            fontWeight: 'bold',
            fontSize: 25,
          }}
          alt={topDonors[currentDonorIndex].name}
          src="/broken-image.jpg"
        />
        <Typography sx={{ mt: 1 }}>{topDonors[currentDonorIndex].name}</Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Rs. {topDonors[currentDonorIndex].amount.toLocaleString()}
        </Typography>
        <Typography sx={{ fontSize: 14 }}>Donated</Typography>
      </m.div>
    </Box>
  );
};

const CardTwo = () => {
  return (
    <Box
      sx={{
        height: 'auto',
        flex: 0.5,
        display: 'flex',
        flexDirection: 'column',
        border: '3px solid #8bdb6e',
        alignItems: 'center',
        p: { xs: 1, sm: 2 },
        ml: { xs: 1, sm: 3 },
        mr: 1,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" sx={{ color: '#8bdb6e', mb: 1 }}>
        Top Comment
      </Typography>
      <Avatar
        sx={{
          width: 70,
          height: 70,
          mx: 1,
          backgroundColor: getRandomSoftColor(),
          color: 'white',
          fontWeight: 'bold',
          fontSize: 25,
        }}
        alt="Sanjay"
        src="/broken-image.jpg"
      />
      <Typography sx={{ mt: 1 }}>Sanjay</Typography>
      <Typography variant="subtitle1" sx={{ textAlign: 'center', mt: 2 }}>
        " Great Initiative, great Work. "
      </Typography>
    </Box>
  );
};

const CardThree = () => {
  return (
    <Box
      sx={{
        height: 'auto',
        flex: 0.5,
        display: 'flex',
        flexDirection: 'column',
        border: '3px solid #997fe0',
        alignItems: 'center',
        p: { xs: 1, sm: 2 },
        ml: { xs: 1, sm: 3 },
        mr: 1,
        borderRadius: 2,
      }}
    >
      <Image ratio="4/3" alt="child learning" src={cardS1} sx={{ borderRadius: 1 }} />
      <Typography variant="body2" sx={{ textAlign: 'center', mt: 2, mx: 1 }}>
        🎉 50 kids in village learn in new school! 🎊
      </Typography>
      <Typography sx={{ fontSize: 12, fontWeight: 600 }}>Raised Rs.6,00,000</Typography>
    </Box>
  );
};

const CardFour = () => {
  return (
    <Box
      sx={{
        height: '100%',
        flex: 0.5,
        display: 'flex',
        flexDirection: 'column',
        border: '3px solid #ffa935',
        alignItems: 'center',
        p: { xs: 1, sm: 2 },
        ml: { xs: 1, sm: 3 },
        mr: 1,
        borderRadius: 2,
      }}
    >
      <Image ratio="4/3" alt="child learning" src={cardS4} sx={{ borderRadius: 1 }} />
      <Typography variant="body2" sx={{ textAlign: 'center', mt: 2, mx: 1 }}>
        💖 10 year old child saved from rare disease!
      </Typography>
      <Typography sx={{ fontSize: 12, fontWeight: 600 }}>Raised Rs.20,00,000</Typography>
    </Box>
  );
};

const topDonors = [
  {
    name: 'Sanjay',
    amount: 70000,
  },
  {
    name: 'Abhishek',
    amount: 65000,
  },
  {
    name: 'Venkat',
    amount: 59000,
  },
  {
    name: 'Vishal',
    amount: 55000,
  },
];
