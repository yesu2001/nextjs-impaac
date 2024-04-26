import * as React from 'react';
import { Stack, Grid, Card, Typography, Box, Container, Link } from '@mui/material';
import Image from '../../components/Image';
import network from './catalogue_Pic/network.png';
import Title from '../../components/catalogue/Title';

export default function Network() {
  return (
    <Box py={5}>
      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item xs={12} md={5} sx={{ ml: { md: 5 }, my: 5 }}>
            <Title
              text="Why Choose Impaac Foundation for CSR:"
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
                  We work closely with companies to tailor CSR programs that align with their values, industry, and
                  corporate culture. Our goal is to create bespoke initiatives that reflect the unique identity of each
                  partner. Our dedicated teams ensure that CSR initiatives are effectively executed, maximizing positive
                  outcomes.
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
            <Image component="img" src={network} sx={{ width: { md: '85%' } }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
