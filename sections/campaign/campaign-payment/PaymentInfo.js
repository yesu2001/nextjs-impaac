import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Input,
  Stack,
  TextField,
  DialogTitle,
  IconButton,
  Typography,
  InputAdornment,
  Slide,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useSnackbar } from "notistack";
import useAuth from "@/hooks/useAuth";
import RazorpayButton from "../../payment/Razorpay/RazorpayButton";
import { currencies } from "@/_mock/currencies";
import PaytmButton from "../../payment/Paytm/PaytmButton";
import Paypal from "../../payment/Paypal/PaypalButton";
import { DonorformValidate } from "../../payment/DonorValidation";
// import { useDispatch, useSelector } from '../../../redux/store';
// import { addAmount, addAnonymous, addCurrency } from '../../../redux/slices/donation';

const tipAmounts = ["5%", "8%", "10%", "other"];

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} timeout={5000} {...props} />
));

export default function PaymentInfo({ campaign, onClose }) {
  const { isAuthenticated, user } = useAuth();

  const [currency, setCurrency] = useState("INR");
  const [tipAmountPerc, setTipAmountPerc] = useState("5%");
  const [symbol, setSymbol] = useState("₹");
  const [options, setOptions] = useState(
    currency !== "INR" ? [50, 75, 100] : [500, 1000, 2000]
  );
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [amount, setAmount] = useState(1000);
  const [otherAmount, setOtherAmount] = useState(null);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [customTipAmount, setCustomTipAmount] = useState(
    Math.round((amount * parseFloat(5)) / 100)
  );
  const [showTip, setShowTip] = useState(false);
  const [showOtherAmount, setShowOtherAmount] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [taxInfo, setTaxInfo] = useState({
    pancard: "",
    address: "",
  });
  const [taxInfoError, setTaxInfoError] = useState({
    panError: null,
    addressError: null,
  });

  const { id, displayName, email, phoneNumber } = user;

  const { _id, title, pancard_mandatory } = campaign;

  const totalAmount = Number(amount) + Number(customTipAmount) || 0;

  const isTaxExemption = amount >= pancard_mandatory?.amount;

  const donorInfo = {
    total_amount: totalAmount,
    tip_amount: customTipAmount,
    amount,
    isAnonymous,
    currency,
    name: displayName,
    email,
    phonenumber: phoneNumber,
    title,
    campaign: _id,
    user: id,
    isTaxExemption,
    pancard: taxInfo.pancard,
    address: taxInfo.address,
  };

  useEffect(() => {
    if (currency === "INR") {
      setOptions([500, 1000, 2000]);
      setAmount(1000);
    } else {
      setOptions([50, 75, 100]);
      setAmount(75);
    }
  }, [currency]);

  useEffect(() => {
    if (otherAmount !== amount) {
      setOtherAmount("");
    }
    const minAmount = currency === "INR" ? 100 : 10;
    if (amount === otherAmount && amount < minAmount) {
      if (otherAmount < minAmount) {
        setError(`Amount must be greater than ${minAmount}`);
      }
    }
    setCustomTipAmount(
      Math.round(
        (amount * parseFloat(Number(tipAmountPerc.split("")[0]))) / 100
      )
    );
  }, [amount]);

  const handleTaxInfoChange = (e) => {
    const value =
      e.target.name === "pancard"
        ? e.target.value.toUpperCase()
        : e.target.value;
    setTaxInfo((prevState) => ({
      ...prevState,
      [e.target.name]: value,
    }));
    const pancardRedgex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    if (e.target.name === "pancard") {
      setTaxInfoError((prevState) => ({
        ...prevState,
        panError: pancardRedgex.test(value) ? null : "Invalid PAN Number",
      }));
    } else {
      setTaxInfoError((prevState) => ({
        ...prevState,
        addressError: value.length > 15 ? null : "Invalid Address",
      }));
    }
  };

  const handleOtherAmountChange = (event) => {
    setOtherAmount(event.target.value);
    setAmount(event.target.value);
    setError("");
  };

  const handleOtherAmountBlur = () => {
    if (error === "") {
      setError("");
    }
    if (amount !== otherAmount) {
      setOtherAmount("");
      setShowOtherAmount(false);
    }
  };

  const handleTipAmount = (tipValue) => {
    setTipAmountPerc(tipValue);
    const value = tipValue === "other" ? 0 : tipValue;
    setCustomTipAmount(Math.round((amount * parseFloat(value)) / 100));
  };

  const handleCustomTipAmountChange = (e) => {
    setCustomTipAmount(e.target.value);
  };

  const selectForeignCurrency = (e) => {
    e.preventDefault();
    const error = DonorformValidate(donorInfo);
    if (error) {
      enqueueSnackbar(error, {
        type: "error",
      });
      return false;
    }
    setShow(true);
  };

  const changeAmount = (value) => {
    setAmount(value);
    setCustomTipAmount(Math.round((value * parseFloat(tipAmountPerc)) / 100));
  };

  const changeCurrency = (value) => {
    const getCurrency = currencies.find((item) => item.code === value);
    setSymbol(getCurrency.symbol_native);
    setCurrency(value);
  };

  const handleChange = (value) => {
    setIsAnonymous(!isAnonymous);
  };

  const HandleClickOtherAmount = () => {
    setShowOtherAmount(true);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ px: 2, width: "100%" }}>
        {!show && (
          <>
            <form>
              <Box
                sx={{ pt: 2, display: "flex", justifyContent: "space-between" }}
              >
                <IconButton aria-label="close" onClick={onClose}>
                  <ArrowBackIcon />
                </IconButton>

                <TextField
                  sx={{ width: 92 }}
                  select
                  variant="outlined"
                  size="small"
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
              </Box>
              <Typography
                sx={{
                  fontSize: 12,
                  mt: 2,
                  mx: "auto",
                  textAlign: "center",
                  color: amount === 1000 || amount === 75 ? "#385F96" : "",
                  fontWeight:
                    amount === 1000 || amount === 75 ? "bold" : "normal",
                }}
              >
                Popular
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                {options.map((option, index) => (
                  <Button
                    key={index}
                    sx={{
                      flex: 0.35,
                      borderWidth: amount === option ? 2 : 1,
                      borderStyle: "solid",
                      borderColor: amount === option ? "#385F96" : "#AEAEAE",
                      background: amount === option ? "#DAE1EB" : "#FFFFFF",
                      color: amount === option ? "#385F96" : "black",
                      fontWeight: amount === option ? "bold" : "normal",
                      ":hover": {
                        color: "#385F96",
                        background: "#DAE1EB",
                      },
                    }}
                    variant="outlined"
                    value={option}
                    onClick={() => {
                      setShowOtherAmount(false);
                      changeAmount(option);
                    }}
                  >
                    {symbol} {option}
                  </Button>
                ))}
              </Stack>
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "center", my: 1 }}
              >
                {showOtherAmount ? (
                  <TextField
                    sx={{ width: "100%" }}
                    id="outlined"
                    variant="outlined"
                    type="number"
                    size="small"
                    value={otherAmount}
                    placeholder={
                      currency !== "INR"
                        ? "Other Amount - 10 or more"
                        : "Other Amount - 300 and more"
                    }
                    onChange={handleOtherAmountChange}
                    onBlur={handleOtherAmountBlur}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {symbol}
                        </InputAdornment>
                      ),
                    }}
                  />
                ) : (
                  <Button
                    onClick={HandleClickOtherAmount}
                    sx={{
                      width: "100%",
                      border: "1px solid grey",
                      color: "#1e1e1e",
                      fontWeight: "normal",
                    }}
                  >
                    Other amount
                  </Button>
                )}
              </Stack>
              <Typography color={"red"} variant="caption">
                {otherAmount < 100 && error}
              </Typography>
              {isAuthenticated && user.id && (
                <>
                  <Box sx={{ my: 4 }}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      my={1}
                    >
                      <Typography variant="subtitle2">
                        Donation Amount
                      </Typography>
                      <Typography variant="subtitle2">
                        {symbol} {amount}
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      my={1}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="subtitle2">Support us:</Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            ml: 1,
                            display: "flex",
                            alignItems: "center",
                            color: "#385F96",
                          }}
                          onClick={() => setShowTip(!showTip)}
                        >
                          {tipAmountPerc}{" "}
                          {showTip ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </Typography>
                      </Box>
                      <Typography variant="subtitle2">
                        {symbol} {customTipAmount || 0}
                      </Typography>
                    </Stack>

                    {showTip && (
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        {tipAmounts.map((tip, index) => (
                          <Button
                            key={index}
                            onClick={() => handleTipAmount(tip)}
                            sx={{
                              cursor: "pointer",
                              borderWidth:
                                tipAmountPerc === tip ? "2px" : "1px",
                              borderStyle: "solid",
                              borderColor:
                                tipAmountPerc === tip ? "#385F96" : "lightgray",
                              color:
                                tipAmountPerc === tip ? "#385F96" : "black",
                            }}
                          >
                            {tip}
                          </Button>
                        ))}
                      </Stack>
                    )}
                    {tipAmountPerc === "other" && (
                      <TextField
                        name="otherAmount"
                        sx={{ width: "100%", my: 1 }}
                        disabled={tipAmountPerc !== "other"}
                        id="outlined"
                        type="Number"
                        size="small"
                        value={customTipAmount}
                        placeholder="Tip Amount"
                        onChange={handleCustomTipAmountChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              {symbol}
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                    {showTip && (
                      <Box>
                        <Typography variant="caption" sx={{ my: 2 }}>
                          Tips help us maintain operations.{" "}
                          <Typography
                            variant="caption"
                            sx={{ cursor: "pointer", color: "blue" }}
                            onClick={() => setShowMessage(true)}
                          >
                            Know more
                          </Typography>
                        </Typography>
                        <KnowMoreTip
                          open={showMessage}
                          handleClose={() => setShowMessage(false)}
                          transition={Transition}
                          tip={tipAmountPerc}
                        />
                      </Box>
                    )}
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      my={1}
                    >
                      <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                        Total Donation:{" "}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                        {symbol} {totalAmount}
                      </Typography>
                    </Stack>
                  </Box>
                  <Stack direction={"row"} alignItems={"center"}>
                    <Checkbox
                      checked={isAnonymous}
                      onChange={handleChange}
                      sx={{ p: 0, mr: 1 }}
                    />
                    <Typography>Donate Anonymous</Typography>
                  </Stack>

                  {isTaxExemption && (
                    <Stack mt={2}>
                      <TextField
                        name="pancard"
                        required
                        sx={{
                          width: "100%",
                          my: 1,
                          textTransform: "uppercase",
                        }}
                        id="outlined"
                        type="text"
                        size="small"
                        placeholder="Pan card"
                        value={taxInfo.pancard}
                        onChange={handleTaxInfoChange}
                      />
                      {taxInfoError.panError && (
                        <Typography variant="caption" color={"error"}>
                          {taxInfoError.panError}
                        </Typography>
                      )}
                      <TextField
                        name="address"
                        required
                        sx={{ width: "100%", my: 1 }}
                        id="outlined"
                        type="text"
                        size="small"
                        placeholder="Address"
                        value={taxInfo.address}
                        onChange={handleTaxInfoChange}
                      />
                      {taxInfoError.addressError && (
                        <Typography variant="caption" color={"error"}>
                          {taxInfoError.addressError}
                        </Typography>
                      )}
                    </Stack>
                  )}
                </>
              )}
            </form>
          </>
        )}

        <Stack alignItems="center" sx={{ m: 2 }}>
          {isAuthenticated && (
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <LockOutlinedIcon fontSize="small" color="disabled" />
              <Typography variant="caption" sx={{ color: "gray" }}>
                All payments go through a secure gateway
              </Typography>
            </Box>
          )}
          {isAuthenticated && !user.id && <CircularProgress />}
        </Stack>
        {isAuthenticated && user.id && (
          <Stack spacing={2} sx={{ my: 2 }}>
            {currency === "INR" && (
              <>
                <PaytmButton donorInfo={donorInfo} />
                <RazorpayButton donorInfo={donorInfo} />
              </>
            )}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                justifyContent: "center",
              }}
            >
              {!show && currency !== "INR" && (
                <Button
                  variant="contained"
                  size={"large"}
                  onClick={selectForeignCurrency}
                  sx={{ width: "310px" }}
                >
                  Donate now
                </Button>
              )}
            </Box>
            {currency !== "INR" && show && (
              <KeyboardBackspaceIcon
                sx={{ mt: 2 }}
                onClick={() => setShow(false)}
              />
            )}
            {show && currency !== "INR" && <Paypal donorInfo={donorInfo} />}
          </Stack>
        )}
      </Box>
    </Box>
  );
}

const KnowMoreTip = ({ open, handleClose, transition, tip }) => (
  <Dialog
    open={open}
    TransitionComponent={transition}
    transitionDuration={1000}
    onClose={handleClose}
    maxWidth={"xs"}
    sx={{
      ".css-1m9bonx-MuiBackdrop-root-MuiDialog-backdrop": {
        background: "rgba(0,0,0,0.8)",
      },
    }}
  >
    <DialogTitle sx={{ textAlign: "center", mb: 2 }}>
      How Tips Help Us
    </DialogTitle>
    <DialogContent>
      <Typography sx={{ width: { xs: "100%", sm: "100%" } }}>
        Your generous support helps us to provide a free platform to raise funds
        for social causes and medical emergencies.
      </Typography>
      <Typography>Thank you for your continued support!</Typography>
    </DialogContent>
    <DialogActions
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Button variant="contained" onClick={handleClose} sx={{ width: "300px" }}>
        Add {tip} tip
      </Button>
    </DialogActions>
  </Dialog>
);
