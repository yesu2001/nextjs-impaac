import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Box, Grid, Link, Paper, Rating, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import cssStyles from '../../utils/cssStyles';
// components
import Iconify from '../../components/Iconify';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const TESTIMONIALS = [
  {
    name: 'Vidit Sharma',
    rating: 4,
    dateCreate: 'January 15, 20223',
    content: `Excellent Work! Thanks a lot!`,
  },
  {
    name: 'Arya Deshmukh',
    rating: 5,
    dateCreate: 'September 28, 2023',
    content: `I wanted to help the people in my hometown. I was reluctant to donate money. Impaac foundation allowed me to donate , ensured that it goes to the needy in my hometown.`,
  },
  {
    name: 'Priti Dogra',
    rating: 4,
    dateCreate: 'December 19, 2023',
    content: `I am glad that a small contribution from me has made a positive difference in the lives of needy strays. I felt humble when I read the feedback".!`,
  },
  {
    name: 'Shubhas Verma',
    rating: 5,
    dateCreate: 'April 2, 2023',
    content: `This is best as It helped me to help nature`,
  },
  {
    name: 'Vineet Shah',
    rating: 5,
    dateCreate: 'July 25, 2023',
    content: `Absolutely love this leap of faith. When you look at the Impaac platform, it definitely reflects the values of Anoj. This would come as big bost to the social sector & a very rare instance of generosity which is never easy. Go #Impaac 5/5 stars!`,
  },
  {
    name: 'Inayra Lamba',
    rating: 5,
    dateCreate: 'Feb 20, 2022',
    content: `I found Impaac Foundation a completely free & transparent platform where all the donations raised were fully funded without any processing fees or tips like others charge. The team is really helpful and helped me to contribute to the society. Thanks!`,
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(10, 0),
  backgroundSize: 'cover',
  background:"#fafafa",
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    padding: 0,
    height: 840,
    overflow: 'hidden',
  },
}));

// ----------------------------------------------------------------------

export default function AboutTestimonials() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ position: 'relative', height: 1 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ height: 1 }}
        >
          <Grid item xs={10} md={4}>
            <Box sx={{ maxWidth: { md: 360 } }}>
              <m.div variants={varFade().inUp}>
                <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
                  rating
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mb: 3, color: 'text.primary' }}>
                  What 
                  <br/> 
                  Impaactors Say
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Our goal is to create a platform that you’re satisfied with. This is
                  why we’re constantly working on our services to make it better every day and really listen to what our
                  users has to say.
                </Typography>
              </m.div>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            lg={6}
            sx={{
              right: { md: 24 },
              position: { md: 'absolute' },
            }}
          >
            <Grid container spacing={isDesktop ? 3 : 0} alignItems="center">
              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(0, 3).map((testimonial) => (
                  <m.div key={testimonial.name} variants={varFade().inUp}>
                    <TestimonialCard testimonial={testimonial} />
                  </m.div>
                ))}
              </Grid>

              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(3, 6).map((testimonial) => (
                  <m.div key={testimonial.name} variants={varFade().inUp}>
                    <TestimonialCard testimonial={testimonial} />
                  </m.div>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

function TestimonialLink() {
  return (
    <Link href="#" variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
      Read more testimonials
      <Iconify icon={'ic:round-arrow-right-alt'} sx={{ ml: 1, width: 20, height: 20 }} />
    </Link>
  );
}

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    content: PropTypes.string,
    dateCreate: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
  }),
};

function TestimonialCard({ testimonial }) {
  const theme = useTheme();

  const { name, rating, dateCreate, content } = testimonial;

  return (
    <Paper
      sx={{
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        background:"rgb(207 221 255 / 38%)",
        mt: 3,
        p: 3,
        color: 'text.secondary',
        ...cssStyles().bgBlur({
          color: theme.palette.common.black,
          opacity: 0.02,
        }),
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        {name}
      </Typography>
      <Typography gutterBottom component="p" variant="caption" sx={{ color: 'grey.500' }}>
        {dateCreate}
      </Typography>
      <Rating value={rating} readOnly size="small" />
      <Typography variant="body2" sx={{ mt: 1.5 }}>
        {content}
      </Typography>
    </Paper>
  );
}
