// import * as React from 'react';
// import { Stack, Grid, Card, Typography, Container,Box } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import Image from '../../components/Image';
// import benifits11 from './catalogue_Pic/benifits11.png';
// import benifits22 from './catalogue_Pic/benefits22.png';
// import benifits3 from './catalogue_Pic/benefit3.png';
// import LinkCard from '../../components/catalogue/LinkCard';

// const GridBox = styled(Grid)(() => ({
//   display: 'flex',
//   direction: 'row',
//   justifyContent: 'center',
// }));


// export default function CatalogueService() {
//   return (

// <Container maxWidth={'xl'} sx={{ py: 8 , background:'#EDEBEB'}}>
//       <Typography variant='h2' color='rgb(57,127,183)' textAlign='center'>Benefits Of Collabration</Typography>
//       <Grid container sx={{ mx: { sm: 6, md: 0 }, my: {xs:4 ,sm: 8, md: 2 } }} spacing={4} alignItems="start">
//         <GridBox item xs={12} md={4} sx={{ pl: { sm: 3 }, display: 'flex', flexDirection: 'column' }}>
//           <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-start">
// <div style={{ height: '50px', width: '50px' }}>
//               <Image component="img" src={benifits11} />
//             </div>
//             <Typography sx={{ fontSize: { md: 22, xs: 20, sm: 28 }, fontWeight: 700 }} color="rgb(57,127,183)">
//               Get access to Top NGOs
//             </Typography>
//           </Stack>
//           <Stack>
//             <Typography sx={{ fontSize: { md: 18, xs: 15, sm: 22 }, width: { sm: '80%', md: '100%' },pl:7 }}>
// Benefits of Collaboration Partnering with 1000+ NGOs Working in Various SDGs
//             </Typography>
//           </Stack>
//         </GridBox>

//         <GridBox item xs={12} md={4} sx={{ pl: { sm: 3 }, display: 'flex', flexDirection: 'column' }}>
//           <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-start">
//             <div style={{ height: '50px', width: '50px' }}>
//               <Image component="img" src={benifits22} />
//             </div>
// <Typography sx={{ fontSize: { md: 22, xs: 20, sm: 28 }, fontWeight: 700 }} color="rgb(57,127,183)"> Create an impact
//             </Typography>
//           </Stack>
//           <Stack sx={{ m: { xs: 2 } }}>
//             <Typography sx={{ fontSize: { md: 18, xs: 15, sm: 22 }, width: { sm: '80%', md: '100%' },pl:5  }}>
//               Showcasing Your Social Volunteering Impact through NGOs' Work,Showcasing Your Social Volunteering Impact
//               through NGOs' Work
//             </Typography>
// </Stack>
//         </GridBox>

//         <GridBox item xs={12} md={4} sx={{ pl: { sm: 3 }, display: 'flex', flexDirection: 'column' }}>
//           <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-start">
//             <div style={{ height: '50px', width: '50px' }}>
//               <Image component="img" src={benifits3} />
//             </div>
//             <Typography sx={{ fontSize: { md: 22, xs: 20, sm: 28 }, fontWeight: 700 }} color="rgb(57,127,183)">
// Get socially recognized
//             </Typography>
//           </Stack>
//           <Stack sx={{ m: { xs: 2 } }}>
//             <Typography sx={{ fontSize: { md: 18, xs: 15, sm: 22 }, width: { sm: '80%', md: '100%' } ,pl:6 }}>
//               Uplifting Communities and Making a Meaningful Difference
//             </Typography>
//           </Stack>
//         </GridBox>
        
//         <GridBox item xs={12} md={4} sx={{ pl: { sm: 3 }, display: 'flex', flexDirection: 'column' }}>
//           <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-start">
//             <div style={{ height: '50px', width: '50px' }}>
//               <Image component="img" src={benifits3} />
//             </div>
//             <Typography sx={{ fontSize: { md: 22, xs: 20, sm: 28 }, fontWeight: 700 }} color="rgb(57,127,183)">
// Get socially recognized
//             </Typography>
//           </Stack>
//           <Stack sx={{ m: { xs: 2 } }}>
//             <Typography sx={{ fontSize: { md: 18, xs: 15, sm: 22 }, width: { sm: '80%', md: '100%' } ,pl:6 }}>
//               Uplifting Communities and Making a Meaningful Difference
//             </Typography>
//           </Stack>
//         </GridBox>
        
