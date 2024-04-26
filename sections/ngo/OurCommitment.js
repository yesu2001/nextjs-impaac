

import * as React from 'react';
import { Typography, Container,Box } from '@mui/material';
import LinkCard from '../../components/catalogue/LinkCard';
import Title from '../../components/catalogue/Title';


export default function AboutCollabration() {
  return (
    <Container maxWidth={'lg'} sx={{py:7, mb:8}}>
      <Title text='Our' sx={{textAlign:'center',color:'rgb(57,127,183)'}} />
      <Title text='Commitment' sx={{textAlign:'center',color:'rgb(57,127,183)'}} />

        <Box mb={4}>
          <Typography sx={{fontSize:{sm:25, md:19, xs:19}, mt:6 ,mx:{sm:4,xs:2}}} lineHeight={1.7}>
        <li>Reiterating Our Pledge to Empower Social Media Influencers </li>

       <li>Standing upon the trust, transparency & our values to empower NGOs </li>

       <li>Respecting & nourishing the audience & viewers for instilling social awareness</li>
          </Typography>
        </Box>
     <LinkCard />
    </Container>
  );
}


