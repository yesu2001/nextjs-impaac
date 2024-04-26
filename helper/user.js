import { API } from "@/config";

export const updateUser = (userId, token, profile) =>
  fetch(`${API}/api/updateuser/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(profile),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const updateKYCHelper = (userId, token, profile) =>
  fetch(`${API}/api/updatekyc/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(profile),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const updateUserImage = (userId, token, profile) =>
  fetch(`${API}/api/user/image/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(profile),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const getAuserHelper = (userId, token) =>
  fetch(`${API}/api/user/${userId}`, {
    method: "get",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const getUserCampaignListHelper = (userId, token) =>
  fetch(`${API}/api/user/campaign/list/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const getUserCampaignMonthlyStatsHelper = (userId, token) =>
  fetch(`${API}/api/user/campaign/monthlystats/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const getUserWithdrawalListHelper = (userId, token) =>
  fetch(`${API}/api/user/withdrawal/list/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const getUserDonationListHelper = (userId, token) =>
  fetch(`${API}/api/user/donation/list/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const sendTaxInvoicedeHelper = (donorId, userId, token) =>
  fetch(`${API}/api/donation/sendtaxinvoice/${donorId}/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
