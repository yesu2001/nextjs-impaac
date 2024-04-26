import React, { useState } from 'react';
import { Box, Button, Card, Modal, Typography, styled } from '@mui/material';
import { blue, green, grey, orange, red } from '@mui/material/colors';
import NgoOnboarding from '../../sections/@dashboard/ngo/create/NgoOnboarding';
import useAuth from '../../hooks/useAuth';
import { NgoDefaultValue } from '../../sections/@dashboard/ngo/create/NgoDefaultValue';

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

export default function ProfileNgoProgress({ profile }) {
  const { user, userProfile } = useAuth();
  const [open, setOpen] = useState(!user.ngoId);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fieldCount = Object.values(NgoDefaultValue(profile));

  const arr1 = fieldCount?.filter((field) => field !== undefined && field !== '');
  // percent of completion
  const percent = (arr1?.length / fieldCount?.length) * 100;

  const statusColors = {
    pending: blue,
    verified: green,
    submitted: orange,
    rejected: red,
  };

  const status = userProfile?.kyc_status;
  const color = statusColors[status] || blue;
  const bgColor = statusColors[status] || blue;

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
      }}
    >
      {userProfile?.kyc_status === 'submitted' && (
        <Typography variant="body2" sx={{ textAlign: 'center', wordSpacing: 2, fontWeight: 600 }}>
          Documents submitted, expect verification confirmation within 48 hours via phone.
        </Typography>
      )}
      {userProfile?.kyc_status === 'verified' && (
        <Typography variant="body2" sx={{ textAlign: 'center', wordSpacing: 2, fontWeight: 600 }}>
          🎉 Congratulations! You have successfully completed your KYC!
        </Typography>
      )}
      {userProfile?.kyc_status === 'pending' && (
        <>
          <Typography variant="body2" sx={{ textAlign: 'center', wordSpacing: 2, fontWeight: 600 }}>
            You have filled {Math.round(percent || 0)}% of your profile.
          </Typography>
          <CustomBtn onClick={handleOpen}>Click here</CustomBtn>
          <Typography variant="body2" sx={{ textAlign: 'center', wordSpacing: 2, fontWeight: 600 }}>
            to complete.
          </Typography>
        </>
      )}

      {userProfile?.kyc_status === 'rejected' && (
        <>
          <Typography variant="body2" sx={{ textAlign: 'center', wordSpacing: 2, fontWeight: 600 }}>
            Your KYC is rejected!
          </Typography>
          <CustomBtn onClick={handleOpen}>Re-submit here</CustomBtn>
        </>
      )}
      <Modal open={open} onClose={handleClose} s>
        <Box sx={style}>
          <NgoOnboarding handleClose={handleClose} ngo={profile} setOpen={setOpen} />
        </Box>
      </Modal>
    </Card>
  );
}
