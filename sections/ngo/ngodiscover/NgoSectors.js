import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

function Sectors() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3">Explore Different Sectors</Typography>
      <Stack>sectors</Stack>
    </Box>
  );
}

export default Sectors;
