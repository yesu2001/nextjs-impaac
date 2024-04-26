import * as React from 'react';
import { Stack, Grid, Card, Typography, Box, Container, Link } from '@mui/material';
import Image from '../../components/Image';
import change from './catalogue_Pic/3.webp';
import Title from '../../components/catalogue/Title';

export default function Change() {
  return (
    <Box py={5}>
      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item xs={12} md={5} sx={{ display: 'flex', direction: 'row', justifyContent: 'center', p: { xs: 2 } }}>
            <Image component="img" src={change} />
          </Grid>

          <Grid item xs={12} md={6.5} sx={{ ml: { md: 5 }, my: 5 }}>
            <Title
              text="Employment and Skill Development:"
              sx={{ color: 'rgb(57,127,183)', textAlign: { xs: 'center', sm: 'center', md: 'left' } }}
            />

            <Card
              sx={{
                maxWidth: { md: '490px' },
                px: 5,
                py: 5,
                borderRadius: '25px',
                backgroundColor: 'rgb(57,127,183)',
                marginTop: 3,
              }}
            >
              <Stack spacing={2} color="#ffffff">
                <Typography sx={{ letterSpacing: 1.7, lineHeight: 1.7 }}>
                  Discover and support the best NGOs working tirelessly to alleviate poverty in India. Our platform
                  empowers you to make informed decisions, track your contributions, and witness the tangible impact of
                  your generosity. Every donation you make creates a ripple effect, transforming lives and communities.
                </Typography>
                <Link
                  href="/campaign"
                  sx={{
                    width: '250px',
                    textAlign: 'center',
                    borderRadius: 3,
                    py: 1,
                    background: 'white',
                    fontSize: '20px',
                    ':hover': { textDecoration: 'none', background: 'white' },
                  }}
                >
                  Explore Campaigns
                </Link>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
