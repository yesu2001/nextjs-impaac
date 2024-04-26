import * as React from 'react';
import { Stack, Grid, Card, Typography, Box, Container, Link } from '@mui/material';
import Image from '../../components/Image';
import network from './cataloguePics/13.png';
import Title from '../../components/catalogue/Title';

export default function Network() {
  return (
    <Box py={5}>
      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item xs={12} md={5} sx={{ ml: { md: 5 }, my: 5 }}>
            <Title
              text="Why Choose Impaac Foundation for Disaster Relief:"
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
                // mx: { sm: 4 },
              }}
            >
              <Stack spacing={2} color="#ffffff">
                <Typography sx={{ letterSpacing: 1.7, lineHeight: 1.7 }}>
                  Our experienced and dedicated teams are ready to deploy quickly in the wake of disasters, ensuring
                  that aid reaches those in need as soon as possible. We prioritize transparency in all our operations.
                  Detailed reports on the utilization of funds and the impact of relief efforts are made available,
                  providing donors with a clear understanding of the difference their contributions make.
                </Typography>
                <Link
                  href="/fundraisers/new"
                  sx={{
                    width: '220px',
                    textAlign: 'center',
                    borderRadius: 3,
                    py: 1,
                    background: 'white',
                    fontSize: '20px',
                    ':hover': { textDecoration: 'none', background: 'white' },
                  }}
                >
                  Create Campaign
                </Link>
              </Stack>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: { xs: 2 } }}
          >
            <Image component="img" src={network} sx={{ height: { md: '85%' } }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
