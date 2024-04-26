
import * as React from 'react';
import { Stack, Grid, Typography, Box } from '@mui/material';
import Image from '../../components/Image';
import trust from './catalogue_Pic/trust.png';
import LinkCard from '../../components/catalogue/LinkCard';
import Title from '../../components/catalogue/Title';

const TrustedNgosContent = () => (
    <Box  sx={{ m: { xs: 4, md: 4, sm: 6 }}}>
      <Title text='Supporting Innovation for Impact' sx={{color:"rgb(57,127,183)" ,textAlign:{xs:'center', md:'left'}}} />
      <Typography sx={{ mr: { md: 12 }, my: 5, fontSize: { sm: 25, md: 20, xs: 19 } }}>
      We foster collaborative innovation, empowering social entrepreneurs to turn their ideas into effective projects and drive change. Our platform is a catalyst for the fusion of visionary ideas with dedicated supporters.      
      <ul style={{ paddingTop: 20, marginLeft: 20 }}>
          <li><b>Global Reach:</b>Our platform connects you with supporters, collaborators, and funding opportunities on a global scale.</li>
          <li><b>Networking:</b>Join a vast network of like-minded individuals and organizations passionate about creating change.</li>
        </ul>
      
      </Typography>
      <LinkCard />
    </Box>
  );

export default function TrustedNgos() {
  return (
    <Grid container sx={{ m: 0 }}>
      <Stack spacing={1} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
        <Grid item xs={12} md={6} lg={6} sx={{ mt: { xs: 4 }}}>
          <Image alt={trust} src={trust} />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <TrustedNgosContent />
        </Grid>
      </Stack>
    </Grid>
  );
}

