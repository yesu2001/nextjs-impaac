import React from 'react';
import { Modal, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// ----------------------------------------------------------------
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#fff',
  boxShadow: 24,
  padding: '20px',
  paddingTop: '25px',
  border: 'none',
  outline: 'none',
  borderRadius: 1,
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  alignItems: 'center',
  textAlign: { xs: 'center', md: 'left' },
  gap: 2,
  width: {
    xs: '90%',
    sm: '60%',
    md: 'auto',
  },
};
//   ----------------------------------------------------------------
export default function PopUp({ open, onClose, children }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiModal-backdrop': {
          backgroundColor: 'rgba(0, 0, 0, 0.7);',
        },
        '.css-1m9bonx-MuiBackdrop-root-MuiDialog-backdrop': {
          background: 'rgba(0,0,0,0.8)',
        },
        '& > .MuiBackdrop-root': {
          background: 'rgba(0,0,0,0.6)',
        },
      }}
    >
      <Box sx={style}>
        <CloseIcon onClick={onClose} sx={{ cursor: 'pointer', position: 'absolute', top: 4, right: 6 }} />

        {children}
      </Box>
    </Modal>
  );
}
