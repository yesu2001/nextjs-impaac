// import * as React from 'react';
// import { Stack, Grid,Typography,Box} from '@mui/material';
// import Image from '../../components/Image';
// import aboutimpaac from './catalogue_Pic/aboutimpaac.png';
// import LinkCard from '../../components/catalogue/LinkCard';


// export default function CatalogueAboutUs() {
//   return (
//     <Grid container sx={{background:'RGB(182 165 171)' , m:0}}>
//       <Stack spacing={1} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
//         <Grid item xs={12} md={6} lg={6} sx={{ mt: { xs: 4 } }}>
//             <Image component="img" src={aboutimpaac} />
//         </Grid>

//         <Grid item xs={12} md={6} lg={6}>
//         <Box sx={{m: { xs: 4, md:4,sm:6 },}}>
//             <Typography variant='h2' color='rgb(57,127,183)'>About Impaac</Typography>
//             <Typography sx={{ mr: { md: 12 }, my:8, fontSize:{sm:25, md:20, xs:19}}}>
//               Impaac Foundation is a Non-profit, Technology-driven, Social networking and charity platform which focuses
//               on bridging the gap between the people in need and the people willing to help with 1000% Transparency and
//               Trust. 
             
              
//             <ul style={{paddingTop:20,marginLeft:20}}>
//               <li> <b>Our Vision:</b> Building a Strong, Transparent, and Trustworthy Platform</li> 
//               <li><b> Our Mission:</b> Empowering NGOs for Positive Social Change</li>
//               </ul>
//               </Typography>
//             <LinkCard />
//             </Box>
//         </Grid>
//       </Stack>
//     </Grid>
//   );
// }



import * as React from 'react';
import { Stack, Grid, Typography, Box } from '@mui/material';
import Image from '../../components/Image';
import aboutimpaac from './catalogue_Pic/aboutimpaac.png';
import LinkCard from '../../components/catalogue/LinkCard';
import Title from '../../components/catalogue/Title';

const AboutUsContent = () => (
    <Box sx={{ m: { xs: 4, md: 4, sm: 6 } }}>
      <Title text='About Impaac' sx={{color:"rgb(57,127,183)" ,textAlign:{xs:'center', md:'left'}}} />
      <Typography sx={{ mr: { md: 12 }, my: 5, fontSize: { sm: 25, md: 20, xs: 19 } }}>
        Impaac Foundation is a Non-profit, Technology-driven, Social networking and charity platform which focuses on bridging the gap between the people in need and the people willing to help with 1000% Transparency and Trust.

        <ul style={{ paddingTop: 20, marginLeft: 20 }}>
          <li><b>Our Vision:</b> Building a Strong, Transparent, and Trustworthy Platform</li>
          <li><b>Our Mission:</b> Empowering NGOs for Positive Social Change</li>
        </ul>
      </Typography>
      <LinkCard />
    </Box>
  );

export default function CatalogueAboutUs() {
  return (
    <Grid container sx={{ m: 0 }}>
      <Stack spacing={1} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
        <Grid item xs={12} md={6} lg={6} sx={{ mt: { xs: 4 } }}>
          <Image alt={aboutimpaac} src={aboutimpaac} />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <AboutUsContent />
        </Grid>
      </Stack>
    </Grid>
  );
}

