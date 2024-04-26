import React, { useState } from 'react';
import { useSnackbar } from 'notistack';

import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { currencies } from '../../../_mock/currencies';
import PaytmButton from '../../payment/Paytm/PaytmButton';
import Paypal from '../../payment/Paypal/PaypalButton';
import RazorpayButton from '../../payment/Razorpay/RazorpayButton';
import useAuth from '../../../hooks/useAuth';
import { useSelector, useDispatch } from '../../../redux/store';
import PaymentInfo from '../../campaign/campaign-payment/PaymentInfo';
import PaymentLoginBox from '../../campaign/campaign-payment/PaymentLoginBox';
import { addAmount, addAnonymous, addCurrency } from '../../../redux/slices/donation';
import { DonorformValidate } from '../../payment/DonorValidation';

const DonateBtn = styled(Button)(({ theme }) => ({
  backgroundColor: '#ED2B2A',
  color: '#FFF',
  marginLeft: '10px',
  padding: ' 10px 20px',
  '&.active': {
    background: '#ED2B2A',
  },
  '&:hover': {
    background: '#ED2B2A',
  },
}));

const SelectAmtContainer = styled(Box)(() => ({
  // background:'darkgrey',
  margin: '5px 30px',
}));

const SelectPayContainer = styled(Stack)(() => ({
  margin: '10px 30px',
}));

export default function PaymentPopup({ open, onClose }) {
  const { user, isAuthenticated } = useAuth();
  const [activeAmt, setActiveAmt] = useState(500);
  const { refresh } = useSelector((state) => state.campaign);
  const dispatch = useDispatch();
  const { donationCheckout } = useSelector((state) => state.donation);
  const { amount, currency, isAnonymous } = donationCheckout;
  const [value, setValue] = useState('UPI');
  const [show, setShow] = useState(false);
  // const [anonymous, setAnonymous] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const { id, displayName, email, phoneNumber } = user;

  const donorInfo = {
    amount,
    isAnonymous,
    currency,
    name: displayName,
    email,
    phonenumber: phoneNumber,
    user: id,
  };

  const selectForeignCurrency = (e) => {
    e.preventDefault();
    const error = DonorformValidate(donorInfo);
    if (error) {
      enqueueSnackbar(error, {
        type: 'error',
      });
      return false;
    }
    setShow(true);
  };

  const handlePaymentChange = (event) => {
    setValue(event.target.value);
  };

  const changeAmount = (value) => {
    setActiveAmt(value);
    dispatch(addAmount(value));
  };

  const handleChange = (event) => {
    dispatch(addAnonymous(event.target.checked));
  };

  const changeCurrency = (value) => {
    dispatch(addCurrency(value));
  };
  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose}>
      <DialogTitle sx={{ direction: 'rtl', m: 0, p: 0 }}>
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <SelectAmtContainer>
        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
          Select Amount
        </Typography>
        <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            sx={{
              m: 1,
              background: activeAmt === 500 ? '#385F96' : 'white',
              color: activeAmt === 500 ? 'white' : '#385F96',
              ':hover': {
                background: '#385F96',
                color: 'white',
              },
            }}
            variant="outlined"
            value="500"
            onClick={() => changeAmount(500)}
          >
            ₹500
          </Button>
          <Button
            sx={{
              background: activeAmt === 1000 ? '#385F96' : 'white',
              color: activeAmt === 1000 ? 'white' : '#385F96',
              ':hover': {
                background: '#385F96',
                color: 'white',
              },
            }}
            variant="outlined"
            value="1000"
            onClick={() => changeAmount(1000)}
          >
            ₹1000
          </Button>
          <Button
            sx={{
              m: 1,
              background: activeAmt === 2000 ? '#385F96' : 'white',
              color: activeAmt === 2000 ? 'white' : '#385F96',
              ':hover': {
                background: '#385F96',
                color: 'white',
              },
            }}
            variant="outlined"
            value="2000"
            onClick={() => changeAmount(2000)}
          >
            ₹2000
          </Button>
        </Stack>
        <Typography variant="h6" sx={{ my: 0.5, textAlign: 'center' }}>
          or
        </Typography>
        <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center', m: 1 }}>
          <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center', m: 1 }}>
            <form>
              <TextField
                sx={{ width: 98 }}
                select
                variant="standard"
                value={currency}
                onChange={(event) => {
                  changeCurrency(event.target.value);
                }}
                SelectProps={{
                  native: true,
                }}
              >
                {currencies.map((option) => (
                  <option key={option.code} value={option.code}>
                    {option.symbol_native} {option.code}
                  </option>
                ))}
              </TextField>
              <Input
                sx={{ width: '15ch' }}
                id="outlined"
                type="Number"
                value={amount}
                placeholder="Other Amount"
                onChange={(e) => changeAmount(e.target.value)}
              />
            </form>
          </Stack>
        </Stack>
        <Typography variant="caption" sx={{ textAlign: 'center', width: '70%' }}>
          We charge no fee and depend on donors like you to cover our operational expenses.
        </Typography>
      </SelectAmtContainer>
      <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="subtitle2" sx={{ mx: 1 }}>
          Donate Anonymous
        </Typography>
        <FormControlLabel control={<Switch checked={isAnonymous} onChange={handleChange} size="small" />} />
      </Stack>
      <Stack spacing={3} sx={{ m: 2 }}>
        {currency === 'INR' && (
          <>
            <PaytmButton donorInfo={donorInfo} />
            <RazorpayButton donorInfo={donorInfo} />
          </>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {!show && currency !== 'INR' && (
            <Button variant="contained" size="large" onClick={selectForeignCurrency}>
              Donate Now
            </Button>
          )}
        </Box>

        {show && currency !== 'INR' && <Paypal donorInfo={donorInfo} />}
      </Stack>
      {/* <Button className="PopupdonateBtn" sx={{ color: 'white' }}>
        Confirm For Donate
      </Button> */}

      {!isAuthenticated && <PaymentLoginBox />}
    </Dialog>
  );
}
