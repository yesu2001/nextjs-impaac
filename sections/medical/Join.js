import * as React from 'react';
import { Stack, Grid, Card, Typography, Box, Container, Fade } from '@mui/material';
import { m } from 'framer-motion';
import Image from '../../components/Image';
import network from './catalogue_Pic/6.webp';
import Title from '../../components/catalogue/Title';

export default function Join() {
  return (
    <m.div
      initial={{ x: '100%' }}
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      variants={{
        visible: { x: 0 },
      }}
    >
      <Container maxWidth={'lg'}>
        <Fade in timeout={1500}>
          <Box py={5} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center' }}>
            <Box
              sx={{
                width: { xs: '100%', md: '60%' },
                flex: { xs: 0.2, sm: 0.6, md: 0.6 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <Box
                sx={{
                  color: 'rgb(57,127,183)',
                  width: '100%',
                  textAlign: { xs: 'center', sm: 'center', md: 'center' },
                }}
              >
                <Typography variant="h3" sx={{ fontSize: { xs: 35, sm: 45, md: 60 } }}>
                  Joining our
                </Typography>
                <Typography variant="h3" sx={{ lineHeight: 1, fontSize: { xs: 35, sm: 45, md: 60 } }}>
                  volunteer
                </Typography>
                <Typography variant="h3" sx={{ fontSize: { xs: 35, sm: 45, md: 60 } }}>
                  programs is simple:
                </Typography>
              </Box>
            </Box>
            <Image component="img" src={network} sx={{ flex: { xs: 0.5, sm: 0.3, md: 0.4 } }} />
          </Box>
        </Fade>
      </Container>
    </m.div>
  );
}
