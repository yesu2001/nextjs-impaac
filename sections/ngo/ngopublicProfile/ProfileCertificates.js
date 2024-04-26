import React from 'react';
import { Box, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';
import Iconify from '../../../components/Iconify';

function ProfileCertificates({ myProfile }) {
  return (
    <Card>
      <CardHeader title="Registration Details" />
      <CardContent>
        {myProfile?.pan_card?.number && (
          <Stack direction={'row'} alignItems="center" mb={1}>
            <Typography
              variant="body2"
              sx={{ flex: 0.2, display: 'flex', alignItems: 'center', gap: 1, color: 'gray' }}
            >
              <Iconify icon={'ph:file'} sx={{ width: 20 }} />
              PAN
            </Typography>
            <Typography
              variant="body1"
              sx={{ flex: 0.8, ml: 2, color: myProfile?.pan_card?.number ? 'black' : 'gray' }}
            >
              {myProfile?.pan_card?.number ? myProfile?.pan_card?.number : 'Not Available'}
            </Typography>
          </Stack>
        )}
        {myProfile?.twelve_a?.number && (
          <Stack direction={'row'} alignItems="center" mb={1}>
            <Typography
              variant="body2"
              sx={{ flex: 0.2, display: 'flex', alignItems: 'center', gap: 1, color: 'gray' }}
            >
              <Iconify icon={'ph:file'} sx={{ width: 20 }} />
              12A
            </Typography>
            <Typography
              variant="body1"
              sx={{ flex: 0.8, ml: 2, color: myProfile?.twelve_a?.number ? 'black' : 'gray' }}
            >
              {myProfile?.twelve_a?.number ? myProfile?.twelve_a?.number : 'Not Available'}
            </Typography>
          </Stack>
        )}
        {myProfile?.eighty_g?.number && (
          <Stack direction={'row'} alignItems="center" mb={1}>
            <Typography
              variant="body2"
              sx={{ flex: 0.2, display: 'flex', alignItems: 'center', gap: 1, color: 'gray' }}
            >
              <Iconify icon={'ph:file'} sx={{ width: 20 }} />
              80G
            </Typography>
            <Typography
              variant="body1"
              sx={{ flex: 0.8, ml: 2, color: myProfile?.eighty_g?.number ? 'black' : 'gray' }}
            >
              {myProfile?.eighty_g?.number ? myProfile?.eighty_g?.number : 'Not Available'}
            </Typography>
          </Stack>
        )}
        {myProfile?.fcra?.number && (
          <Stack direction={'row'} alignItems="center" mb={1}>
            <Typography
              variant="body2"
              sx={{ flex: 0.2, display: 'flex', alignItems: 'center', gap: 1, color: 'gray' }}
            >
              <Iconify icon={'ph:file'} sx={{ width: 20 }} />
              FCRA
            </Typography>
            <Typography variant="body1" sx={{ flex: 0.8, ml: 2, color: myProfile?.fcra?.number ? 'black' : 'gray' }}>
              {myProfile?.fcra?.number ? myProfile?.fcra?.number : 'Not Available'}
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}

export default ProfileCertificates;
