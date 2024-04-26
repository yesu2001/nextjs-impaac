import React from 'react';
import { Box, Card, Link, Skeleton, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Image from '../../../components/Image';
import useResponsive from '../../../hooks/useResponsive';
import { PATH_PAGE } from '../../../routes/paths';

function AllNgos({ data }) {
  const isMobile = useResponsive('down', 'md');

  return (
    <Link href={PATH_PAGE.ngoView(data?.ngo_id)} underline="none">
      <Card variant="outlined" sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', my: 3 }}>
        <Box sx={{ height: '250px', display: 'flex', justifyContent: 'center', p: 3 }}>
          {data?.image ? (
            <Image src={data?.image} alt={data?.image} sx={{ borderRadius: 2, width: '250px', height: '100%' }} />
          ) : (
            <Skeleton variant="rectangular" width="100%" height="100%" />
          )}
        </Box>
        <Box sx={{ flex: 1, p: 3 }}>
          {data?.name ? <Typography variant="h3">{data?.name}</Typography> : <Skeleton width="50%" height={70} />}
          {data?.address?.city ? (
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', color: grey[600] }}>
              <LocationOnOutlinedIcon sx={{ mr: 1, my: 1 }} />
              {data?.address?.city}, {data?.address?.country}
            </Typography>
          ) : (
            <Skeleton width="20%" height={30} />
          )}
          {data?.bio ? (
            <Typography variant="body1" sx={{ color: grey[600] }}>
              {data?.bio.substring(0, 300)}...
            </Typography>
          ) : (
            <>
              <Skeleton width="90%" />
              <Skeleton width="90%" />
              <Skeleton width="90%" />
            </>
          )}
        </Box>
      </Card>
    </Link>
  );
}

export default AllNgos;
