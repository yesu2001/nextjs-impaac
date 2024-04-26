import { useSnackbar } from 'notistack';
import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import { Box, Button, Card, IconButton, Typography } from '@mui/material';
// utils
import cssStyles from '../../../../utils/cssStyles';
// hooks
import useAuth from '../../../../hooks/useAuth';
// components
import MyAvatar from '../../../../components/MyAvatar';
import Image from '../../../../components/Image';
import Iconify from '../../../../components/Iconify';
import { FormProvider, RHFSelect, RHFTextField, RHFUploadAvatar } from '../../../../components/hook-form';
import { UploadImage } from '../../../../components/upload/UploadOnCloud';
import Avatar from '../../../../components/Avatar';
import NgoImageEditModel from '../create/NgoImageEditModel';

// ----------------------------------------------------------------------

const CustomButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  zIndex: 100,
  top: '100px',
  right: '100px',
  background: 'red',
}));

const RootStyle = styled('div')(({ theme }) => ({
  '&:before': {
    // ...cssStyles().bgBlur({ blur: 2, color: theme.palette.primary.darker }),
    top: 0,
    zIndex: 9,
    content: "''",
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
}));

const InfoStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  zIndex: 99,
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    right: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    left: theme.spacing(3),
    bottom: theme.spacing(1),
  },
}));

const ProfileInfo = styled('div')(({ theme }) => ({
  zIndex: 99,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  marginTop: theme.spacing(-10),
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    left: theme.spacing(3),
  },
}));

// ----------------------------------------------------------------------

ProfileCover.propTypes = {
  profile: PropTypes.object,
};

export default function ProfileCover({ profile, isNgo }) {
  const { user, ngoProfile, updateNgoProfile } = useAuth();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ProfileInfo>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-end' }}>
        <Avatar
          src={ngoProfile?.image}
          sx={{
            mx: 'auto',
            borderWidth: 4,
            borderStyle: 'solid',
            borderColor: 'common.white',
            width: { xs: 100, md: 150 },
            height: { xs: 100, md: 150 },
          }}
        />
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
            variant="h3"
            sx={{ display: 'flex', alignItems: 'center', textTransform: 'capitalize', color: 'black' }}
          >
            {profile?.name}
          </Typography>
        </Box>
      </Box>
    </ProfileInfo>

  )
}

// {/* <IconButton */}
// onClick={handleOpen}
//   sx={{ color: 'black', zIndex: 999, position: 'absolute', top: '65px', right: { xs: '75px', md: '75px' } }}
// >
//   <EditIcon />
// </IconButton>
// {/* <NgoImageEditModel open={open} handleClose={handleClose} profile={profile} name="image" /> */}
// old avatar
/* <MyAvatar
sx={{
  mx: 'auto',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'common.white',
    width: { xs: 80, md: 128 },
    height: { xs: 80, md: 128 },
  }}
  /> */

// import PropTypes from 'prop-types';
// // @mui
// import { styled } from '@mui/material/styles';
// import { Box, Typography } from '@mui/material';
// // utils
// import cssStyles from '../../../../utils/cssStyles';
// // hooks
// import useAuth from '../../../../hooks/useAuth';
// // components
// import MyAvatar from '../../../../components/MyAvatar';
// import Image from '../../../../components/Image';

// // ----------------------------------------------------------------------

// const RootStyle = styled('div')(({ theme }) => ({
//   '&:before': {
//     ...cssStyles().bgBlur({ blur: 2, color: theme.palette.primary.darker }),
//     top: 0,
//     zIndex: 9,
//     content: "''",
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//   },
// }));

// const InfoStyle = styled('div')(({ theme }) => ({
//   left: 0,
//   right: 0,
//   zIndex: 99,
//   position: 'absolute',
//   marginTop: theme.spacing(5),
//   [theme.breakpoints.up('md')]: {
//     right: 'auto',
//     display: 'flex',
//     alignItems: 'center',
//     left: theme.spacing(3),
//     bottom: theme.spacing(3),
//   },
// }));

// // ----------------------------------------------------------------------

// ProfileCover.propTypes = {
//   myProfile: PropTypes.object,
// };

// export default function ProfileCover({ myProfile }) {
//   const { user } = useAuth();

//   const { position, cover } = myProfile;

//   return (
//     <RootStyle>
//       <InfoStyle>
//         <MyAvatar
//           sx={{
//             mx: 'auto',
//             borderWidth: 2,
//             borderStyle: 'solid',
//             borderColor: 'common.white',
//             width: { xs: 80, md: 128 },
//             height: { xs: 80, md: 128 },
//           }}
//         />
//         <Box
//           sx={{
//             ml: { md: 3 },
//             mt: { xs: 1, md: 0 },
//             color: 'common.white',
//             textAlign: { xs: 'center', md: 'left' },
//           }}
//         >
//           <Typography variant="h4">{user?.displayName}</Typography>
//           <Typography sx={{ opacity: 0.72 }}>{position}</Typography>
//         </Box>
//       </InfoStyle>
//       <Image alt="profile cover" src={cover} sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
//     </RootStyle>
//   );
// }
