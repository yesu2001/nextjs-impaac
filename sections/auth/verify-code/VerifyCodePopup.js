import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Container, Dialog, DialogTitle, IconButton, Typography } from '@mui/material';
import { getAuth, signInWithPhoneNumber } from 'firebase/auth';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import VerifyCodeForm from './VerifyCodeForm';

export default function VerifyCodePopup({ open, onClose, user }) {
  const [counter, setCounter] = useState(60);
  const { enqueueSnackbar } = useSnackbar();
  const auth = getAuth();

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter, user]);

  const resendSubmit = async (e) => {
    e.preventDefault();

    const appVerifier = window.recaptchaVerifier;
    try {
      await signInWithPhoneNumber(auth, user.phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setCounter(60);
        })
        .catch(({ message }) => {
          enqueueSnackbar(message, {
            type: 'error',
          });
        });
    } catch {
      enqueueSnackbar('Enter Valid Email Or Phone Number', {
        type: 'error',
      });
    }
  };

  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose}>
      <DialogTitle sx={{ direction: 'rtl', p: 0 }}>
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Container sx={{ p: 2 }}>
        <Typography variant="h3" paragraph>
          Enter Confirmation code
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>Enter the 6-digit code we send to {user?.phoneNumber}.</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          It may take up to a minute for you to receive this code
        </Typography>

        <Box sx={{ mt: 5, mb: 3 }}>
          <VerifyCodeForm user={user} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {counter !== 0 && <span style={{ color: 'green', fontWeight: 'bold' }}> 00:{counter}s</span>}
          {counter === 0 && (
            <Typography variant="body2">
              Don’t have a code? &nbsp;
              <Button variant="subtitle2" onClick={resendSubmit}>
                Resend code
              </Button>
            </Typography>
          )}
        </Box>
      </Container>
    </Dialog>
  );
}
