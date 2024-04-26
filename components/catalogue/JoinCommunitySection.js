import React from 'react';
import { Box, Stack, Button } from '@mui/material';
import Image from '../Image';
import Title from './Title';

const JoinCommunitySection = () => (
    <Stack spacing={3} mt={4}>
      <Title text='Join the Impaac Community' sx={{ color: 'rgb(57,127,183)', textAlign: { xs: 'center', md: 'left' }, width: { md: '80%' } }} />

      {/* Rest of the content */}
      {/* You can pass additional props if needed */}
    </Stack>
  );

export default JoinCommunitySection;
