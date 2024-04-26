
import * as React from 'react';
import { Stack, Grid, Card, Typography,Box,Container} from '@mui/material';
import Image from '../../components/Image';
import reward from './catalogue_Pic/reward.png';
import Title from '../../components/catalogue/Title';


export default function RewardAndCertificate() {
  return (

      <Box sx={{ background: '#EDEBEB' ,py:3}}>
      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ ml: { md: 5 }}}>
            <Title text=' Reward And Certificate' sx={{ textAlign: { xs: 'center' }, mb:3,color:"rgb(57,127,183)"}} />
            <Card
              sx={{
                maxWidth: { md: '430px' },
                px: 5,
                py: 5,
                borderRadius: '25px',
                backgroundColor: 'rgb(57,127,183)',
                marginTop: 3,
                mx: { sm: 4 },
              }}
            >
              <Stack spacing={2} color="#ffffff">
                <Typography sx={{ fontSize: { sm: 25, md: 20, xs: 20 } }}>
                <ul>
                <li>Best Influencer of the month </li>
               <li>Exclusive Networking Opportunities </li>
              <li>Gift vouchers/products</li>
              </ul>
                </Typography>
           </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={5} sx={{ display: 'flex', direction: 'row', justifyContent: 'center', }}>
            <Image component="img" src={reward} />
          </Grid>
</Grid>
      </Container>
    </Box>
  );
}
