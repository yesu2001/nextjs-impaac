
import * as React from 'react';
import { Grid, Card, Typography,Container,Box,styled} from '@mui/material';
import Image from '../../components/Image';
import power from './catalogue_Pic/power.png';
import Title from '../../components/catalogue/Title';

export default function EnvPower() {
  return (
    <Box sx={{py: 4, px: { xs: 2, sm: 5, md: 10 }  }}>
    <Container >
      <Grid container spacing={1}> 
        <Grid item xs={12} md={6}>
            <Title text='The Power of Our Network'  sx={{textAlign:{xs:'center',md:'left'},color:'rgb(57,127,183)'}} />
            <Card
              sx={{
                maxWidth: { md: '450px' },
                p:5,
                borderRadius: '25px',
                backgroundColor: 'rgb(57,127,183)',
                my:4,
                // marginRight:2,
                color: '#ffffff',
                fontSize:19,
                display:'flex',
                flexDirection:'column',
                gap:1
              }}
            >
           Our vast network comprises millions of individuals and organizations actively seeking trusted social entrepreneurs to support. If you're a visionary or a supporter looking to make a positive impact, you've come to the right place.
        </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image component="img" src={power} alt="power" sx={{width:'100%', height:'100%' ,objectFit:'fill' }} />
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
}




