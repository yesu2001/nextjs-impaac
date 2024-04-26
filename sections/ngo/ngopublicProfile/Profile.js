import React from 'react';
import { Box, Grid, Stack } from '@mui/material';
import ProfileIntro from './ProfileIntro';
import ProfileCampaigns from './ProfileCampaigns';
import ProfileAbout from './ProfileAbout';
import ProfileCertificates from './ProfileCertificates';
import ProfileSocial from './ProfileSocial';

function Profile({ myProfile, ngoCampaigns }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={5}>
        <Stack spacing={3}>
          <ProfileAbout myProfile={myProfile} />
          <ProfileIntro myProfile={myProfile} />
          <ProfileCertificates myProfile={myProfile} />
          {ngoCampaigns?.length > 0 && <ProfileSocial myProfile={myProfile} />}
        </Stack>
      </Grid>

      <Grid item xs={12} md={7}>
        <Stack spacing={3}>
          <ProfileCampaigns ngoCampaigns={ngoCampaigns} />
          {ngoCampaigns?.length < 1 && <ProfileSocial myProfile={myProfile} />}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Profile;
