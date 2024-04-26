import * as React from 'react';
import { m } from 'framer-motion';
import { Typography, Container, useMediaQuery, Grid, Fade } from '@mui/material';
import useSettings from '../../hooks/useSettings';
import Image from '../../components/Image';
import animal from './catalogue_Pic/23.webp';
import HeroTitle from '../../components/catalogue/HeroTitle';

export default function Hero() {
  const { themeStretch } = useSettings();
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Container maxWidth={themeStretch ? false : 'lg'}>
      <Grid container py={5} sx={{ height: { xs: 'auto', md: '90vh' } }}>
        <Grid item xs={12} sm={12} md={8} sx={{ width: { xs: '100%', md: '80%' } }}>
          {/* Animate the text using Fade animation */}
          <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeInOut' }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                width: { xs: '100%', sm: '100%', md: '95%' },
                fontSize: { sm: 50, md: 76 },
                color: 'rgb(57, 127, 183)',
                textAlign: 'left',
              }}
            >
              Support Medical Aid: To Save Many Lives
            </Typography>
          </m.div>
        </Grid>
        <Grid Item xs={12} sm={12} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Animate the image using MotionValue */}
          <m.div
            animate={{ translateX: 0 }}
            initial={{ translateX: '100%' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <Image alt={animal} src={animal} sx={{ width: { xs: '70%', sm: '70%', md: '100%' } }} />
          </m.div>
        </Grid>
      </Grid>
    </Container>
  );
}
