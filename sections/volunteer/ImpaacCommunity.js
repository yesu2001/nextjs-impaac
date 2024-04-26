import React, { forwardRef } from 'react';
import { Container, Stack, Grid, Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from '../../components/Image';
import phone from '../../assets/phone.png';
import mail from '../../assets/mail.png';
import web from '../../assets/web.png';
import company from '../../assets/company.png';
import community from './catalogue_Pic/1.webp';
import Title from '../../components/catalogue/Title';

const ContentStyle = styled(Typography)(({ theme }) => ({
  fontSize: { xs: 16, sm: 20 },
  marginLeft: 10,
  flex: 0.8,
}));

const ReasonBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: { xs: 'center', md: 'flex-start' },
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
      <Grid
        container
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 10, px: { md: 5 } }}
        spacing={5}
      >
        <Grid item xs={12} md={5}>
          <Image component="img" src={community} />
        </Grid>

        <Grid item xs={12} sm={12} md={7} lg={6} spacing={3}>
          <Title
            text="Join the Impaac Community"
            sx={{ color: 'rgb(57,127,183)', textAlign: { xs: 'center', md: 'left' }, width: { md: '80%' } }}
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: { xs: 'center', md: 'flex-start' },
              mt: 2,
            }}
          >
            <CustomButton>
              Contact Us{' '}
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ffffff/external-tanah-basah-basic-outline-tanah-basah/24/external-right-arrow-arrows-tanah-basah-basic-outline-tanah-basah.png"
                alt="external-right-arrow-arrows-tanah-basah-basic-outline-tanah-basah"
              />
            </CustomButton>
          </Box>
          <Stack spacing={3} mt={4} sx={{ mx: { sm: 5, md: 0, xs: 5 } }}>
            <ReasonBox>
              <Box flex={{ xs: 0.2, sm: 0.1 }}>
                <Image
                  alt={'mail'}
                  src={mail}
                  sx={{ width: { xs: '90%', sm: '90%' }, background: 'rgb(57,127,183)', borderRadius: '50%', p: 1 }}
                />
              </Box>
              <ContentStyle>connect@impaac.org</ContentStyle>
            </ReasonBox>

            <ReasonBox>
              <Box flex={{ xs: 0.2, sm: 0.1 }}>
                <Image
                  alt={'phone icon'}
                  src={phone}
                  sx={{ width: { xs: '90%', sm: '90%' }, background: 'rgb(57,127,183)', borderRadius: '50%', p: 1 }}
                />
              </Box>
              <ContentStyle>+91-8130540906</ContentStyle>
            </ReasonBox>

            <ReasonBox>
              <Box flex={{ xs: 0.2, sm: 0.1 }}>
                <Image
                  alt={'web icon'}
                  src={web}
                  sx={{ width: { xs: '90%', sm: '90%' }, background: 'rgb(57,127,183)', borderRadius: '50%', p: 1 }}
                />
              </Box>
              <ContentStyle>www.impaac.org</ContentStyle>
            </ReasonBox>

            <ReasonBox>
              <Box flex={{ xs: 0.2, sm: 0.1 }}>
                <Image
                  alt={'company icon'}
                  src={company}
                  sx={{ width: { xs: '90%', sm: '90%' }, background: 'rgb(57,127,183)', borderRadius: '50%', p: 1 }}
                />
              </Box>
              <ContentStyle>Bengaluru, India - 560064</ContentStyle>
            </ReasonBox>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
