import React from 'react';
import { Box, Card, CardContent, CardHeader, Stack, Typography, styled } from '@mui/material';
import Iconify from '../../../components/Iconify';

const TagItem = styled('div')(() => ({
  outline: 'none',
  borderRadius: '20px',
  background: 'white',
  fontSize: '12px',
  padding: '3px 10px',
  margin: '5px 5px',
  minWidth: '35px',
  textAlign: 'center',
}));

function ProfileIntro({ myProfile }) {
  const { tags, bio, email, address, social_media } = myProfile;

  function randHex() {
    return (Math.floor(Math.random() * 56) + 200).toString(16);
  }

  function randomColor() {
    const color1 = randHex();
    const color2 = randHex();
    const color3 = randHex();
    return color1 + color2 + color3;
  }
  return (
    <Card>
      <CardHeader title="Ngo Details" />
      <CardContent>
        {myProfile?.eighty_g?.document && (
          <Stack direction={'row'} alignItems="center">
            <Iconify icon="eva:award-outline" color="gray" />
            <Typography variant="body2" sx={{ ml: 2 }}>
              80G certified
            </Typography>
          </Stack>
        )}
        <Stack direction={'row'} alignItems={'center'}>
          <Iconify icon="eva:pin-outline" color="gray" />
          <Typography variant="body" sx={{ ml: 2 }}>
            {address?.city}, {address?.country}
          </Typography>
        </Stack>
        <Stack direction={'row'} alignItems={'center'}>
          <Iconify icon="eva:email-outline" color="gray" />
          <Typography variant="body2" sx={{ ml: 2 }}>
            {email}
          </Typography>
        </Stack>
        {myProfile?.tags?.length > 0 && (
          <Stack direction={'row'} alignItems={'flex-start'}>
            <Iconify icon="eva:pricetags-outline" color="gray" />
            <Box sx={{ ml: 2.3, display: 'flex', flexWrap: 'wrap' }}>
              {tags?.map((data, index) => (
                <TagItem key={index} sx={{ textTransform: 'capitalize', background: `#${randomColor()}` }}>
                  {data}
                </TagItem>
              ))}
            </Box>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}

export default ProfileIntro;
