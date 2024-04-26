import React, { useContext, useState } from "react";
import ReactGA from "react-ga";
import { Button, CircularProgress } from "@mui/material";
import { useSnackbar } from "notistack";
import { nanoid } from "nanoid";
import { createDonorHelper } from "@/helper/donor";
import { capturePaymentRazorpay, createOrderRazorpay } from "@/helper/razorpay";
import { DonorformValidate } from "../DonorValidation";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function RazorpayButton({ donorInfo }) {
  const [disable, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const route = useRouter();
  const { user: authUser } = useAuth();

  const {
    name,
    total_amount,
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

  const displayRazorpay = (e) => {
    e.preventDefault();
    setLoading(true);
    const error = DonorformValidate(donorInfo);
    if (error) {
      enqueueSnackbar(error, {
        variant: "error",
      });
      setLoading(false);
      return false;
    }
    ReactGA.event({
      category: `${title}`,
      action: "Donate now(Razorpay)",
    });
    Razorpay({
      name,
      total_amount,
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
    });
  };

  const Razorpay = async ({
    name,
    total_amount,
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
  }) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const orderId = nanoid();
    donorInfo.donor_id = orderId;
    donorInfo.gateway_name = "razorpay";
    createDonorHelper(campaign, user, authUser.token, donorInfo).then(
      (data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          const options = {
            key: process.env.REACT_APP_KEY_ID,
            amount: total_amount,
            currency: "INR",
            name: "Impaac Foundation",
            description: `${title}`,
            handler: async (response, id) => {
              setLoading(true);
              const {
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
              } = response;
              // await capturePaymentRazorpay({
              //   amount: total_amount,
              //   razorpay_order_id,
              //   razorpay_payment_id,
              //   razorpay_signature,
              // });
              setLoading(false);
              route.push(`/donation-successful/${donorInfo.donor_id}`);
            },
            prefill: {
              name,
              email,
              contact: phonenumber,
            },
            theme: {
              color: "#61dafb",
            },
          };
          createOrderRazorpay(donorInfo)
            .then((res) => {
              setLoading(false);
              options.order_id = res.id;
              options.amount = res.total_amount;
              const rzp1 = new window.Razorpay(options);
              rzp1.open();
            })
            .catch((e) => console.log(e));
        }
      }
    );
  };

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        fullWidth
        text="Donate Now"
        onClick={displayRazorpay}
        loading={loading}
        disabled={disable}
      >
        Debit Cards / Credit Cards / Netbanking
      </Button>
    </div>
  );
}

export default RazorpayButton;
