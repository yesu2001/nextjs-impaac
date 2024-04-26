// import * as React from 'react';
// import { Stack, Grid, Card, Box, Typography,Button } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import Image from '../../components/Image';
// import community from './catalogue_Pic/community.png';
// import msg from './catalogue_Pic/msg.png';
// import call from './catalogue_Pic/call.png';
// import website from './catalogue_Pic/website.png';
// import address from './catalogue_Pic/address.png';

// const ContentStyle = styled('Typography')(({ theme }) => ({
//     fontSize: 20,
//     [theme.breakpoints.down('md')]: {
//       fontSize: 22,
//     },
//     marginLeft:25,
//     flex:0.7
//   }));
  
// const ReasonBox = styled(Box)(() => ({
//     display: 'flex',
//     alignItems:  'center',
//     justifyContent:{xs:'center',md:'flex-start'},
//   }));

//   const CustomButton = styled(Button)(({theme}) => ({
//     fontSize:25,
//     padding:'0 15px',
//     height:50,
//     color: '#ffffff',
//     backgroundColor: 'rgb(57,127,183)',
//     borderRadius: '25px',
//     marginTop: '20px',
//   marginBottom:30,
//     '&:hover': {
//       background: 'rgb(57,127,183)',
//       color: '#FFF',
//     },
//   }));

// export default function ImpaacCommunity() {
//   return (
//     <Grid container sx={{py:10, px:5}} spacing={3}>
//         <Grid item xs={12} md={6}>
//             <Image component="img" src={community} />
//         </Grid>

//         <Grid item xs={12} sm={12} md={6} lg={6} spacing={3} sx={{m:{sm:15 ,md:0,xs:4}}}>
//             <Typography variant='h2' sx={{color:'rgb(57,127,183)' ,textAlign:{xs:'center',md:'left'} ,width:{md:'80%'}}}>Join the Impaac Community</Typography>
//            <Box sx={{display:'flex', justifyContent:{xs:'center',md:'flex-start'} ,alignItems:{xs:'center', md:'flex-start'},mt:2}}>
//             <CustomButton>Read More <img width="30" height="30" src="https://img.icons8.com/ffffff/external-tanah-basah-basic-outline-tanah-basah/24/external-right-arrow-arrows-tanah-basah-basic-outline-tanah-basah.png" alt="external-right-arrow-arrows-tanah-basah-basic-outline-tanah-basah"/></CustomButton>
//             </Box>
//           <Stack spacing={3} mt={4}>
//             <ReasonBox>
//             <Box flex={0.1}>
//               <Image alt={msg} src={msg} />
//               </Box>
//                <ContentStyle>
//                 connect@impaac.org <br/>
//                 nivedikaguptaa@gmail.com
//                 </ContentStyle>
//             </ReasonBox>

//             <ReasonBox>
//             <Box flex={0.1}>
//               <Image alt={call} src={call}/>
//               </Box>
//               <ContentStyle>
//                 +91-8130540906
//                 </ContentStyle>
//             </ReasonBox>

//             <ReasonBox>
//             <Box flex={0.1}>
//               <Image alt={website} src={website} />
//               </Box>
//                <ContentStyle>
//                 www.impaac.org
//                 </ContentStyle>
//             </ReasonBox>

//             <ReasonBox>
//             <Box flex={0.1}>
//               <Image alt={address} src={address}  />
//               </Box>
//                <ContentStyle>
//                Impaac Foundation-No.45/4,Srirampura, inside Royal enclave,Bengaluru- 560064, India
//                 </ContentStyle>
//             </ReasonBox>
//           </Stack> 
//         </Grid>
//     </Grid>
    
//   );
// }


import React from 'react';
import { Stack, Grid, Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from '../../components/Image';
import community from './catalogue_Pic/community.png';
import msg from './catalogue_Pic/msg.png';
import call from './catalogue_Pic/call.png';
import website from './catalogue_Pic/website.png';
import address from './catalogue_Pic/address.png';
import Title from '../../components/catalogue/Title';

const ContentStyle = styled(Typography)(({ theme }) => ({
  fontSize: 25,
  [theme.breakpoints.down('md')]: {
    fontSize: 22,
  },
  marginLeft: 25,
  flex: 0.7,
}));

const ReasonBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: { xs: 'center', md: 'flex-start' },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  fontSize: 25,
  padding: '0 15px',
  height: 50,
  color: '#ffffff',
  backgroundColor: 'rgb(57,127,183)',
  borderRadius: '25px',
  marginTop: '20px',
  marginBottom: 30,
  '&:hover': {
    background: 'rgb(57,127,183)',
    color: '#FFF',
  },
}));

export default function ImpaacCommunity() {
  return (
    <Grid container sx={{ py: 10,px:{md:5}}} spacing={3}>
      <Grid item xs={12} md={6}>
        <Image component="img" src={community} />
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6} spacing={3} >
        <Title text ='Join the Impaac Community' sx={{color:'rgb(57,127,183)' ,textAlign: { xs: 'center', md: 'left' } ,width: {md: '80%' }}} />

        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, alignItems: { xs: 'center', md: 'flex-start' }, mt: 2 }}>
          <CustomButton>
            Read More <img width="30" height="30" src="https://img.icons8.com/ffffff/external-tanah-basah-basic-outline-tanah-basah/24/external-right-arrow-arrows-tanah-basah-basic-outline-tanah-basah.png" alt="external-right-arrow-arrows-tanah-basah-basic-outline-tanah-basah" />
          </CustomButton>
        </Box>
        <Stack spacing={3} mt={4} sx={{ mx: { sm: 5, md: 0, xs: 5 } }}>
          <ReasonBox>
            <Box flex={0.1}>
              <Image alt={msg} src={msg} />
            </Box>
            <ContentStyle>
              connect@impaac.org <br />
              nivedikaguptaa@gmail.com
            </ContentStyle>
          </ReasonBox>

          <ReasonBox>
            <Box flex={0.1}>
              <Image alt={call} src={call} />
            </Box>
            <ContentStyle>
              +91-8130540906
            </ContentStyle>
          </ReasonBox>

          <ReasonBox>
            <Box flex={0.1}>
              <Image alt={website} src={website} />
            </Box>
            <ContentStyle>
              www.impaac.org
            </ContentStyle>
          </ReasonBox>

          <ReasonBox>
            <Box flex={0.1}>
              <Image alt={address} src={address} />
            </Box>
            <ContentStyle>
              Impaac Foundation-No.45/4, Srirampura, inside Royal enclave, Bengaluru- 560064, India
            </ContentStyle>
          </ReasonBox>
        </Stack>
      </Grid>
    </Grid>
  );
}
 

