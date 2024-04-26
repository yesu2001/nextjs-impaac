
// import * as React from 'react';
// import { Stack, Grid, Card, Box, Typography } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import Image from '../../components/Image';
// import nevedika from './catalogue_Pic/nevedika.png';
// import pankaj from './catalogue_Pic/pankaj.png';

// const CustomCard = styled(Card)(({ theme }) => ({
//   width: 200,
//   height: 50,
//   backgroundColor: 'rgb(57,127,183)',
//   borderRadius: 25,
//   marginTop: -25,
//   zIndex: 99,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));


// export default function CatalogueMeetTheTeam() {
//   return (
//     <Box sx={{ p:5}}>
//     <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
//       <Typography variant='h2' sx={{color:'rgb(57,127,183)',width:{md:'70%'} ,my:4}}>
//         Meet Our Founders</Typography>
//         <Typography color={'black'}sx={{fontSize:{xs:19,sm:25,md:19}, width:{md:'70%'}}}>
//           We are the social entrepreneurs with a steady stream of income from another company Jumpking 
//           International LPP. In Impaac Foundation, we are working for social objectives that serve the prime 
//           purpose for improvement of social, animals and environment well-being.
//         </Typography>
//         </Box>

//       <Grid container spacing={4} sx={{ my:4 ,justifyContent:'center',alignItems:'center'}}>
//         <Grid item xs={12} sm={6} md={4} >
//           <Stack sx={{display: 'flex', justifyContent: 'center',alignItems:'center' }}>
//             <Card sx={{ width:'280px',borderRadius: '50px' }}>
//               <Image component="img" src={nevedika} />
//             </Card>
//             <Stack>
//               <CustomCard>
//                 <Typography sx={{fontSize:20,color:'#ffffff'}}>Nivedika Gupta</Typography>
//               </CustomCard>
//               <Typography sx={{fontSize:17,fontWeight:600,textAlign:'center'}}>(Co-Founder & CEO)</Typography>
//             </Stack>
//           </Stack>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//           <Stack sx={{display: 'flex',justifyContent: 'center' ,alignItems:'center' }}>
//             <Card sx={{ width:'280px', borderRadius: '50px' }}>
//               <Image component="img" src={pankaj} />
//             </Card>
//             <Stack>
//               <CustomCard>
//               <Typography sx={{fontSize:20,color:'#ffffff'}}>Pankaj Dhingra</Typography>
//               </CustomCard>
//               <Typography sx={{fontSize:17 ,fontWeight:600,textAlign:'center'}}>(Co-Founder & MD)</Typography>
//             </Stack>
//           </Stack>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }


import React from 'react';
import { Stack, Grid, Card, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from '../../components/Image';
import nevedika from './catalogue_Pic/nevedika.png';
import pankaj from './catalogue_Pic/pankaj.png';
import Title from '../../components/catalogue/Title';

const CustomCard = styled(Card)(({ theme }) => ({
  width: 200,
  height: 50,
  backgroundColor: 'rgb(57,127,183)',
  borderRadius: 25,
  marginTop: -25,
  zIndex: 99,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const TeamMember = ({ imgSrc, name, role }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ width: '280px', borderRadius: '50px' }}>
        <Image component="img" src={imgSrc} />
      </Card>
      <Stack>
        <CustomCard>
          <Typography sx={{ fontSize: 20, color: '#ffffff' }}>{name}</Typography>
        </CustomCard>
        <Typography sx={{ fontSize: 17, fontWeight: 600, textAlign: 'center' }}>{role}</Typography>
      </Stack>
    </Stack>
  </Grid>
);

export default function CatalogueMeetTheTeam() {
  const teamMembers = [
    { imgSrc: nevedika, name: 'Nivedika Gupta', role: 'Co-Founder & CEO' },
    { imgSrc: pankaj, name: 'Pankaj Dhingra', role: 'Co-Founder & MD' },
  
  ];

  return (
    <Box sx={{ p: 5 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Title text='Meet Our Founders' sx={{color:'rgb(57,127,183)', width:{md: '70%'} ,mb:5}} />
        <Typography color={'black'} sx={{ fontSize: { xs: 19, sm: 25, md: 19 }, width: { md: '70%' } }}>
          We are the social entrepreneurs with a steady stream of income from another company Jumpking
          International LPP. In Impaac Foundation, we are working for social objectives that serve the prime
          purpose for improvement of social, animals, and environment well-being.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ my: 4, justifyContent: 'center', alignItems: 'center' }}>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} imgSrc={member.imgSrc} name={member.name} role={member.role} />
        ))}
      </Grid>
    </Box>
  );
}
