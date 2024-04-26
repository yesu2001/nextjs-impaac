import * as React from 'react';
import { Stack,Box, Typography,Container } from '@mui/material';
import useSettings from '../../hooks/useSettings';
import Image from '../../components/Image';
import social from './catalogue_Pic/social.png';
import HeroTitle from '../../components/catalogue/HeroTitle';


export default function Hero() {
  const { themeStretch } = useSettings();
  return (
    <Box  py={5}>
      <Container maxWidth={themeStretch ? false : 'lg'}>            
        <HeroTitle text="Empowering Social Entrepreneurs: Turning Ideas into Impact" sx={{color:'rgb(57,127,183)' ,textAlign:{ xs: 'center', sm: 'center', md: 'left' } }} />
      <Box  sx={{display:'flex', justifyContent:'right' , alignItems:'right'}}>
        <Image alt={social} src={social} />
        </Box>
      </Container>
    </Box>
  );
}
