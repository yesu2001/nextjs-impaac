import * as React from 'react';
import { Stack, Grid, Card, Typography,Box,Container} from '@mui/material';
import Image from '../../components/Image';
import network from './catalogue_Pic/network.png';
import Title from '../../components/catalogue/Title';


export default function Network() {
  return (

      <Box py={5}>
      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item xs={12} md={5} sx={{ ml: { md: 5 }, my: 5 }}>
            <Title text='A Network of Trustworthy NGOs' sx={{color:"rgb(57,127,183)" , textAlign:{ xs: 'center' ,sm:'center',md:'left' }}} />
             
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
                We unite with NGOs dedicated to women's empowerment, whether it's education, healthcare, economic opportunities, or gender equality. Our platform is home to trusted entities, working passionately on a global and Indian stage.
                </Typography>
           </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', direction: 'row', justifyContent: 'center', p: { xs: 2 } }}>
            <Image component="img" src={network} />
          </Grid>
</Grid>
      </Container>
    </Box>
  );
}
