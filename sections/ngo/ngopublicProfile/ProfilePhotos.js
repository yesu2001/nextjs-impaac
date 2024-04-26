import React from 'react';
import { Box, Button, Card, CardContent, CardHeader, CardMedia, Modal, Stack, Typography, Grid } from '@mui/material';
import Image from '../../../components/Image';

function ProfileAbout({ myProfile, ngoCampaigns }) {
  const galleryList = ngoCampaigns?.map((campaign) => campaign.gallery);
  const getImages = galleryList?.map((item) => item.filter((image) => image.media_type === 'image'));
  const getPictures = getImages?.map((item) => item.map((pic) => pic.preview));

  return (
    <Card>
      <CardHeader title="Photos" />
      <Grid container spacing={2} my={2}>
        {getPictures.length < 1 && <Typography variant="text">No Photos</Typography>}
        {getPictures?.map((pic, index) => (
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Image src={pic} alt="pic" />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}

export default ProfileAbout;
