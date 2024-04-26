import * as React from 'react';
import { Stack, Grid, Typography, Box } from '@mui/material';
import Image from '../../components/Image';
import mission from './catalogue_Pic/mission.png';
import LinkCard from '../../components/catalogue/LinkCard';
import Title from '../../components/catalogue/Title';

const Mission = () => (
    <Box sx={{ my: { xs: 4, md: 4, sm: 6 } }}>
      <Title text="Our Approach to CSR:" sx={{ color: 'rgb(57,127,183)', textAlign: { xs: 'center', md: 'left' } }} />
      <Typography sx={{ mr: { md: 12 }, my: 5 }}>
        At Impaac Foundation, we believe that businesses play a crucial role in shaping a better world. Our Corporate
        Social Responsibility (CSR) programs offer a meaningful avenue for companies to contribute to social
        development, environmental sustainability, and community well-being. By partnering with us, your organization
        can make a positive impact, leaving a lasting legacy that extends beyond profit margins.
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
          <Image alt={mission} src={mission} sx={{ width: { md: '85%' } }} />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Mission />
        </Grid>
      </Stack>
    </Grid>
  );
}
