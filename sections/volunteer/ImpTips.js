
import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Grid, Stack ,Container} from '@mui/material';
import imp from './catalogue_Pic/imp.png';
import Image from '../../components/Image';
import Title from '../../components/catalogue/Title';

const ContentStyle = styled('Typography')(({ theme }) => ({
  color: 'rgb(57,127,183)',
  fontSize: 17,
  [theme.breakpoints.down('md')]: {
    fontSize: 21,
  },
}));

const textStyle = {
  color: 'rgb(57,127,183)',
  fontSize: '25px',
  fontWeight:600,
};

const ReasonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  flex: 0.5,
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    flex: 0.5,
  },
}));

const reasons = [
  {
    title: 'Relate to yourself last',
    content:
      "Show the audience that you yourself relate to the social cause, that's how they'll get inspired and support the respective NGO.",
  },
  {
    title: "Don't forget to include CTA",
    content:
      'Include the next actionable step for the audience which is directing them to click on the campaign link or add the QR Code and know more about the NGO.',
  },
  {
    title: 'Use #impaacfoundation',
    content:
      'While sharing about the campaign, use our common hashtag #impaacfoundation along with inviting us as a collaborator.',
  },
];

export default function ImpTips() {
  return (

      <Box py={5}>
      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} sx={{ ml: { md: 5 } }}>
             
          <Image alt={imp} src={imp} />
           <Title text='Important Tips' sx={{color:"rgb(57,127,183)" , textAlign:"center"}} />
            
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
               <Stack spacing={10} mt={13} sx={{ml:{xs:2 , md:10}}}>

          {reasons.map((reason, index) => (
               <ReasonBox key={index}>
                 <Box flex={1}>
                   <Typography variant="h6" style={textStyle}>
                     {reason.title}
                   </Typography>

                   <ContentStyle>{reason.content}</ContentStyle>
                 </Box>
               </ReasonBox>
             ))}
             </Stack>
          </Grid>
</Grid>
      </Container>
    </Box>
  );
}
