import React from 'react';
import { Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function DialogPopup({ open, handleClose, children }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={'xs'}
      sx={{
        '.css-1m9bonx-MuiBackdrop-root-MuiDialog-backdrop': {
          background: 'rgba(0,0,0,0.8)',
        },
      }}
    >
      <IconButton sx={{ position: 'absolute', top: 1, right: 1 }} onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
      {children}
    </Dialog>
  );
}

export default DialogPopup;
