import * as React from 'react';
import { Stack,Box, Typography,Container } from '@mui/material';
import useSettings from '../../hooks/useSettings';
import Image from '../../components/Image';
import women from './catalogue_Pic/women.png';
import HeroTitle from '../../components/catalogue/HeroTitle';


export default function Hero() {
  const { themeStretch } = useSettings();
  return (
    <Box  py={5}>
      <Container maxWidth={themeStretch ? false : 'lg'}>            
        <HeroTitle text="Empowering Women: Unleashing Potential" sx={{color:'rgb(57,127,183)' ,textAlign:{ xs: 'center', sm: 'center', md: 'left' } }} />
      <Box mt={8}>
        <Image alt={women} src={women} />
        </Box>
      </Container>
    </Box>
  );
}
