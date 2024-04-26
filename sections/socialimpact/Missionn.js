
import * as React from 'react';
import { Stack, Grid, Typography, Box } from '@mui/material';
import Image from '../../components/Image';
import mission from './catalogue_Pic/mission.png';
import LinkCard from '../../components/catalogue/LinkCard';
import Title from '../../components/catalogue/Title';

const Mission = () => (
    <Box sx={{ m: { xs: 4, md: 4, sm: 6 }}}>
      <Title text='Our Mission: Fostering Social Entrepreneurship for Change' sx={{color:"rgb(57,127,183)" ,textAlign:{xs:'center', md:'left'}}} />
      <Typography sx={{ mr: { md: 12 }, my: 5, fontSize: { sm: 25, md: 20, xs: 19 } }}>
      At Impaac Foundation, our mission is to empower social entrepreneurs, providing a platform to turn innovative ideas into tangible impact. We support visionary individuals and organizations dedicated to creating positive change in society.
        <ul style={{ paddingTop: 20, marginLeft: 20 }}>
          <li><b>Our Vision:</b> Building a Strong, Transparent, and Trustworthy Platform</li>
          <li><b>Our Mission:</b> Empowering NGOs for Positive Social Change</li>
        </ul>
      </Typography>
      <LinkCard />
    </Box>
  );

export default function Missionn() {
  return (
    <Grid container sx={{ m: 0 }}>
      <Stack spacing={1} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
        <Grid item xs={12} md={6} lg={6} sx={{ mt: { xs: 4 }}}>
          <Image alt={mission} src={mission} />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Mission />
        </Grid>
      </Stack>
    </Grid>
  );
}

