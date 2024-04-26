
import * as React from 'react';
import { Stack, Grid, Typography, Box } from '@mui/material';
import Image from '../../components/Image';
import trust from './catalogue_Pic/trust.png';
import LinkCard from '../../components/catalogue/LinkCard';
import Title from '../../components/catalogue/Title';

const EnvTrustedNgosContent = () => (
    <Box  sx={{ m: { xs: 4, md: 4, sm: 6 }}}>
      <Title text='Thousands of Trusted NGOs Awaiting Your Support' sx={{color:"rgb(57,127,183)" ,textAlign:{xs:'center', md:'left'}}} />
      <Typography sx={{ mr: { md: 12 }, my: 5, fontSize: { sm: 25, md: 20, xs: 19 } }}>
      IIndividuals, you'll find thousands of dedicated NGOs on our platform, each with a unique mission for environmental sustainability. Join us in making the world a greener and cleaner place.
      
      <ul style={{ paddingTop: 20, marginLeft: 20 }}>
          <li><b>Empower with Ease:</b> Discover a vast network of trusted NGOs, each with a unique mission for environmental sustainability.</li>
          <li><b>Effortless Giving:</b> Easily support the causes closest to your heart, knowing that your donations are making a real impact.</li>
        </ul>
      
      </Typography>
      <LinkCard />
    </Box>
  );

export default function EnvTrustedNgos() {
  return (
    <Grid container sx={{ m: 0 }}>
      <Stack spacing={1} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
        <Grid item xs={12} md={6} lg={6} sx={{ mt: { xs: 4 }}}>
          <Image alt={trust} src={trust} />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <EnvTrustedNgosContent />
        </Grid>
      </Stack>
    </Grid>
  );
}

