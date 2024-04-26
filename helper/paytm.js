import { API } from "@/config";
export const createTokenPaytm = (data) =>
  fetch(`${API}/api/create-token`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
