
import * as React from 'react';
import { Grid, Card, Typography,Container,Box,styled} from '@mui/material';
import Image from '../../components/Image';
import nature1 from './catalogue_Pic/nature1.jpg';
import Title from '../../components/catalogue/Title';

export default function SocialVolunteering() {
  return (
    <Box sx={{py: 4, px: { xs: 2, sm: 5, md: 10 }  }}>
    <Container >
      <Grid container spacing={1}> 
        <Grid item xs={12} md={6}>
            <Title text='How You Can Empower Social Volunteering'  sx={{textAlign:{xs:'center',md:'left'},color:'rgb(57,127,183)'}} />
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
            <ul>
                <li>Connecting with NGOs to Choose Causes Close to Your Heart </li>
                <li>Creating Awareness through Your Platform </li>
                 <li>Encouraging Support and Contributions</li>
                 <li>Connecting with NGOs to Choose Causes Close to Your Heart </li>
                <li>Creating Awareness through Your Platform </li>
                 <li>Encouraging Support and Contributions</li>
                 </ul>
        </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image component="img" src={nature1} alt="nature1" sx={{width:'100%', height:'100%' ,objectFit:'fill' }} />
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
}




