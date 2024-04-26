import { API } from "@/config";

export const createOrderRazorpay = (donorInfo) =>
  fetch(`${API}/api/razorpayPayment`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(donorInfo),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const capturePaymentRazorpay = (donorInfo) =>
  fetch(`${API}/api/paymentCapture`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(donorInfo),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
