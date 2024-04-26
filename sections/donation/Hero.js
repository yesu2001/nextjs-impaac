import * as React from 'react';
import { m } from 'framer-motion';
import { Box, Typography, Container, useMediaQuery, styled } from '@mui/material';
import useSettings from '../../hooks/useSettings';
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';
import banner from './catalogue_Pic/banner.webp';

const RootStyle = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  height: 490,
  backgroundImage: `url(${banner})`,
  // backdropFilter: 'contrast(0.5)',
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
  const { themeStretch } = useSettings();
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
            <TextAnimate text="Animal" sx={{ color: 'white', mr: 1.2, fontSize: { md: '2.6rem', xs: '2.8rem' } }} />
          </Box>

          <m.div variants={varFade().inRight}>
            <Typography
              variant="body1"
              sx={{
                color: '#ffffff',
                fontWeight: 'fontWeightMedium',
                mt: 1.4,
                background: '#00000069',
                p: 2,
                borderRadius: '9px',
              }}
            >
              Save Animals, Save Humanity
            </Typography>
          </m.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
