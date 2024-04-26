import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, IconButton, Typography } from '@mui/material';
import { blue, green, orange, red } from '@mui/material/colors';
import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';
// hooks
import useAuth from '../../hooks/useAuth';
// components
import Iconify from '../Iconify';
import Avatar from '../Avatar';
import UserImageEditModel from '../../sections/@dashboard/user/create/UserImageEditModel';
import NgoImageEditModel from '../../sections/@dashboard/ngo/create/NgoImageEditModel';

// ----------------------------------------------------------------------

const ProfileInfo = styled('div')(({ theme }) => ({
  zIndex: 99,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  marginTop: theme.spacing(-5),
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
}));

// ----------------------------------------------------------------------

ProfileCover.propTypes = {
  profile: PropTypes.object,
};

export default function ProfileCover({ profile }) {
  const { user, ngoProfile, userProfile } = useAuth();
  const isNgo = user?.userType?.ngo;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const displayName = profile?.name || profile?.displayName;

  const StatusIndicator = ({ status }) => {
    const statusColors = {
      pending: blue,
      verified: green,
      submitted: orange,
      rejected: red,
    };

    const color = statusColors[status] || blue;
    const kycStatus = () => {
      if (status === 'done' || status === 'verified') return 'Verified';
      if (status === 'submitted') return 'In-Verification';
      if (status === 'rejected') return 'Rejected';
      return 'Pending';
    };
    return (
      <span
        style={{
          fontWeight: 'bold',
          borderRadius: '6px',
          padding: '3px 10px',
          color: color[800],
          backgroundColor: color[50],
        }}
      >
        {kycStatus()}
      </span>
    );
  };

  return (
    <ProfileInfo>
      <Box
        sx={{
          flex: 0.8,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-end' },
          pb: 2,
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Avatar
            src={ngoProfile?.image || profile?.photo_url || profile?.image}
            sx={{
              mx: { xs: 'auto', md: 0 },
              borderWidth: 4,
              borderStyle: 'solid',
              borderColor: 'common.white',
              width: { xs: 100, md: 150 },
              height: { xs: 100, md: 150 },
              fontSize: { xs: 40, md: 80 },
            }}
          >
            {(!ngoProfile?.image || !profile?.photo_url || !profile?.image) && displayName?.charAt(0)}
          </Avatar>
          <IconButton
            onClick={handleOpen}
            sx={{
              color: 'black',
              zIndex: 999,
              position: 'absolute',
              bottom: 0,
              right: 0,
              transition: 'all 0.5 ease',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: 'white',
              },
            }}
          >
            <PhotoCameraRoundedIcon />
          </IconButton>
          {isNgo ? (
            <NgoImageEditModel open={open} handleClose={handleClose} profile={ngoProfile} label={'profile_image'} />
          ) : (
            <UserImageEditModel open={open} handleClose={handleClose} profile={userProfile} label={'profile_image'} />
          )}
        </Box>
        <Box
          sx={{
            ml: { md: 3 },
            mt: { xs: 1, md: 0 },
            mb: { md: 1 },
            color: 'common.white',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            variant={displayName?.length > 30 || displayName?.length > 30 ? 'h5' : 'h3'}
            sx={{ display: 'flex', alignItems: 'center', textTransform: 'capitalize', color: 'black' }}
          >
            {displayName}{' '}
            {userProfile?.kyc_status === 'verified' && <Iconify icon="mdi:tick-decagram" color="#458eff" />}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 0.2,
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bold',
          mb: { xs: 2, sm: 2, md: 0 },
          px: 2,
          borderRadius: 1,
          mt: { md: 8 },
        }}
      >
        <Typography variant="caption">
          KYC Status : <StatusIndicator status={userProfile?.kyc_status} />
        </Typography>
      </Box>
    </ProfileInfo>
  );
}
