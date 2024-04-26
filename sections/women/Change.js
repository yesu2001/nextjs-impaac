import * as React from 'react';
import { Stack, Grid, Card, Typography,Box,Container} from '@mui/material';
import Image from '../../components/Image';
import change from './catalogue_Pic/change.png';
import Title from '../../components/catalogue/Title';


export default function Change() {
  return (

      <Box py={5}>
      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item xs={12} md={6.5} sx={{ ml: { md: 5 }, my: 5 }}>
            <Title text='Connecting Change Makers' sx={{color:"rgb(57,127,183)" , textAlign:{ xs: 'center' ,sm:'center',md:'left' }}} />
             
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
                For donors seeking to make a difference in the lives of women, we are the ultimate destination. We showcase a myriad of trusted NGOs, making it effortless for you to support the cause that touches your heart. We're the bridge between your compassion and their mission.
                </Typography>
           </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={5} sx={{ display: 'flex', direction: 'row', justifyContent: 'center', p: { xs: 2 }}}>
            <Image component="img" src={change}  />
          </Grid>
</Grid>
      </Container>
    </Box>
  );
}
