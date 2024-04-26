import * as React from 'react';
import { Grid, Card, Typography, Container, Box, Link, Stack } from '@mui/material';
import Image from '../../components/Image';
import power from './catalogue_Pic/2.webp';
import Title from '../../components/catalogue/Title';

export default function Network() {
  return (
    <Box py={5}>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12} md={5} sx={{ ml: { md: 5 }, my: 5 }}>
            <Title
              text="A Network of Trustworthy NGOs"
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
                  Our platform provides NGOs with a robust and user-friendly space to showcase their impactful projects.
                  By connecting with compassionate donors, you can turn visions into reality and bring about positive
                  change. The process is simple, efficient, and ensures that your efforts receive the support they
                  deserve.
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
          <Grid item xs={12} md={6} sx={{ display: 'flex', direction: 'row', justifyContent: 'center', p: { xs: 2 } }}>
            <Image component="img" src={power} alt="power" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
