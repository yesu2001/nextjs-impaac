import { API } from "@/config";

export const createUpiDonorHelper = (donor) =>
  fetch(`${API}/api/upidonor/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(donor),
  });
