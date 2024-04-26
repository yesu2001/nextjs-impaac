import * as React from 'react';
import { Grid, Card, Typography, Container, Box, styled, Fade } from '@mui/material';
import { m } from 'framer-motion';
import useSettings from '../../hooks/useSettings';
import Image from '../../components/Image';
import image1 from './catalogue_Pic/5.webp';

export default function Power() {
  const { themeStretch } = useSettings();

  return (
    <m.div
      initial={{ x: '-100%' }}
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      variants={{
        visible: { x: 0 },
      }}
    >
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center' }}>
          <Box
            sx={{
              flex: 0.6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: { xs: '100%', sm: '100%', md: '80%' },
            }}
          >
            {data.map((item) => (
              <Box key={item.title} sx={{ my: 2, width: '80%' }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: 20, sm: 30, md: 40 },
                    textAlign: { xs: 'center', sm: 'left', md: 'left' },
                    color: '#397FB7',
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: { xs: 15, sm: 18, md: 20 },
                    textAlign: { xs: 'center', sm: 'left' },
                    color: '#397FB7',
                  }}
                >
                  {item.content}
                </Typography>
              </Box>
            ))}
          </Box>
          <Image src={image1} alt="hands image" sx={{ flex: 0.5 }} />
        </Box>
      </Container>
    </m.div>
  );
}

const data = [
  {
    title: 'Social Impact:',
    content: 'Make a tangible difference in the lives of individuals and communities in need.',
  },
  {
    title: 'Personal Growth:',
    content: 'Develop new skills, gain diverse experiences, and expand your perspective on societal challenges.',
  },
  {
    title: 'Team Building:',
    content:
      'For corporate volunteers, strengthen team bonds and enhance collaboration through shared experiences in volunteer programs.',
  },
  {
    title: 'Recognition:',
    content: 'Receive certificates and tokens of appreciation for your commitment to creating positive change.',
  },
];
