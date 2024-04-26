import React from 'react';
import { Box, Typography } from '@mui/material';

const Title = ({ text, sx}) => (
    <Box sx={{ ...sx }}>
      <Typography variant='h2'>{text}</Typography>
    </Box>
  );

export default Title;