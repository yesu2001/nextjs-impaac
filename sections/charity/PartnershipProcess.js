
// import React from 'react';
// import { Box, Grid, Stack, Typography } from '@mui/material';
// import Card from '@mui/material/Card';
// import { styled } from '@mui/material/styles';
// import Image from '../../components/Image';
// import star from './catalogue_Pic/star.jpg';
// import nature1 from './catalogue_Pic/nature1.jpg';
// import nature2 from './catalogue_Pic/nature2.jpg';
// import nature3 from './catalogue_Pic/nature3.jpg';

// const CustomCard = styled(Card)(({ theme }) => ({
//   boxShadow: theme.customShadows.z8,
//   backgroundColor: 'rgb(57,127,183)',
//   width: '260px',
//   height: '280px',
//   borderRadius: '20px',
//   marginTop:30
// }));

// const CustomCardTwo = styled(Card)(() => ({
//   backgroundColor: '#ffffff',
//   height: 40,
//   width: '90%',
//   borderRadius: 20,
//   margin:'20px 15px 80px 15px',
// }));

// const TitleStyle = styled(Typography)(() => ({
//   fontSize: 20,
//   fontWeight: 700,
//   color: '#ffffff',
//   paddingLeft: 15,
//   '& .support-text': {
//     color: 'yellow',
//   }
// }));



// export default function PartnershipProcess() {
//   return (
//     <Box sx={{background:'RGB(228 157 172)', py:10}}>
//    <Typography variant='h2' color='rgb(57,127,183)' sx={{textAlign:{xs:'center'}}}>Social Volunteering </Typography>
//    <Typography variant='h2' color='rgb(57,127,183)' sx={{textAlign:{xs:'center'}}}>Partnership Process </Typography>
//    <Box sx={{display:'flex',justifyContent:'center', alignItems:'center' ,my:4,mx:{xs:4}}}>
//    <Image component="img" src={star} />
//    </Box>
//       <Grid container spacing={2} sx={{pl:8}} justifyContent="center" alignItems="center">
//         <Grid item xs={12} md={3} sm={6}>
//           <CustomCard>
//             <CustomCardTwo>  
//              <Image component="img" src={nature1}/>
// </CustomCardTwo>
//             <Stack sx={{ mx: 3, my: 3 }}>
//               <TitleStyle><span style={{ color: 'yellow' }}>Support</span> Impaac Foundation</TitleStyle>
//             </Stack>
//           </CustomCard>
//         </Grid>

//         <Grid item xs={12} md={3} sm={6}>
//           <CustomCard>
//           <CustomCardTwo>  
//              <Image component="img" src={nature2}/>
//          </CustomCardTwo>
//             <Stack sx={{ mx: 3, my: 3 }}>
//               <TitleStyle><span style={{ color: 'yellow' }}>Support</span> your preferred cause in your location</TitleStyle>
//             </Stack>
//           </CustomCard>
//         </Grid>

