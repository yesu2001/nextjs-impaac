
import * as React from 'react';
import { Stack, Grid, Typography, Box } from '@mui/material';
import Image from '../../components/Image';
import csr from './catalogue_Pic/csr.png';
import LinkCard from '../../components/catalogue/LinkCard';
import Title from '../../components/catalogue/Title';

const CSRCollabWomen = () => (
    <Box  sx={{ m: { xs: 4, md: 4, sm: 6 }}}>
      <Title text='Empowering NGOs through CSR Collaborations' sx={{color:"rgb(57,127,183)" ,textAlign:{xs:'center', md:'left'}}} />
      <Typography sx={{ mr: { md: 12 }, my: 5, fontSize: { sm: 25, md: 20, xs: 19 } }}>
      We are proud to present many CSR companies that collaborate with Impaac Foundation, extending their support to NGOs. These partnerships channel resources where they're needed most.
      
      <ul style={{ paddingTop: 20, marginLeft: 20 }}>
          <li><b>CSR Partnerships:</b> We are proud to present many CSR companies that collaborate with Impaac Foundation, extending their support to NGOs. These partnerships channel resources where they're needed most.</li>
          <li><b>Access to Millions:</b> Join our network to gain access to millions of potential donors and volunteers eager to support your cause.</li>
        </ul>
      
      </Typography>
      <LinkCard />
    </Box>
  );

export default function CSRCollab() {
  return (
    <Grid container sx={{ m: 0 }}>
      <Stack spacing={1} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
        <Grid item xs={12} md={6} lg={6} sx={{ mt: { xs: 4 }}}>
          <Image alt={csr} src={csr} />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <CSRCollabWomen />
        </Grid>
      </Stack>
    </Grid>
  );
}

