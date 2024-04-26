import * as React from 'react';
import { Stack, Grid, Card, Typography,Box,Container} from '@mui/material';
import Image from '../../components/Image';
import verify from './catalogue_Pic/verify.png';
import Title from '../../components/catalogue/Title';


export default function Change() {
  return (

      <Box py={5}>
      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item xs={12} md={6.5} sx={{ ml: { md: 5 }, my: 5 }}>
            <Title text='Quality Education for All:' sx={{color:"rgb(57,127,183)" , textAlign:{ xs: 'center' ,sm:'center',md:'left' }}} />
             
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
                We are dedicated to ensuring that every child has access to quality education. Our programs focus on improving school infrastructure, providing scholarships, and enhancing digital literacy to bridge educational gaps.
                </Typography>
           </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={5} sx={{ display: 'flex', direction: 'row', justifyContent: 'center', p: { xs: 2 }}}>
            <Image component="img" src={verify}  />
          </Grid>
</Grid>
      </Container>
    </Box>
  );
}
