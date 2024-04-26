
import * as React from 'react';
import { Stack, Grid, Typography, Box } from '@mui/material';
import Image from '../../components/Image';
import mission from './catalogue_Pic/mission.png';
import LinkCard from '../../components/catalogue/LinkCard';
import Title from '../../components/catalogue/Title';

const Mission = () => (
    <Box sx={{ m: { xs: 4, md: 5, sm: 6 }}}>
      <Title text='CSR Funds for Environmental Sustainability SDG' sx={{color:"rgb(57,127,183)" ,textAlign:{xs:'center', md:'left'}}} />
      <Typography sx={{ mr: { md: 12 }, my: 5, fontSize: { sm: 25, md: 20, xs: 19 } }}>
      CSR companies, we offer a diverse pool of verified NGOs with a strong focus on the Environmental Sustainability Sustainable Development Goal. Partner with us to allocate CSR funds efficiently and make a significant impact

        <ul style={{ paddingTop: 20, marginLeft: 20 }}>
          <li><b> Verified NGOs:</b> We offer a wide selection of verified NGOs with a strong focus on the Environmental Sustainability Sustainable Development Goal.</li>
          <li><b>Efficient Fund Allocation: </b>Partner with us to allocate your CSR funds effectively and contribute to meaningful change.</li>
        </ul>
      </Typography>
      <LinkCard />
    </Box>
  );

export default function Missionn() {
  return (
    <Grid container sx={{ m: 0 }}>
      <Stack spacing={1} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
        <Grid item xs={12} md={8} lg={6}>
          <Mission />
        </Grid>
        <Grid item xs={12} md={4} lg={6} sx={{ mt: { xs: 4 }}}>
          <Image alt={mission} src={mission} />
        </Grid>
      </Stack>
    </Grid>
  );
}

