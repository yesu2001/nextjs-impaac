


// import React, { useState, useEffect } from 'react';
// import { Grid, Typography, Container, Card } from '@mui/material';
// import test1 from './catalogue_Pic/test1.png';
// import Image from '../../components/Image';
// import Title from '../../components/catalogue/Title';

// export default function CatalogueAboutUs2() {
//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     // Fetch testimonial data from an API or data source
//     fetch('https://jsonplaceholder.typicode.com/comments')
//       .then((response) => response.json())
//       .then((data) => {
//         setTestimonials(data); // Assuming data is an array of testimonial objects
//       })
//       .catch((error) => {
//         console.error('Error fetching testimonials:', error);
//       });
//   }, []);

//   const renderTestimonials = () => {
//     return testimonials.map((testimonial, index) => (
//       <Grid item xs={12} md={6} sm={12} key={index}>
//         <Card sx={{ textAlign: 'start', p: 2 }}>
//           {testimonial.body}
//         </Card>
//       </Grid>
//     ));
//   };

//   return (
//     <Container sx={{ p: 5}}>
//       <Grid container spacing={1}>
//         <Grid item xs={12} md={8} sm={12}>
//           <Title text='Testimonials'  sx={{mb:4, color:"rgb(57,127,183)" , textAlign:{ xs: 'center' }}} />
//           <Grid container spacing={1}>
//             {renderTestimonials()}
//           </Grid>
//         </Grid>
//         <Grid item xs={12} sm={12} md={4} sx={{ display: 'flex', direction: 'row', justifyContent: 'center' }}>
//            <Image alt={test1} src={test1} ratio="1/1" />
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }






import * as React from 'react';
import { Grid, Card, Typography, Container } from '@mui/material';
import testimonial from './catalogue_Pic/testimonial.png';

function TestimonialCard({ text, fontSize }) {
  return (
    <Card sx={{ textAlign: 'start', p: 2, fontSize }}>
      {text}
    </Card>
  );
}

export default function EnvTestimonial() {
  return (
    <Container sx={{ p: 5 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={8} sm={12}>
          <Typography variant="h2" color="rgb(57,127,183)" sx={{ textAlign: { xs: 'center' }, mb: 4 }}>
            Testimonials
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} sm={12}>
              <TestimonialCard
                text="I am truly inspired by the Impaac Foundations dedication to making a difference in the world. Their commitment to featuring numerous NGOs is an incredible way to amplify the voices of those working tirelessly for positive change. Its heartening to see them bring together such a diverse range of organizations, all united by a common goal of creating a better society. Keep up the amazing work, Impaac Foundatio -Social activist & content creator"
                fontSize={{ sm: 20, md: 16, xs: 18 }} />
            </Grid>
            <Grid item xs={0} md={6} sm={6} />
            <Grid item xs={12} md={6} sm={12}>
              <TestimonialCard
                text="Environmental Advocate and YouTuber: Ive been following the Impaac Foundations journey, and I must say, theyre making waves in the right direction. By showcasing various NGOs on their platform, theyre not only spreading awareness about crucial issues but also empowering these organizations to reach a wider audience. Its vital to have a collaborative approach in the world of social change, and Impaac Foundation is leading the charge. Kudos to them for their commendable efforts!"
                fontSize={{ sm: 20, md: 16, xs: 17 }}
              />
            </Grid>
            <Grid item xs={12} md={6} sm={12}>
              <TestimonialCard
                text="Lifestyle Blogger and Philanthropy Enthusiast: It warms my heart to witness the incredible impact the Impaac Foundation is having on society. Their innovative approach of featuring multiple NGOs is like a beacon of hope, shining light on the countless unsung heroes striving for positive societal transformation. This kind of support can truly change lives, and Im proud to support an organization that recognizes the power of collective action. Impaac Foundation, youre making the world a better place!"
                fontSize={{ sm: 20, md: 16, xs: 18 }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} sx={{ display: 'flex', direction: 'row', justifyContent: 'center' }}>
          <img alt={testimonial} src={testimonial} ratio="1/1" />
        </Grid>
      </Grid>
    </Container>
  );
}

