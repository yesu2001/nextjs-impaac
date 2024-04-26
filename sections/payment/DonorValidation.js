export const DonorformValidate = (donorInfo) => {
  const {
    name,
    amount,
    currency,
    title,
    email,
    phonenumber,
    campaign,
    user,
    isAnonymous,
    isTaxExemption,
    address,
    pancard,
  } = donorInfo;

  if (!campaign) {
    return 'something Wrong';
  }
  // if (!user) {
  //     return "wait..."
  // }
  if (!name || !email) {
    return 'All fields are required';
  }
  // if (name.length > 50) {
  //     return 'Full name no more than 50 characters';
  // }

  const mobileNumberRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  if (!mobileNumberRegex.test(phonenumber)) {
    return 'Enter a valid Mobile number';
  }

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(String(email).toLowerCase())) {
    return 'Enter a valid Email address.';
  }

  const numberRegex = /^\d+$/;
  if (!numberRegex.test(amount) || amount === 0) {
    return 'Enter valid Amount';
  }

  if (currency === 'INR') {
    if (amount < 100) {
      return 'Amount cannot be less than 100';
    }
    if (amount > 100000) {
      return 'Amount cannot be greater than 100000';
    }
  }

  if (currency !== 'INR') {
    if (amount < 10) {
      return 'Amount cannot be less than 10';
    }
    if (amount > 500) {
      return 'Amount cannot be greater than 500';
    }
  }

  if (isTaxExemption && address.length < 15) {
    return 'Enter a valid Address';
  }

  const pancardRedgex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
  if (isTaxExemption && !pancardRedgex.test(pancard)) {
    return 'Enter valid Pan  Card Number';
  }

  return false;
};
