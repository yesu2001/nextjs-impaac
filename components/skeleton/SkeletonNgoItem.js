import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Box, Card } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';

const SkeletonNgoItem = () => {
  const isMobile = useResponsive('down', 'md');

  return (
    <Card sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', my: 3 }}>
      <Box sx={{ flex: 0.3 }}>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Box>
      <Box sx={{ flex: 1, p: 4 }}>
        <Skeleton width="50%" height={70} />
        <Skeleton width="20%" height={30} />
        <Skeleton width="90%" sx={{ mt: 4 }} />
        <Skeleton width="90%" />
        <Skeleton width="90%" />
      </Box>
    </Card>
  );
};

export default SkeletonNgoItem;
