
// import React from 'react';
// import { Box, Grid, Typography,Stack } from '@mui/material';
// import Card from '@mui/material/Card';
// import { styled } from '@mui/material/styles';

// import story from './catalogue_Pic/story.png';
// import nature1 from './catalogue_Pic/nature1.jpg';
// import blog from './catalogue_Pic/blog.png';

// const CustomCard = styled(Card)(({ theme }) => ({
//   boxShadow: theme.customShadows.z8,
//   backgroundColor: 'rgb(57,127,183)',
//   width: '250px',
//   height:'auto',
//   borderRadius: '20px',

// }));

// const ImageCard = styled(Card)(() => ({
//   borderRadius: 10,
//   height:'200px'
// }));

// const TitleStyle = styled(Typography)(() => ({
//   fontSize: 25,
//   fontWeight: 700,
//   color: '#ffffff',
// }));

// const ContentStyle = styled(Typography)(() => ({
//   fontSize: 20,
//   color: '#ffffff',
// }));

// export default function CatalogueDestination() {
//   return (
  
//       <Box sx={{p:5,background:'#EDEBEB'}}>
//      <Typography variant='h1' sx={{color: 'rgb(57,127,183)', textAlign:'center'}}>Possible Ways</Typography>

//         <Grid
//           container
//           spacing={4}
//           sx={{ mt:4 ,
//           }} 
//         >
//           <Grid item xs={12} md={3} sm={6} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
//             <CustomCard>
//               <ImageCard>
//                 <img alt={story} src={story} ratio="1/1" width='100%' height='100%'/>
//               </ImageCard>
//               <Stack sx={{ mx: 3, my: 3, flex:0.5 }}>
//                 <TitleStyle>Story/Post</TitleStyle>
//                 <ContentStyle>
//                   Talk about the campaign and its purpose to make your audience aware
//                 </ContentStyle>
//               </Stack>
//             </CustomCard>
//           </Grid>

//           <Grid item xs={12} md={3} sm={6} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
//             <CustomCard>
              
//                 <ImageCard>
//                   <img alt={nature1} src={nature1}  ratio="1/1"  width='100%' height='100%' />
//                 </ImageCard>
             
//               <Stack sx={{ mx: 3, my: 3 , flex:0.5}}>
//                 <TitleStyle>Reels</TitleStyle>
//                 <ContentStyle>
//                   Create a video talking about the campaign to make people relate to it
//                 </ContentStyle>
//               </Stack>
//             </CustomCard>
//           </Grid>

//           <Grid item xs={12} md={3} sm={6} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
//             <CustomCard>
             
//                 <ImageCard>
//                   <img alt={blog} src={blog} ratio="1/1" width='100%' height='100%' />
//                 </ImageCard>
           
//               <Stack sx={{ mx: 3, my: 3 , flex:0.5}}>
//                 <TitleStyle>Blog</TitleStyle>
//                 <ContentStyle>
//                   Write about the NGO and their volunteers on your blog page
//                 </ContentStyle>
//               </Stack>
//             </CustomCard>
//           </Grid>
//           <Grid item xs={12} md={3} sm={6} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
//             <CustomCard>
              
//                 <ImageCard>
//                   <img alt={blog} src={blog} ratio="1/1" width='100%' height='100%' />
//                 </ImageCard>
              
//               <Stack sx={{ mx: 3, my: 3 , flex:0.5}}>
//                 <TitleStyle>Blog</TitleStyle>
//                 <ContentStyle>
//                   Write about the NGO and their volunteers on your blog page
//                 </ContentStyle>
//               </Stack>
//             </CustomCard>
//           </Grid>
//           <Grid item xs={12} md={3} sm={6} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
//             <CustomCard>
             
//                 <ImageCard>
//                   <img alt={blog} src={blog} ratio="1/1" width='100%' height='100%'/>
//                 </ImageCard>
            
//               <Stack sx={{ mx: 3, my: 3, flex:0.5 }}>
//                 <TitleStyle>Blog</TitleStyle>
//                 <ContentStyle>
//                   Write about the NGO and their volunteers on your blog page
//                 </ContentStyle>
//               </Stack>
//             </CustomCard>
//           </Grid>
//           <Grid item xs={12} md={3} sm={6} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
//             <CustomCard>
            
//                 <ImageCard>
//                   <img alt={blog} src={blog} ratio="1/1" width='100%' height='100%'/>
//                 </ImageCard>
            
//               <Stack sx={{ mx: 3, my: 3, flex:0.5 }}>
//                 <TitleStyle>Blog</TitleStyle>
//                 <ContentStyle>
//                   Write about the NGO and their volunteers on your blog page
//                 </ContentStyle>
//               </Stack>
//             </CustomCard>
//           </Grid>
//         </Grid>
//       </Box>
//   );
// }