//         <GridBox item xs={12} md={4} sx={{ pl: { sm: 3 }, display: 'flex', flexDirection: 'column' }}>
//           <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-start">
//             <div style={{ height: '50px', width: '50px' }}>
//               <Image component="img" src={benifits3} />
//             </div>
//             <Typography sx={{ fontSize: { md: 22, xs: 20, sm: 28 }, fontWeight: 700 }} color="rgb(57,127,183)">
// Get socially recognized
//             </Typography>
//           </Stack>
//           <Stack sx={{ m: { xs: 2 } }}>
//             <Typography sx={{ fontSize: { md: 18, xs: 15, sm: 22 }, width: { sm: '80%', md: '100%' } ,pl:6}}>
//               Uplifting Communities and Making a Meaningful Difference
//             </Typography>
//           </Stack>
//         </GridBox>
        
//         <GridBox item xs={12} md={4} sx={{ pl: { sm: 3 }, display: 'flex', flexDirection: 'column' }}>
//           <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-start">
//             <div style={{ height: '50px', width: '50px' }}>
//               <Image component="img" src={benifits3} />
//             </div>
//             <Typography sx={{ fontSize: { md: 22, xs: 20, sm: 28 }, fontWeight: 700 }} color="rgb(57,127,183)">
// Get socially recognized
//             </Typography>
//           </Stack>
//           <Stack sx={{ m: { xs: 2 } }}>
//             <Typography sx={{ fontSize: { md: 18, xs: 15, sm: 22 }, width: { sm: '80%', md: '100%' } ,pl:6 }}>
//               Uplifting Communities and Making a Meaningful Difference
//             </Typography>
//           </Stack>
//         </GridBox>
//       </Grid>
//       <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>
//          <LinkCard />
//  </Box>

//     </Container>
//   );
// }

// // // -----------------------------------------------------------------------------

import React from 'react';
import { Container,Grid, Box} from '@mui/material';
import BenefitCard from '../../components/catalogue/BenefitCard';
import LinkCard from '../../components/catalogue/LinkCard';
import Title from '../../components/catalogue/Title';
import benifits11 from './catalogue_Pic/benifits11.png';
import benifits22 from './catalogue_Pic/benefits22.png';
import benifits3 from './catalogue_Pic/benefit3.png';

const benefitsData = [
  {
    title: 'Get access to Top NGOs',
    description: 'Benefits of Collaboration Partnering with 1000+ NGOs Working in Various SDGs',
    imageSrc: benifits11, 

  },
  {
    title: 'Create an impact',
    description: 'Showcasing Your Social Volunteering Impact through NGOs\' Work,Showcasing Your Social Volunteering Impact through NGOs\' Work',
    imageSrc: benifits22, 

  },
  {
    title: 'Get socially recognized',
    description: 'Uplifting Communities and Making a Meaningful Difference',
    imageSrc: benifits3, 

  },
];

export default function CatalogueService() {
  return (
    <Container maxWidth={'xl'} sx={{ py: 8, background: '#EDEBEB' }}>
      <Title text='Benefits Of Collaboration' sx={{color:'rgb(57,127,183)' , textAlign:'center'}} />
      <Grid container sx={{ mx: { sm: 6, md: 0 }, my: { xs: 4, sm: 8, md: 2 } }} spacing={4} alignItems="start">
        {benefitsData.map((benefit, index) => (
          <BenefitCard key={index} title={benefit.title} description={benefit.description} imageSrc={benefit.imageSrc} />
        ))}
      </Grid>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <LinkCard />
      </Box>
    </Container>
  );
}



