import * as React from 'react';
import { Stack, Grid, Card, Typography,Box,Container} from '@mui/material';
import Image from '../../components/Image';
import ourpurpose1 from './catalogue_Pic/ourpurpose1.png';
import Title from '../../components/catalogue/Title';


export default function CatalogueAboutUs2() {
  return (

      <Box sx={{ background: '#EDEBEB' }}>
      <Container maxWidth={'lg'}>
        <Grid container  py={10}>
          <Grid item xs={12} md={6} sx={{ ml: { md: 5 }, my: 5 }}>
            <Title text='Our Purpose' sx={{color:"rgb(57,127,183)" , textAlign:{ xs: 'center' ,sm:'center',md:'left' }}} />
             
            <Card
              sx={{
                maxWidth: { md: '490px' },
                px: 5,
                py: 5,
                borderRadius: '25px',
                backgroundColor: 'rgb(57,127,183)',
                marginTop: 3,
                // mx: { sm: 4 },
              }}
            >
              <Stack spacing={2} color="#ffffff">
                <Typography sx={{ fontSize: { sm: 30, md: 22, xs: 20 } }}>
                <ul>
                  <li>Facilitating Social Volunteering Partnerships with Impactful NGOs</li>
                  <li>Expanding Global Reach and Recognition for Associated NGOs</li>
                  <li>Strengthening Social Media Influencer's Positive Impact</li> 
                  </ul>
                </Typography>
           </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={5} sx={{ display: 'flex', direction: 'row', justifyContent: 'center', p: { xs: 2 } }}>
            <Image component="img" src={ourpurpose1 } />
          </Grid>
</Grid>
      </Container>
    </Box>
  );
}
