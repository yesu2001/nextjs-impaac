
import * as React from 'react';
import { Grid, Card, Typography,Container,Box,styled} from '@mui/material';
import Image from '../../components/Image';
import support from './catalogue_Pic/support.png';
import Title from '../../components/catalogue/Title';

export default function CSRCollab() {
  return (
    <Box sx={{py: 4, px: { xs: 2, sm: 5, md: 10 }  }}>
    <Container >
      <Grid container spacing={1}> 
        <Grid item xs={12} md={6}>
            <Title text='Empowering Young Minds:'  sx={{textAlign:{xs:'center',md:'left'},color:'rgb(57,127,183)'}} />
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
            We believe in nurturing the innate talents and creativity of children. Our initiatives encourage critical thinking, problem-solving, and holistic development, helping them become future leaders and change-makers.
        </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image component="img" src={support} alt="support" sx={{width:'100%', height:'100%' ,objectFit:'fill' }} />
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
}




