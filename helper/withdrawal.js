import { API } from "@/config";

// create a withdrawal
export const createWithdrawalHelper = (userId, token, campaignId, withdrawal) =>
  fetch(`${API}/api/withdrawal/create/${userId}/${campaignId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(withdrawal),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

// update Withdrawal

export const updateWithdrawalHelper = (
  userId,
  token,
  withdrawalId,
  withdrawal
) =>
  fetch(`${API}/api/withdrawal/update/${withdrawalId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(withdrawal),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const getWithdrawalUser = (withdrawalId, userId, token) =>
  fetch(`${API}/api/withdrawal/one/${withdrawalId}/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const getUserWithdrawal = (userId, token) =>
  fetch(`${API}/api/user/withdrawal/list/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
