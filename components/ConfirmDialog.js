import PropTypes from 'prop-types';
// @mui
import { Dialog, DialogTitle, DialogActions } from '@mui/material';

// ----------------------------------------------------------------------

ConfirmDialog.propTypes = {
  title: PropTypes.node.isRequired,
  subheader: PropTypes.node,
  open: PropTypes.bool,
  actions: PropTypes.node,
  onClose: PropTypes.func,
};

export default function ConfirmDialog({ title, subheader, actions, open, onClose }) {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      onClose={onClose}
      sx={{
        '.css-1m9bonx-MuiBackdrop-root-MuiDialog-backdrop': {
          background: 'rgba(0,0,0,0.8)',
        },
      }}
    >
      <DialogTitle>
        {title}
        {subheader}
      </DialogTitle>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
}