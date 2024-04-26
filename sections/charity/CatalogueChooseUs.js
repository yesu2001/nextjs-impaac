// import React from 'react';
// import { styled } from '@mui/material/styles';
// import { Box, Typography, Link, Grid, Stack } from '@mui/material';
// import tips from './catalogue_Pic/tips.png';
// import Image from '../../components/Image';

// const ContentStyle = styled('Typography')(({ theme }) => ({
//   color: '#ffffff',
//   fontSize:17,
//   [theme.breakpoints.down('md')]: {
//     fontSize:21,
//   },
// }));

// const textStyle = {
//   color: '#ffffff',
//   fontSize: '25px',
// };

// const ReasonBox = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   flexDirection: 'column',
//   flex:0.5,
//   [theme.breakpoints.up('md')]: {
//     flexDirection: 'row',
//     flex:0.5,
//   },
// }));

// export default function CatalogueChooseUs() {
//   return (
//     <Box sx={{ background: 'rgb(57,127,183)' ,p:5}}>
//       <Grid container spacing={10} paddingBottom="30px">
//         <Grid item xs={12} sm={12} md={6} lg={6}>

//           <Image alt={tips} src={tips}/>
//             <Typography variant='h2' color='#ffffff' textAlign='center' mt={2}>Important Tips</Typography>
//         </Grid>

//         <Grid item xs={12} sm={12} md={6} lg={6}>
//           <Stack spacing={8}>
//             <ReasonBox>
//               <Box  flex={0.5}>
//                 <Typography variant="h6" style={textStyle}>
//                 Relate to yourself first
//                 </Typography>

//                 <ContentStyle>
//                 Show the audience that you yourself relate to the social cause, that's how they'll get inspired and support the respective NGO.
//                 </ContentStyle>
//               </Box>
//             </ReasonBox>

//             <ReasonBox>
//               <Box flex={0.5}>
//                 <Typography variant="h6" style={textStyle}>
//                 Don't forget to include CTA
//                 </Typography>

//                 <ContentStyle>
//                 Include the next actionable step for the audience which is directing them to click on the campaign link or add the QR Code and know more about the NGO.
//                 </ContentStyle>
//               </Box>
//             </ReasonBox>

//             <ReasonBox>
//               <Box flex={0.5}>
//                 <Typography variant="h6" style={textStyle}>
//                 Use #impaacfoundation 
//                 </Typography>

//                 <ContentStyle>
//                 While sharing about the campaign, use our common hashtag #impaacfoundation alongwith inviting us as a collaborator 
//                 </ContentStyle>
//               </Box>
//             </ReasonBox>
//           </Stack>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Grid, Stack } from '@mui/material';
import tips from './catalogue_Pic/tips.png';
import Image from '../../components/Image';
import Title from '../../components/catalogue/Title';

const ContentStyle = styled('Typography')(({ theme }) => ({
  color: '#ffffff',
  fontSize: 17,
  [theme.breakpoints.down('md')]: {
    fontSize: 21,
  },
}));

const textStyle = {
  color: '#ffffff',
  fontSize: '25px',
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
    title: 'Relate to yourself first',
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

export default function CatalogueChooseUs() {
  return (
    <Box sx={{ background: 'rgb(57,127,183)', p: 5 }}>
      <Grid container spacing={10} paddingBottom="30px">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Image alt={tips} src={tips} />
          <Title text='Important Tips' sx={{color:"#ffffff" , textAlign:"center" , mt:2}} />
           
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Stack spacing={8}>
            {reasons.map((reason, index) => (
              <ReasonBox key={index}>
                <Box flex={0.5}>
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
    </Box>
  );
}
