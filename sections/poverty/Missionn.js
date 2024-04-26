import * as React from 'react';
import { Stack, Grid, Typography, Box } from '@mui/material';
import Image from '../../components/Image';
import mission from './catalogue_Pic/1.webp';
import LinkCard from '../../components/catalogue/LinkCard';
import Title from '../../components/catalogue/Title';

const Mission = () => (
    <Box sx={{ my: { xs: 4, md: 4, sm: 6 } }}>
      <Title
        text="Our Mission: Eradicating Poverty"
        sx={{ color: 'rgb(57,127,183)', textAlign: { xs: 'center', md: 'left' } }}
      />
      <Typography sx={{ mr: { md: 12 }, my: 5 }}>
        Welcome to our platform where impact meets innovation, and generosity transforms lives. We are dedicated to
        eradicating poverty in India by building a seamless and trusted bridge between NGOs and donors. Join us in
        creating a brighter, more equitable future for those in need.
        <ul style={{ paddingTop: 20, marginLeft: 20 }}>
          <li>
            <b>Our Vision:</b> Building a Strong, Transparent, and Trustworthy Platform
          </li>
          <li>
            <b>Our Mission:</b> Empowering NGOs for Positive Social Change
          </li>
        </ul>
      </Typography>
      {/* <LinkCard /> */}
    </Box>
  );

export default function Missionn() {
  return (
    <Grid container sx={{ m: 0 }}>
      <Stack alignItems="center" direction={{ xs: 'column', md: 'row' }}>
        <Grid item xs={12} md={6} lg={6} sx={{ mt: { xs: 4 } }}>
          <Image alt={mission} src={mission} sx={{ width: { md: '85%' } }} />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Mission />
        </Grid>
      </Stack>
    </Grid>
  );
}
