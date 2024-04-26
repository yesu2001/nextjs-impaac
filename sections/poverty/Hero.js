import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Container } from '@mui/material';
import { m } from 'framer-motion';
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';
import banner from './catalogue_Pic/banner.webp';

const RootStyle = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  height: 490,
  backgroundImage: `url(${banner})`,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 500,
    padding: 0,
    backgroundImage: `url(${banner})`,
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  width: '80%',
  float: 'right',
  [theme.breakpoints.up('md')]: {
    width: '45%',
  },
}));

export default function Hero() {
  return (
    <RootStyle>
      <Container
        component={MotionContainer}
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          alignItems: { md: 'center', xs: 'center' },
          justifyContent: { md: 'right', xs: 'center' },
        }}
      >
        <ContentStyle>
          <Box
            sx={{
              display: 'block',
              color: '#f3f1f1',
              letterSpacing: '-0.09rem',
              py: 1,
              borderRadius: '9px',
            }}
          >
            <TextAnimate text="Poverty" sx={{ color: 'white', mr: 1.2, fontSize: { md: '2.6rem', xs: '2.8rem' } }} />
          </Box>

          <m.div variants={varFade().inRight}>
            <Typography
              variant="body1"
              sx={{
                color: '#f1f1f1',
                fontWeight: 'fontWeightMedium',
                mt: 1.4,
                background: '#00000069',
                p: 2,
                borderRadius: '9px',
              }}
            >
              Bridging Impact: Empowering India through Seamless Giving
            </Typography>
          </m.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
