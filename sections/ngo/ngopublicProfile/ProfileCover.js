import React from 'react';
import PropTypes from 'prop-types';

// @mui
import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
// hooks
import useAuth from '../../../hooks/useAuth';
// components
import Image from '../../../components/Image';
import Iconify from '../../../components/Iconify';
import { DOMAIN } from '../../../config';
import { useSelector } from '../../../redux/store';

const ProfileCoverPic = styled('div')(({ theme }) => ({
  zIndex: 9,
  width: '100%',
}));

ProfileCover.propTypes = {
  myProfile: PropTypes.object,
};

export default function ProfileCover({ myProfile }) {
  return (
    <ProfileCoverPic>
      <Card
        sx={{
          height: { xs: 180, sm: 300, md: 400 },
        }}
      >
        {myProfile?.cover_image ? (
          <div className="cover-image">
            <img src={myProfile?.cover_image} alt="Cover" />
          </div>
        ) : (
          <Image
            src={myProfile?.cover_image}
            alt="profile cover"
            sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          />
        )}
      </Card>
    </ProfileCoverPic>
  );
}
