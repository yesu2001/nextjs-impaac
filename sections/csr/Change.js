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
          <Grid item xs={12} md={5} sx={{ display: 'flex', alignItems: 'center' }}>
            <Image component="img" src={change} sx={{ height: { md: '80%' } }} />
          </Grid>
          <Grid item xs={12} md={6.5} sx={{ ml: { md: 5 }, my: 5 }}>
            <Title
              text="How to Engage in CSR with Impaac Foundation:"
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
                  Work with our team to identify CSR goals that align with your company's values and priorities.
                  Collaborate with us to design customized CSR programs that address specific social, environmental, and
                  community needs. Encourage employee participation in volunteering and engagement activities to foster
                  a sense of purpose and social responsibility.
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
