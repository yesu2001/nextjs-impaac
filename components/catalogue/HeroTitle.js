import React from 'react';
import { Box, Typography } from '@mui/material';

const HeroTitle = ({ text, sx }) => (
    <Box sx={{ ...sx }}>
      <Typography fontSize={{ xs: 30, sm: 50, md: 80 }} fontWeight={800} lineHeight={1.2} letterSpacing={-1.5}>
        {text}
      </Typography>
    </Box>
  );

export default HeroTitle;
