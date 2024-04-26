import { API } from "@/config";

// create a donor
export const createDonorHelper = (campaignId, userId, token, donor) =>
  fetch(`${API}/api/donor/create/${campaignId}/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(donor),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

// create a Stripe
export const createDonorStripeHelper = (campaignId, userId, donor) =>
  fetch(`${API}/api/donor/create-stripe/${campaignId}/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(donor),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

// all donor
export const getAllCampaignHelper = (id) =>
  fetch(`${API}/api/donor`, {
    method: "GET",
  })
    .then((response) => response.json(id))
    .catch((err) => console.log(err));

export const getCampaignListHelper = (id) =>
  fetch(`${API}/api/donor/list/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

// get A donor

export const getDonorHelper = (donorId) =>
  fetch(`${API}/api/donor/donorid/${donorId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const claim80Ghelper = (donorId, userId, token, data) =>
  fetch(`${API}/api/donor/createclaim/${donorId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

// get user donations
export const getUserDonations = (id, token) =>
  fetch(`${API}/api/user/donation/list/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
