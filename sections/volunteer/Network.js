import * as React from 'react';
import { Stack, Grid, Card, Typography, Box, Container } from '@mui/material';
import Image from '../../components/Image';
import network from './catalogue_Pic/6.webp';
import Title from '../../components/catalogue/Title';

export default function Network() {
  return (
    <Container maxWidth={'lg'}>
      <Box
        py={5}
        sx={{
          height: { xs: '70vh', md: '70vh' },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            flex: { xs: 0.2, sm: 0.6, md: 0.7 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Title
            text="Explore Our Volunteer Programs"
            sx={{
              color: 'rgb(57,127,183)',
              textAlign: { xs: 'center', sm: 'center', md: 'center' },
            }}
          />
        </Box>
        <Image component="img" src={network} sx={{ flex: { xs: 1, sm: 0.4, md: 0.3 } }} />
      </Box>
    </Container>
  );
}
