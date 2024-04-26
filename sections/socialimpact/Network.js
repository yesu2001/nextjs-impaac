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
            <Title text='A Network of Visionaries' sx={{color:"rgb(57,127,183)" , textAlign:{ xs: 'center' ,sm:'center',md:'left' }}} />
             
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
                We unite with social entrepreneurs who are passionate about addressing social issues, whether it's education, environmental sustainability, healthcare, poverty alleviation, or any other transformative idea. Our platform is a home to trusted individuals and organizations, working passionately to bring change.
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
