import React from 'react';
import { Box, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';
import Iconify from '../../../components/Iconify';

function ProfileTeam({ myProfile }) {
  const { social_media } = myProfile;
  return (
    <Card>
      <CardHeader title="Team" />
      <CardContent>
        <Stack direction={'row'} alignItems={'center'} spacing={4}>
          <Typography variant="body1" sx={{ flex: { md: 0.4 }, display: 'flex', alignItems: 'center', gap: 1 }}>
            Rahul Kumar
            <Iconify icon="devicon:linkedin" sx={{ width: 15 }} />
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray' }}>
            Founder
          </Typography>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={4}>
          <Typography variant="body1" sx={{ flex: { md: 0.4 }, display: 'flex', alignItems: 'center', gap: 1 }}>
            Akshay
            <Iconify icon="devicon:linkedin" sx={{ width: 15 }} />
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray' }}>
            Coordinator
          </Typography>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={4}>
          <Typography variant="body1" sx={{ flex: { md: 0.4 }, display: 'flex', alignItems: 'center', gap: 1 }}>
            Varun
            <Iconify icon="devicon:linkedin" sx={{ width: 15 }} />
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray' }}>
            Director
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProfileTeam;
