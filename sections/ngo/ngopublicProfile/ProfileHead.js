import React from 'react';
// @mui
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Avatar } from '@mui/material';
// import useAuth from '../../../hooks/useAuth';
// components
import MyAvatar from '../../../components/MyAvatar';
import Image from '../../../components/Image';
import Iconify from '../../../components/Iconify';
import { DOMAIN } from '../../../config';
import { useSelector } from '../../../redux/store';
import ProfileDonate from './ProfileDonate';
import PaymentPopUp from '../../campaign/campaign-payment/PaymentPopUp';

const ProfileInfo = styled('div')(({ theme }) => ({
  zIndex: 99,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  marginTop: theme.spacing(-5),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: theme.spacing(-10),
    left: theme.spacing(3),
  },
}));

const DonateBtn = styled(Button)(({ theme }) => ({
  background: red[400],
  fontSize: 16,
  color: '#FFF',
  '&.active': {
    background: '#ED2B2A',
  },
  '&:hover': {
    background: '#ED2B2A',
    color: '#FFF',
  },
}));

export default function ProfileHead({ myProfile }) {
  const [open, setOpen] = React.useState(false);
  const handleModal = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const makeUrl = 'ngo';
  const shareLink = `${'www.impaac.org'}/${makeUrl}/${myProfile?.ngo_id}`;

  return (
    <ProfileInfo>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-end' }}>
        <Avatar
          src={myProfile?.image}
          sx={{
            mx: 'auto',
            borderWidth: 4,
            borderStyle: 'solid',
            borderColor: 'common.white',
            width: { xs: 80, md: 180 },
            height: { xs: 80, md: 180 },
          }}
        />
        <Box
          sx={{
            width: '100%',
            height: '100%',
            ml: { md: 3 },
            mt: { xs: 1, md: 0 },
            mb: { md: myProfile?.name?.length > 33 ? 0 : 2 },
            color: 'common.white',
            textAlign: { xs: 'center', md: 'left' },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              width: {
                xs: '100%',
                md: myProfile?.name?.length > 30 ? '80%' : '100%',
              },
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'start' },
              textTransform: 'capitalize',
              color: 'black',
            }}
          >
            {myProfile?.name?.split(' ').map((word, index, array) => (
              <React.Fragment key={index}>
                {index === array.length - 1 ? (
                  <span style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', alignItems: 'center' }}>
                    {word}
                    <Iconify icon="mdi:tick-decagram" color="#458eff" />
                  </span>
                ) : (
                  <span style={{ margin: '0 5px' }}>{word} </span>
                )}
              </React.Fragment>
            ))}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ mb: { md: 3 }, mt: { xs: 2, md: 0 }, mr: { xs: 0, md: 5 }, display: 'flex', justifyContent: 'center' }}
      >
        <DonateBtn onClick={handleModal} sx={{ px: 2, width: 160 }}>
          <Iconify icon="eva:heart-outline" mr={1} color="white" width={16} height={16} /> Support Us
        </DonateBtn>
        {/* <ProfileDonate open={open} onClose={handleClose} /> */}
        <PaymentPopUp open={open} onClose={handleClose} campaign={myProfile.base_campaign} />
      </Box>
    </ProfileInfo>
  );
}
