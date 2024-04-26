import * as React from 'react';
import { Stack, Grid, Typography, Box } from '@mui/material';
import Image from '../../components/Image';
import mission from './cataloguePics/12.png';
import LinkCard from '../../components/catalogue/LinkCard';
import Title from '../../components/catalogue/Title';

const Mission = () => (
    <Box sx={{ my: { xs: 4, md: 4, sm: 6 } }}>
      <Title
        text="Our Commitment to Disaster Relief:"
        sx={{ color: 'rgb(57,127,183)', textAlign: { xs: 'center', md: 'left' } }}
      />
      <Typography sx={{ mr: { md: 12 }, my: 5 }}>
        We act swiftly in the aftermath of disasters, providing essential supplies such as food, clean water, shelter,
        and medical assistance to those affected. Our goal is to address the immediate needs of survivors and offer a
        lifeline during their most challenging moments. We believe in proactive measures to mitigate the impact of
        future disasters. Our initiatives include community training programs, disaster preparedness drills, and the
        establishment of early warning systems.
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
          <Image alt={mission} src={mission} sx={{ width: { md: '90%' } }} />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Mission />
        </Grid>
      </Stack>
    </Grid>
  );
}
