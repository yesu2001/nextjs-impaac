"use client";
import { nanoid } from "nanoid";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import ReactGA from "react-ga";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useSnackbar } from "notistack";
import { createDonorHelper } from "@/helper/donor";
import { API } from "@/config";
import { DonorformValidate } from "../DonorValidation";
import useAuth from "@/hooks/useAuth";

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

export default function Paypal({ donorInfo }) {
  const { campaign, user, currency, title } = donorInfo;

  const initialOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    "enable-funding": "paylater,venmo,card",
    "disable-funding": "",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };

  const { user: authUser } = useAuth();

  const { enqueueSnackbar } = useSnackbar();

  const route = useRouter();

  const [loading, setLoading] = useState(false);
  // const paypal = useRef();

  // useEffect(async () => {
  //   setLoading(true);
  //   const res = await loadScript(
  //     `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=${currency}`
  //   );
  //   console.log(res);

  //   if (!res) {
  //     alert("Paypal SDK failed to load. Are you online?");
  //     return;
  //   }
  //   window.paypal
  //     .Buttons({
  //       createOrder: async (data, actions) => {
  //         ReactGA.event({
  //           category: `${title}`,
  //           action: "Donate now(Paypal)",
  //         });
  //         const error = DonorformValidate(donorInfo);
  //         if (error) {
  //           enqueueSnackbar(error, {
  //             variant: "error",
  //           });
  //           return false;
  //         }
  //         const order_id = nanoid();
  //         donorInfo.donor_id = order_id;
  //         donorInfo.gateway_name = "paypal";
  //         await createDonorHelper(
  //           campaign,
  //           user,
  //           authUser.token,
  //           donorInfo
  //         ).then((data) => {
  //           if (data.error) {
  //             return false;
  //           }
  //         });
  //         return fetch(`${API}/api/paypalPayment/create`, {
  //           method: "post",
  //           headers: {
  //             Accept: "application/json",
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(donorInfo),
  //         })
  //           .then((response) => response.json())
  //           .then((order) => order.id);
  //       },
  //       onApprove: (data, actions) =>
  //         fetch(`${API}/api/paypalPayment/capture/${data.orderID}`, {
  //           method: "post",
  //           headers: {
  //             Accept: "application/json",
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(donorInfo),
  //         })
  //           .then((response) => response.json())
  //           .then((orderData) => {
  //             route.push(`/donation-successful/${orderData.donor_id}`);
  //           }),
  //       onError: (err) => {
  //         console.log(err);
  //       },
  //     })
  //     .render(document.getElementById("paypal-button-container"));
  //   setLoading(false);
  //   return () => {};
  // }, []);

  return (
    <Box
      sx={{
        width: "310px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "auto",
      }}
    >
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            width: "100%",
            shape: "rect",
            layout: "vertical",
          }}
          createOrder={async (data, actions) => {
            ReactGA.event({
              category: `${title}`,
              action: "Donate now(Paypal)",
            });
            const error = DonorformValidate(donorInfo);
            if (error) {
              enqueueSnackbar(error, {
                variant: "error",
              });
              return false;
            }
            const order_id = nanoid();
            donorInfo.donor_id = order_id;
            donorInfo.gateway_name = "paypal";
            await createDonorHelper(
              campaign,
              user,
              authUser.token,
              donorInfo
            ).then((data) => {
              if (data.error) {
                return false;
              }
            });
            return fetch(`${API}/api/paypalPayment/create`, {
              method: "post",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(donorInfo),
            })
              .then((response) => response.json())
              .then((order) => order.id);
          }}
          onApprove={(data, actions) =>
            fetch(`${API}/api/paypalPayment/capture/${data.orderID}`, {
              method: "post",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(donorInfo),
            })
              .then((response) => response.json())
              .then((orderData) => {
                route.push(`/donation-successful/${orderData.donor_id}`);
              })
          }
        />
      </PayPalScriptProvider>
      {loading && <CircularProgress />}
    </Box>
  );
}

// {/* <Box ref={paypal} sx={{ width: "100%" }}>
//   .
// </Box> */}
// {/* <div id="paypal-button-container" style={{ width: "100%" }} /> */}
