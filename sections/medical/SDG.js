import * as React from 'react';
import { Grid, Card, Typography, Container, Box, styled, Fade } from '@mui/material';
import { m } from 'framer-motion';
import Image from '../../components/Image';
import sdg from './catalogue_Pic/10.webp';
import Title from '../../components/catalogue/Title';

export default function SDG() {
  return (
    <m.div
      initial={{ x: '-100%' }}
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      variants={{
        visible: { x: 0 },
      }}
    >
      <Box sx={{ py: 4, px: { xs: 2, sm: 5, md: 10 } }}>
        <Fade in timeout={1500}>
          <Container>
            <Grid container spacing={1}>
              <Grid item xs={12} md={7} sx={{ my: 'auto' }}>
                <Title
                  text="Poverty Alleviation:"
                  sx={{ textAlign: { xs: 'center', md: 'left' }, color: 'rgb(57,127,183)' }}
                />
                <Card
                  sx={{
                    maxWidth: { md: '450px' },
                    p: 5,
                    borderRadius: '25px',
                    backgroundColor: 'rgb(57,127,183)',
                    my: 4,
                    color: '#ffffff',
                    fontSize: 19,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                  }}
                >
                  Engage in projects that address poverty-related challenges, such as skill development, livelihood
                  support, and basic needs assistance.
                </Card>
              </Grid>
              <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Image
                  component="img"
                  src={sdg}
                  alt="power"
                  sx={{ width: { sm: '70%', md: '100%' }, height: '100%', objectFit: 'fill' }}
                />
              </Grid>
            </Grid>
          </Container>
        </Fade>
      </Box>
    </m.div>
  );
}
