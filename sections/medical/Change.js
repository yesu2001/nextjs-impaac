import * as React from 'react';
import { Stack, Grid, Card, Typography, Box, Container, Link } from '@mui/material';
import Image from '../../components/Image';
import change from './catalogue_Pic/change.png';
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
              text="How to Support Healthcare and Medical Access:"
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
                  Discover our Healthcare and Medical Access campaigns to find the cause that resonates with your
                  commitment to a healthier India. Contribute directly to your chosen campaign through our platform.
                  Your donation goes towards improving healthcare services, making a significant impact on the
                  well-being of communities.
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
