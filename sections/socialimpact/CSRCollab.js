
import * as React from 'react';
import { Stack, Grid, Typography, Box } from '@mui/material';
import Image from '../../components/Image';
import collab from './catalogue_Pic/collab.png';
import LinkCard from '../../components/catalogue/LinkCard';
import Title from '../../components/catalogue/Title';

const CSRCollabWomen = () => (
    <Box  sx={{ m: { xs: 4, md: 4, sm: 6 }}}>
      <Title text='A Network of Collaboration' sx={{color:"rgb(57,127,183)" ,textAlign:{xs:'center', md:'left'}}} />
      <Typography sx={{ mr: { md: 12 }, my: 5, fontSize: { sm: 25, md: 20, xs: 19 } }}>
      Our vast network comprises millions of individuals and organizations actively seeking trusted social entrepreneurs to support. If you're a visionary or a supporter looking to make a positive impact, you've come to the right place.      
      <ul style={{ paddingTop: 20, marginLeft: 20 }}>
          <li><b>Inspiration in Action: </b> Discover visionary projects and social entrepreneurs dedicated to addressing social issues.</li>
          <li><b>Effortless Giving:</b> Easily support the projects and ideas that inspire you, knowing that your contributions are making a real impact.</li>
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
          <Image alt={collab} src={collab} />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <CSRCollabWomen />
        </Grid>
      </Stack>
    </Grid>
  );
}

