
import * as React from 'react';
import { Grid, Card, Typography,Container,Box,styled} from '@mui/material';
import Image from '../../components/Image';
import sdg from './catalogue_Pic/sdg.png';
import Title from '../../components/catalogue/Title';

export default function SDG() {
  return (
    <Box sx={{py: 4, px: { xs: 2, sm: 5, md: 10 }  }}>
    <Container >
      <Grid container spacing={1}> 
        <Grid item xs={12} md={6}>
          <Image component="img" src={sdg} alt="power" sx={{width:'100%', height:'100%' ,objectFit:'fill' }} />
        </Grid>
        <Grid item xs={12} md={6}>
            <Title text='CSR Funds for Animal Welfare SDG'  sx={{textAlign:{xs:'center',md:'left'},color:'rgb(57,127,183)'}} />
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
            CSR companies, we offer a diverse pool of verified NGOs with a strong focus on the Animal Welfare Sustainable Development Goal. Partner with us to allocate CSR funds efficiently and make a significant impact.
        </Card>
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
}




