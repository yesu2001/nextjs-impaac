import React from 'react';
import { Box, Card, CardContent, CardHeader, Stack, Typography, Link } from '@mui/material';
import Iconify from '../../../components/Iconify';

function ProfileSocial({ myProfile }) {
  const { social_media } = myProfile;
  return (
    <Card>
      <CardHeader title="Social Media" />
      <CardContent>
        <Stack direction={'row'} spacing={4} alignItems={'center'}>
          <a href={social_media?.instagram} target="_blank" rel="noreferrer">
            <Iconify icon="skill-icons:instagram" />
          </a>
          <a href={social_media?.facebook} target="_blank" rel="noreferrer">
            <Iconify icon="logos:facebook" />
          </a>
          <a href={social_media?.website} target="_blank" rel="noreferrer">
            <Iconify icon="mdi:web" />
          </a>
          <a href={social_media?.linkedin} target="_blank" rel="noreferrer">
            <Iconify icon="devicon:linkedin" />
          </a>
          <a href={social_media?.twitter} target="_blank" rel="noreferrer">
            <Iconify icon="logos:twitter" />
          </a>
        </Stack>
        {/* <Stack direction={'row'} alignItems={'center'}>
          <Iconify icon="skill-icons:instagram" />
          <a href={social_media?.instagram} target="_blank" rel="noreferrer">
            <Typography variant="body2" sx={{ ml: 2, color: social_media?.instagram ? 'black' : 'gray' }}>
              {social_media?.instagram || 'Not Available'}
            </Typography>
          </a>
        </Stack>
        <Stack direction={'row'} alignItems={'center'}>
          <Iconify icon="logos:facebook" />
          <a href={social_media?.facebook} target="_blank" rel="noreferrer">
            <Typography variant="body2" sx={{ ml: 2, color: social_media?.facebook ? 'black' : 'gray' }}>
              {social_media?.facebook || 'Not Available'}
            </Typography>
          </a>
        </Stack>
        <Stack direction={'row'} alignItems={'center'}>
          <Iconify icon="mdi:web" color="gray" />
          <a href={social_media?.website} target="_blank" rel="noreferrer">
            <Typography variant="body2" sx={{ ml: 2, color: social_media?.website ? 'black' : 'gray' }}>
              {social_media?.website || 'Not Available'}
            </Typography>
          </a>
        </Stack>
        <Stack direction={'row'} alignItems={'center'}>
          <Iconify icon="devicon:linkedin" />
          <a href={social_media?.linkedin} target="_blank" rel="noreferrer">
            <Typography variant="body2" sx={{ ml: 2, color: social_media?.linkedin ? 'black' : 'gray' }}>
              {social_media?.linkedin || 'Not Available'}
            </Typography>
          </a>
        </Stack>
        <Stack direction={'row'} alignItems={'center'}>
          <Iconify icon="logos:twitter" />
          <a href={social_media?.twitter} target="_blank" rel="noreferrer">
            <Typography variant="body2" sx={{ ml: 2, color: social_media?.twitter ? 'black' : 'gray' }}>
              {social_media?.twitter || 'Not Available'}
            </Typography>
          </a>
        </Stack> */}
      </CardContent>
    </Card>
  );
}

export default ProfileSocial;
