
// // import * as React from 'react';
// // import { Grid, Card, Typography, Container } from '@mui/material';
// // import test1 from './catalogue_Pic/test1.png';

// // export default function CatalogueAboutUs2() {
// //   return (
    
// //       <Container sx={{p:5}}>
// //         <Grid container spacing={1}>
// //           <Grid item xs={12} md={8} sm={12}>
// //             <Typography variant="h2" color="rgb(57,127,183)" sx={{ textAlign: { xs: 'center' }, mb:4 }}>
// //               Testimonials
// //             </Typography>
// //             <Grid container spacing={1}>
// //               <Grid item xs={12} md={6} sm={12}>
               
// //                   <Card sx={{ textAlign: 'start',p:2, fontSize: { sm:20, md: 16, xs:18} }}>
// //                     Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering
// //                     Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs.
// //                     Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering
// //                     Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs.
// //                     Facilitating Social Volunteering Partnerships with Impactful NGOs
// //                   </Card>
                
// //               </Grid>
// //               <Grid item xs={0} md={6} sm={6} />

// //               <Grid item xs={12} md={6} sm={12}>
               
// //                   <Card sx={{ textAlign: 'start',p:2, fontSize: { sm:20, md: 16, xs:17} }}>
// //                     Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering
// //                     Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs.
// //                     Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering
// //                     Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs.
// //                     Facilitating Social Volunteering Partnerships with Impactful NGOs
// //                   </Card>
                
// //               </Grid>

// //               <Grid item xs={12} md={6} sm={12}>
              
// //                   <Card sx={{ textAlign:'start',p:2, fontSize: { sm:20, md: 16, xs:18} }}>
// //                     Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering
// //                     Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs.
// //                     Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering
// //                     Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs.
// //                     Facilitating Social Volunteering Partnerships with Impactful NGOs
// //                   </Card>
                
// //               </Grid>
// //             </Grid>
// //           </Grid>
// //           <Grid item xs={12} sm={12} md={4} sx={{ display: 'flex', direction: 'row', justifyContent: 'center', }}>
// //             <img alt={test1} src={test1} ratio="1/1" />
// //           </Grid>
// //         </Grid>
// //       </Container>

// //  );
// // }


// import * as React from 'react';
// import { Grid, Card, Typography, Container } from '@mui/material';
// import test1 from './catalogue_Pic/test1.png';

// function TestimonialCard({ text, fontSize }) {
//   return (
//     <Card sx={{ textAlign: 'start', p: 2, fontSize }}>
//       {text}
//     </Card>
//   );
// }

// export default function CatalogueAboutUs2() {
//   return (
//     <Container sx={{ p: 5 }}>
//       <Grid container spacing={1}>
//         <Grid item xs={12} md={8} sm={12}>
//           <Typography variant="h2" color="rgb(57,127,183)" sx={{ textAlign: { xs: 'center' }, mb: 4 }}>
//             Testimonials
//           </Typography>
//           <Grid container spacing={1}>
//             <Grid item xs={12} md={6} sm={12}>
//               <TestimonialCard
//                 text="Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs"
//                 fontSize={{ sm: 20, md: 16, xs: 18 }}
//               />
//             </Grid>
//             <Grid item xs={0} md={6} sm={6} />
//             <Grid item xs={12} md={6} sm={12}>
//               <TestimonialCard
//                 text="Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs"
//                 fontSize={{ sm: 20, md: 16, xs: 17 }}
//               />
//             </Grid>
//             <Grid item xs={12} md={6} sm={12}>
//               <TestimonialCard
//                 text="Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs. Facilitating Social Volunteering Partnerships with Impactful NGOs"
//                 fontSize={{ sm: 20, md: 16, xs: 18 }}
//               />
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid item xs={12} sm={12} md={4} sx={{ display: 'flex', direction: 'row', justifyContent: 'center' }}>
//           <img alt={test1} src={test1} ratio="1/1" />
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Grid, Typography, Container, Card } from '@mui/material';
import test1 from './catalogue_Pic/test1.png';
import Image from '../../components/Image';
import Title from '../../components/catalogue/Title';

export default function CatalogueAboutUs2() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonial data from an API or data source
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data); // Assuming data is an array of testimonial objects
      })
      .catch((error) => {
        console.error('Error fetching testimonials:', error);
      });
  }, []);

  const renderTestimonials = () => testimonials.map((testimonial, index) => (
      <Grid item xs={12} md={6} sm={12} key={index}>
        <Card sx={{ textAlign: 'start', p: 2 }}>
          {testimonial.body}
        </Card>
      </Grid>
    ));

  return (
    <Container sx={{ p: 5}}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={8} sm={12}>
          <Title text='Testimonials'  sx={{mb:4, color:"rgb(57,127,183)" , textAlign:{ xs: 'center' }}} />
          <Grid container spacing={1}>
            {renderTestimonials()}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} sx={{ display: 'flex', direction: 'row', justifyContent: 'center' }}>
           <Image alt={test1} src={test1} ratio="1/1" />
        </Grid>
      </Grid>
    </Container>
  );
}
