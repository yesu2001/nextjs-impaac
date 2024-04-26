import { API } from "@/config";

// create Contact Form
export const createContactFormHelper = (form) =>
  fetch(`${API}/api/contactform/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

// Get Single Contact Form
export const getAContactFormHelper = (userId, token, formId) =>
  fetch(`${API}/api/contactform/${userId}/${formId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formId),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
