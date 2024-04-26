import * as React from 'react';
import { Stack, Grid, Typography, Box } from '@mui/material';
import Image from '../../components/Image';
import mission from './catalogue_Pic/11.png';
import LinkCard from '../../components/catalogue/LinkCard';
import Title from '../../components/catalogue/Title';

const Mission = () => (
  <Box sx={{ my: { xs: 4, md: 4, sm: 6 } }}>
    <Title
      text="Our Mission: Healthier India"
      sx={{ color: 'rgb(57,127,183)', textAlign: { xs: 'center', md: 'left' } }}
    />
    <Typography sx={{ mr: { md: 12 }, my: 5 }}>
      At Impaac Foundation, we recognize the critical importance of accessible healthcare in building a healthier and
      more resilient India. Our Healthcare and Medical Access programs aim to bridge gaps in healthcare services,
      ensuring that individuals and communities receive the care they deserve. By focusing on preventive measures,
      treatment accessibility, and health education, we strive to contribute to a robust healthcare system for all.
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
        <Grid item xs={12} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 4 } }}>
          <Image alt={mission} src={mission} sx={{ width: '85%' }} />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Mission />
        </Grid>
      </Stack>
    </Grid>
  );
}