//         <Grid item xs={12} md={3} sm={6}>
//           <CustomCard>
//           <CustomCardTwo>  
//              <Image component="img" src={nature3}/>
//           </CustomCardTwo>
//             <Stack sx={{ mx: 3, my: 3 }}>
//               <TitleStyle>    <span style={{ color: 'yellow' }}>Support</span> the current promotional NGO</TitleStyle>
//             </Stack>
//           </CustomCard>
//         </Grid>
//         <Grid item xs={12} md={3} sm={6}>
//           <CustomCard>
//           <CustomCardTwo>  
//              <Image component="img" src={nature3}/>
//           </CustomCardTwo>
//             <Stack sx={{ mx: 3, my: 3 }}>
//               <TitleStyle>    <span style={{ color: 'yellow' }}>Support</span> the current promotional NGO</TitleStyle>
//             </Stack>
//           </CustomCard>
//         </Grid>
//         <Grid item xs={12} md={3} sm={6}>
//           <CustomCard>
//           <CustomCardTwo>  
//              <Image component="img" src={nature3}/>
//           </CustomCardTwo>
//             <Stack sx={{ mx: 3, my: 3 }}>
//               <TitleStyle>    <span style={{ color: 'yellow' }}>Support</span> the current promotional NGO</TitleStyle>
//             </Stack>
//           </CustomCard>
//         </Grid>
//         <Grid item xs={12} md={3} sm={6}>
//           <CustomCard>
//           <CustomCardTwo>  
//              <Image component="img" src={nature3}/>
//           </CustomCardTwo>
//             <Stack sx={{ mx: 3, my: 3 }}>
//               <TitleStyle>    <span style={{ color: 'yellow' }}>Support</span> the current promotional NGO</TitleStyle>
//             </Stack>
//           </CustomCard>
//         </Grid>
//         <Grid item xs={12} md={3} sm={6}>
//           <CustomCard>
//           <CustomCardTwo>  
//              <Image component="img" src={nature3}/>
//           </CustomCardTwo>
//             <Stack sx={{ mx: 3, my: 3 }}>
//               <TitleStyle>    <span style={{ color: 'yellow' }}>Support</span> the current promotional NGO</TitleStyle>
//             </Stack>
//           </CustomCard>
//         </Grid>
//         <Grid item xs={12} md={3} sm={6}>
//           <CustomCard>
//           <CustomCardTwo>  
//              <Image component="img" src={nature3}/>
//           </CustomCardTwo>
//             <Stack sx={{ mx: 3, my: 3 }}>
//               <TitleStyle>    <span style={{ color: 'yellow' }}>Support</span> the current promotional NGO</TitleStyle>
//             </Stack>
//           </CustomCard>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }


import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Image from '../../components/Image';
import star from './catalogue_Pic/star.jpg';
import nature1 from './catalogue_Pic/nature1.jpg';
import nature2 from './catalogue_Pic/nature2.jpg';
import nature3 from './catalogue_Pic/nature3.jpg';
import Title from '../../components/catalogue/Title';

const CustomCard = styled(Card)(({ theme }) => ({
  boxShadow: theme.customShadows.z8,
  backgroundColor: 'rgb(57,127,183)',
  width: '260px',
  height: '280px',
  borderRadius: '20px',
}));

const CustomCardTwo = styled(Card)(() => ({
  backgroundColor: '#ffffff',
  height: 40,
  width: '90%',
  borderRadius: 20,
  margin: '20px 15px 80px 15px',
}));

const TitleStyle = styled(Typography)(() => ({
  fontSize: 20,
  fontWeight: 700,
  color: '#ffffff',
  paddingLeft: 15,
  '& .support-text': {
    color: 'yellow',
  },
}));

const cardItems = [
  { imgSrc: nature1, title: 'Impaac Foundation' },
  { imgSrc: nature2, title: 'your preferred cause in your location' },
  { imgSrc: nature3, title: 'the current promotional NGO' },
  // Add more card items as needed
];

export default function PartnershipProcess() {
  return (
    <Box sx={{ background:'#EDEBEB', py:5}}>
      <Typography variant='h2' color='rgb(57,127,183)' sx={{ textAlign: { xs: 'center' } }}>
        Social Volunteering
      </Typography>
      <Title text='Partnership Process'  sx={{ textAlign: { xs: 'center' } ,color:'rgb(57,127,183)'}} />
        
     
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mx: { xs: 4 } ,mt:{xs:5} ,mb:{xs:5}}}>
        <Image component="img" src={star} />
      </Box>
      <Grid container spacing={2} sx={{ pl: 8 }} justifyContent="center" alignItems="center">
        {cardItems.map((item, index) => (
          <Grid key={index} item xs={12} md={3} sm={6}>
            <CustomCard>
              <CustomCardTwo>
                <Image component="img" src={item.imgSrc} />
              </CustomCardTwo>
              <Stack sx={{ mx: 3, my: 3 }}>
                <TitleStyle>
                  <span style={{ color: 'yellow' }}>Support</span> {item.title}
                </TitleStyle>
              </Stack>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
