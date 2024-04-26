import * as React from 'react';
import { Stack, Grid, Card, Typography,Box,Container} from '@mui/material';
import Image from '../../components/Image';
import tax1 from './catalogue_Pic/tax1.png';
import Title from '../../components/catalogue/Title';


export default function TaxBenefits() {
  return (

      <Box py={5}>
      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item xs={12} md={5} sx={{ ml: { md: 5 }, my:4 }}>
            <Title text='Supporting Innovation for Impact' sx={{color:"rgb(57,127,183)" , textAlign:{ xs: 'center' ,sm:'center',md:'left' }, mb:3}} />
             
            
              <Stack spacing={1}>
                <Typography sx={{ fontSize: { sm: 30, md: 20, xs: 20 }}}>
                We foster collaborative innovation, empowering social entrepreneurs to turn their ideas into effective projects and drive change. Our platform is a catalyst for the fusion of visionary ideas with dedicated supporters.
                </Typography>
           </Stack>
            
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', direction: 'row', justifyContent: 'center', p: { xs: 2 } , width:'350px' ,height:'350px'}}>
            <Image component="img" src={tax1} />
          </Grid>
</Grid>
      </Container>
    </Box>
  );
}
