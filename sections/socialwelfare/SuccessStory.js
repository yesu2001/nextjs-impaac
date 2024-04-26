

// import React from 'react';
// import { Box, Grid, Typography, Stack } from '@mui/material';
// import Card from '@mui/material/Card';
// import { styled } from '@mui/material/styles';
// import GradeIcon from '@mui/icons-material/Grade';
// import story1 from './catalogue_Pic/story1.jpg';
// import story2 from './catalogue_Pic/story2.jpg';
// import story4 from './catalogue_Pic/story3.jpg';
// import story5 from './catalogue_Pic/story4.jpg';


// const IconCard = styled(Card)(() => ({
//   width: 290,
//   height: 50,
//   backgroundColor: 'rgb(57,127,183)',
//   borderRadius: 30,
//   marginBottom: -28,
//   zIndex: 99,
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// }));


// export default function CatalogueDestination() {
//   return (
//     <Grid container spacing={4} sx={{p:5,background:'RGB(60 61 61)'}}>
//       <Grid item xs={12} md={12} sm={6} 
//       // sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
//       >
//         {/* <Box sx={{ p: 5, background: 'RGB(198 227 152)' }}> */}
//           <Typography variant="h2" sx={{ color: 'rgb(57,127,183)', textAlign: 'center' }}>
//             Success Stories
//           </Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',my:4 }}>
//           <IconCard >
//             <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
//             <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
//             <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
//             <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
//             <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
//           </IconCard>
//           </Box>
//             <Box sx={{display:'flex', gap:1, alignItems:'center'}}>
                
//                 <img alt={story1} src={story1} styles={{height:'500px'}}/>
                
//                 <img alt={story2} src={story2} styles={{height:'500px'}}/>
                
//                 <img alt={story4} src={story4} styles={{height:'500px'}}/>
                
//                 <img alt={story5} src={story5} styles={{height:'500px'}}/>
                
//                 <img alt={story2} src={story2} styles={{height:'500px'}}/>
              
//                 </Box>

            
//       </Grid>
// </Grid>
//   );
// }

// import React from 'react';
// import { Box, Grid, Typography, Stack } from '@mui/material';
// import Card from '@mui/material/Card';
// import { styled } from '@mui/material/styles';
// import GradeIcon from '@mui/icons-material/Grade';
// import story1 from './catalogue_Pic/story1.jpg';
// import story2 from './catalogue_Pic/story2.jpg';
// import story4 from './catalogue_Pic/story3.jpg';
// import story5 from './catalogue_Pic/story4.jpg';


// // const ImageCard = styled(Card)(() => ({
// //   height:'350px'
// // }));

// const IconCard = styled(Card)(() => ({
//   width: 290,
//   height: 50,
//   backgroundColor: 'rgb(57,127,183)',
//   borderRadius: 30,
//   marginBottom: -28,
//   zIndex: 99,
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// }));

// const CustomCard = styled(Card)(({ theme }) => ({
//   boxShadow: theme.customShadows.z8,
//   backgroundColor: 'rgb(57,127,183)',
//   width: '250px',
//   height: 'auto',
//   // borderRadius: '20px',
// }));

// export default function CatalogueDestination() {
//   return (
//     <Grid container spacing={4} sx={{p:5,background:'#EDEBEB' }}>
//       <Grid item xs={12} md={12} sm={12} >
//           <Typography variant="h1" sx={{ color: 'rgb(57,127,183)', textAlign: 'center' }}>
//             Success Stories
//           </Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,my:4}}>
//           <IconCard >
//             <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
//             <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
//             <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
//             <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
//             <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
//           </IconCard>
//           </Box>
//           <Grid container spacing={1} sx={{ my:10 }}>
//             <Grid item xs={12} md={2.4} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <img alt={story1} src={story1} ratio="1/1" width="100%" height="100%" />
//             </Grid>

//             <Grid item xs={12} md={2.4} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <img alt={story2} src={story2} ratio="1/1" width="100%" height="100%" />
//             </Grid>

//             <Grid item xs={12} md={2.4} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <img alt={story4} src={story4} ratio="1/1" width="100%" height="100%" />
//             </Grid>
//             <Grid item xs={12} md={2.4} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//               <img alt={story5} src={story5} ratio="1/1" width="100%" height="100%" />
//             </Grid>
//             <Grid item xs={12} md={2.4} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//               <img alt={story2} src={story2} ratio="1/1" width="100%" height="100%" />
//             </Grid>
//             <Grid item xs={12} md={2.4} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <img alt={story4} src={story4} ratio="1/1" width="100%" height="100%" />
//             </Grid>
//             <Grid item xs={12} md={2.4} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//               <img alt={story5} src={story5} ratio="1/1" width="100%" height="100%" />
//             </Grid>
//             <Grid item xs={12} md={2.4} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//               <img alt={story2} src={story2} ratio="1/1" width="100%" height="100%" />
//             </Grid>
//             <Grid item xs={12} md={2.4} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <img alt={story4} src={story4} ratio="1/1" width="100%" height="100%" />
//             </Grid>
//             <Grid item xs={12} md={2.4} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//               <img alt={story5} src={story5} ratio="1/1" width="100%" height="100%" />
//             </Grid>
//             <Grid item xs={12} md={2.4} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//               <img alt={story2} src={story2} ratio="1/1" width="100%" height="100%" />
//             </Grid>
//           </Grid>
//       </Grid>
// </Grid>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import GradeIcon from '@mui/icons-material/Grade';
import Image from '../../components/Image';
import Title from '../../components/catalogue/Title';

const IconCard = styled(Card)(() => ({
  width: 290,
  height: 50,
  backgroundColor: 'rgb(57,127,183)',
  borderRadius: 30,
  marginBottom: -28,
  zIndex: 99,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default function CatalogueDestination() {
  const [storyImages, setStoryImages] = useState([]);

  useEffect(() => {
   
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => {
        setStoryImages(data); 
      })
      .catch((error) => {
        console.error('Error fetching story images:', error);
      });
  }, []);

  const renderStoryImages = () => storyImages.map((url, index) => (
      <Grid key={index} item xs={12} md={2.4} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image alt={`Story ${index + 1}`} src={url.url} ratio="1/1" width="100%" height="100%" />
      </Grid>
    ));

  return (
    <Grid container spacing={4} sx={{ p: 2, background: '#EDEBEB' }}>
      <Grid item xs={12} md={12} sm={12}>
        <Title text='Success Stories' sx={{ color: 'rgb(57,127,183)', textAlign: 'center' }} />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 5 }}>
          <IconCard>
            <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
            <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
            <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
            <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
            <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
          </IconCard>
        </Box>
        <Grid container spacing={1} sx={{ my:10 }}>
          {/* {renderStoryImages()} */}
        </Grid>
      </Grid>
    </Grid>
  );
}
