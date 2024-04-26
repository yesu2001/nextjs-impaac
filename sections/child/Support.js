import * as React from 'react';
import { Stack, Grid, Card, Typography,Box,Container} from '@mui/material';
import Image from '../../components/Image';
import how from './catalogue_Pic/how.png';
import Title from '../../components/catalogue/Title';


export default function Support() {
  return (

      <Box py={5}>
      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item xs={12} md={6.5} sx={{ ml: { md: 5 }, my: 5 }}>
            <Title text='How to Support Child Education:' sx={{color:"rgb(57,127,183)" , textAlign:{ xs: 'center' ,sm:'center',md:'left' }}} />
          </Grid>
          <Grid item xs={12} md={5} sx={{ display: 'flex', direction: 'row', justifyContent: 'center', p: { xs: 2 }}}>
            <Image component="img" src={how}  />
          </Grid>
</Grid>
      </Container>
    </Box>
  );
}
