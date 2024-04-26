import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

function ProfileAbout({ myProfile }) {
  return (
    <Card>
      <CardHeader title="About" />
      <CardContent>
        <Typography variant="body">{myProfile?.bio}</Typography>
      </CardContent>
    </Card>
  );
}

export default ProfileAbout;
