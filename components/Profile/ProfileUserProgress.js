import React, { useState } from 'react';
import { Box, Button, Card, Link, Modal, Typography, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { blue, green, orange, red } from '@mui/material/colors';
import UserOnboarding from '../../sections/@dashboard/user/create/UserOnboarding';
import useAuth from '../../hooks/useAuth';
import { NgoDefaultValue } from '../../sections/@dashboard/ngo/create/NgoDefaultValue';
import useResponsive from '../../hooks/useResponsive';
import { UserDefaultValue } from '../../sections/@dashboard/user/create/UserDefaultValue';

const CustomBtn = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  fontSize: 14,
  textAlign: 'center',
  background: blue[800],
  color: 'white',
  padding: '0 5px',
  borderRadius: 3,
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  height: '98%',
  p: {
    xs: 2,
    md: 4,
  },
  width: {
    xs: '95%',
    md: '80%',
  },
  overflowY: { xs: 'scroll', sm: 'scroll', md: 'auto' },
};

export default function ProfileUserProgress({ profile, percent, handleHide }) {
  const { user, userProfile } = useAuth();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const statusColors = {
    pending: blue,
    verified: green,
    submitted: orange,
    rejected: red,
  };

  const status = userProfile?.kyc_status;
  const color = statusColors[status] || 'white';
  const bgColor = statusColors[status] || '#385F96';

  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        p: 1,
        mb: 2,
        borderRadius: '10px',
        background: bgColor[50],
        color: color[800],
        fontWeight: 'bold',
      }}
    >
      {userProfile?.kyc_status === 'submitted' && (
        <Typography variant="body2" sx={{ textAlign: 'center', wordSpacing: 2, fontWeight: 'bold' }}>
          Documents submitted, expect verification confirmation within 48 hours via phone.
        </Typography>
      )}
      {userProfile?.kyc_status === 'verified' && (
        <Typography variant="body2" sx={{ textAlign: 'center', wordSpacing: 2, fontWeight: 'bold' }}>
          Congratulations! You have successfully completed your KYC!
        </Typography>
      )}
      {userProfile?.kyc_status === 'pending' && (
        <>
          <Typography variant="body2" sx={{ textAlign: 'center', wordSpacing: 2, fontWeight: 'bold' }}>
            You have filled {Math.round(percent || 0)}% of your profile.
          </Typography>
          <CustomBtn onClick={handleOpen}>Click here</CustomBtn>
          <Typography variant="body2" sx={{ textAlign: 'center', wordSpacing: 2, fontWeight: 'bold' }}>
            to complete.
          </Typography>
        </>
      )}

      {userProfile?.kyc_status === 'rejected' && (
        <>
          <Typography variant="body2" sx={{ textAlign: 'center', wordSpacing: 2, fontWeight: 'bold' }}>
            Your KYC is rejected!
          </Typography>
          <CustomBtn onClick={handleOpen}>Re-submit here</CustomBtn>
        </>
      )}
      <Modal open={open} onClose={handleClose} s>
        <Box sx={style}>
          <UserOnboarding handleClose={handleClose} ngo={profile} setOpen={setOpen} />
        </Box>
      </Modal>
    </Card>
  );
}
