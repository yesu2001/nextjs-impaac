import React from 'react';
import { Stack, Grid, Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from '../../components/Image';
import community from './catalogue_Pic/community.png';
import msg from './catalogue_Pic/msg.png';
import call from './catalogue_Pic/call.png';
import website from './catalogue_Pic/website.png';
import address from './catalogue_Pic/address.png';
import Title from '../../components/catalogue/Title';

const ContentStyle = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  flex: 0.8,
}));

const ReasonBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: { xs: 'center', md: 'flex-start' },
  gap: { xs: 3, sm: 2, md: 1 },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  fontSize: 20,
  padding: '0 15px',
  height: 50,
  color: '#ffffff',
  backgroundColor: 'rgb(57,127,183)',
  borderRadius: '25px',
  '&:hover': {
    background: 'rgb(57,127,183)',
    color: '#FFF',
  },
}));

export default function ImpaacCommunity() {
  return (
    <Container maxWidth="lg">
      <Grid container sx={{ py: 10, px: { md: 5 } }} spacing={3}>
        <Grid item xs={12} md={6}>
          <Image component="img" src={community} />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} spacing={3}>
          <Title
            text="Join the Impaac Community"
            sx={{ color: 'rgb(57,127,183)', textAlign: { xs: 'center', md: 'left' }, width: { md: '80%' } }}
          />
          <a href="/contact" style={{ textDecoration: 'none' }}>
            <CustomButton sx={{ my: 3, mx: { xs: 'auto', sm: '0' } }}>
              Contact Us{' '}
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ffffff/external-tanah-basah-basic-outline-tanah-basah/24/external-right-arrow-arrows-tanah-basah-basic-outline-tanah-basah.png"
                alt="external-right-arrow-arrows-tanah-basah-basic-outline-tanah-basah"
              />
            </CustomButton>
          </a>
          <Stack spacing={3} mt={4} sx={{ mx: { sm: 5, md: 0, xs: 5 } }}>
            <ReasonBox>
              <Box flex={0.2}>
                <Image alt={msg} src={msg} sx={{ width: { xs: '90%', sm: '60%' } }} />
              </Box>
              <ContentStyle>connect@impaac.org</ContentStyle>
            </ReasonBox>

            <ReasonBox>
              <Box flex={0.2}>
                <Image alt={call} src={call} sx={{ width: { xs: '90%', sm: '60%' } }} />
              </Box>
              <ContentStyle>+91-9339441893</ContentStyle>
            </ReasonBox>

            <ReasonBox>
              <Box flex={0.2}>
                <Image alt={website} src={website} sx={{ width: { xs: '90%', sm: '60%' } }} />
              </Box>
              <ContentStyle>www.impaac.org</ContentStyle>
            </ReasonBox>

            <ReasonBox>
              <Box flex={0.2}>
                <Image alt={address} src={address} sx={{ width: { xs: '90%', sm: '60%' } }} />
              </Box>
              <ContentStyle>Impaac Foundation, Bengaluru, India</ContentStyle>
            </ReasonBox>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
