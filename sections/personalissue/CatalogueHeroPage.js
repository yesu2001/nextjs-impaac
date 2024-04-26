import * as React from 'react';
import { Stack, Card, Box, Typography,Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import star from './catalogue_Pic/star.jpg';
import useSettings from '../../hooks/useSettings';
import Title from '../../components/catalogue/Title';


const CustomButton = styled(Button)(() => ({
  fontSize: '20px',
  color: '#ffffff',
  backgroundColor: 'rgb(57,127,183)',
  borderRadius: '45px',
  marginTop: '20px',
  paddingRight: '20px',
  paddingLeft: '20px',

  '&:hover': {
    background: 'rgb(57,127,183)',
    color: '#FFF',
  },
}));

export default function CatalogueHeroPage() {
  const { themeStretch } = useSettings();
  return (
    <Box sx={{ background:'rgb(57,127,183)'}} py={9}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        {/* <Box  sx={{color:'#ffffff' ,textAlign:{xs:'center', sm:'center' , md:'left'}, width:{md:'70%'}}}>
          <Typography variant='h1'>Collabration With Social Media Influencers  </Typography>
          </Box> */}
                   
        <Title text="Collaboration With Social Media Influencers" sx={{color:"#ffffff" ,textAlign:{ xs: 'center', sm: 'center', md: 'left' } ,width:{ md: '70%' }}} />

                <Card sx={{ p: 5, my: 5, borderRadius: 6 , width: {xs:'100%' ,sm:'100%' , md:'50%'}}}>
                  <Stack
                    spacing={3}
                    direction={{ xs: 'column', md: 'row' }}
                    alignItems="center"
                    justifyContent="center"
                    
                  >
                    <Typography sx={{fontSize:{sm:25, md:17, xs:19}}}flex={0.9}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  
                    </Typography>
                    <CustomButton>Read More</CustomButton>
                  </Stack>
                </Card>
        
      </Container>
    </Box>
  );
}