// import React from 'react';
// import { Box, Grid, Typography, Stack } from '@mui/material';
// import Card from '@mui/material/Card';
// import { styled } from '@mui/material/styles';

// import story from './catalogue_Pic/story.png';
// import nature1 from './catalogue_Pic/nature1.jpg';
// import blog from './catalogue_Pic/blog.png';

// const CustomCard = styled(Card)(({ theme }) => ({
//   boxShadow: theme.customShadows.z8,
//   backgroundColor: 'rgb(57,127,183)',
//   width: '250px',
//   height: 'auto',
//   borderRadius: '20px',
// }));

// const ImageCard = styled(Card)(() => ({
//   borderRadius: 10,
//   height: '200px',
// }));

// const TitleStyle = styled(Typography)(() => ({
//   fontSize: 25,
//   fontWeight: 700,
//   color: '#ffffff',
// }));

// const ContentStyle = styled(Typography)(() => ({
//   fontSize: 20,
//   color: '#ffffff',
// }));

// const catalogItems = [
//   {
//     imgSrc: story,
//     title: 'Story/Post',
//     content: 'Talk about the campaign and its purpose to make your audience aware',
//   },
//   {
//     imgSrc: nature1,
//     title: 'Reels',
//     content: 'Create a video talking about the campaign to make people relate to it',
//   },
//   {
//     imgSrc: blog,
//     title: 'Blog',
//     content: 'Write about the NGO and their volunteers on your blog page',
//   },
//   // Add more items as needed
// ];

// export default function CatalogueDestination() {
//   return (
//     <Box sx={{ p: 5, background: '#EDEBEB' }}>
//       <Typography variant='h1' sx={{ color: 'rgb(57,127,183)', textAlign: 'center' }}>Possible Ways</Typography>
//       <Grid
//         container
//         spacing={4}
//         sx={{ mt:2 }}
//       >
//         {catalogItems.map((item, index) => (
//           <Grid key={index} item xs={12} md={3} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             <CustomCard>
//               <ImageCard>
//                 <img alt={item.title} src={item.imgSrc} ratio="1/1" width='100%' height='100%' />
//               </ImageCard>
//               <Stack sx={{ mx: 3, my: 3, flex: 0.5 }}>
//                 <TitleStyle>{item.title}</TitleStyle>
//                 <ContentStyle>{item.content}</ContentStyle>
//               </Stack>
//             </CustomCard>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }


import React from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Image from '../../components/Image';
import story from './catalogue_Pic/story.png';
import nature1 from './catalogue_Pic/nature1.jpg';
import blog from './catalogue_Pic/blog.png';
import Title from '../../components/catalogue/Title';

const CustomCard = styled(Card)(({ theme }) => ({
  boxShadow: theme.customShadows.z8,
  backgroundColor: 'rgb(57,127,183)',
  width: '250px',
  height: 'auto',
  borderRadius: '20px',
}));

const ImageCard = styled(Card)(() => ({
  borderRadius: 10,
  height: '200px',
}));

const TitleStyle = styled(Typography)(() => ({
  fontSize: 25,
  fontWeight: 700,
  color: '#ffffff',
}));

const ContentStyle = styled(Typography)(() => ({
  fontSize: 20,
  color: '#ffffff',
}));

const cardItems = [
  {
    imgSrc: story,
    title: 'Story/Post',
    content: 'Talk about the campaign and its purpose to make your audience aware',
  },
  {
    imgSrc: nature1,
    title: 'Reels',
    content: 'Create a video talking about the campaign to make people relate to it',
  },
  {
    imgSrc: blog,
    title: 'Blog',
    content: 'Write about the NGO and their volunteers on your blog page',
  },
 
];

export default function CatalogueDestination() {
  return (
    <Box sx={{ p: 5, background: '#EDEBEB' }}>
      <Title text='Possible Ways' sx={{color: 'rgb(57,127,183)', textAlign: 'center'}} />

      <Grid
        container
        spacing={4}
        sx={{ mt:{xs:1 ,md:3},justifyContent: 'center' }} 
      >
        {cardItems.map((item, index) => (
          <Grid key={index} item xs={12} md={3} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CustomCard>
              <ImageCard>
                <Image alt={item.title} src={item.imgSrc} ratio="1/1" width='100%' height='100%' />
              </ImageCard>
              <Stack sx={{ mx: 3, my: 3, flex: 0.5 }}>
                <TitleStyle>{item.title}</TitleStyle>
                <ContentStyle>{item.content}</ContentStyle>
              </Stack>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


