import * as React from 'react';
import { Typography, Container,Box } from '@mui/material';
import LinkCard from '../../components/catalogue/LinkCard';
import Title from '../../components/catalogue/Title';


export default function AboutCollabration() {
  return (
    <Container maxWidth={'lg'} sx={{p:5}}>
      <Title text='About Collaboration'sx={{ textAlign:'center', color:'rgb(57,127,183)'}} />
        <Box mb={3}>
          <Typography sx={{fontSize:{sm:25, md:19, xs:19}, mt:5 ,mx:{sm:4,xs:2}}} lineHeight={1.7}>
          <ul>
          <li>Feature the remarkable work of NGOs on your social media platform </li>
          <li>Cover diverse areas like animal welfare, education, women empowerment, environmental sustainability etc</li>
          <li>Tag @IMPAACIDEA in your reels/image creatives or stories </li>
          <li>Repost & empower the impactful initiatives</li>
</ul>
</Typography>
        </Box>
     <LinkCard />
    </Container>
  );
}


