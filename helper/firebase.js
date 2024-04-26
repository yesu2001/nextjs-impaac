import { API } from "@/config";

export const firebaseValidation = (emailAndPhone) =>
  fetch(`${API}/api/emailAndPnumberValidation`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailAndPhone),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const firebaseGetNumber = (email) =>
  fetch(`${API}/api/getNumber`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
