import { API } from "@/config";
// create a campaign
export const createCampaignHelper = (userId, token, campaign) =>
  fetch(`${API}/api/campaign/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(campaign),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const getAllCampaignHelper = () =>
  fetch(`${API}/api/campaigns`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

// get a Campaign

export const getCampaignHelper = (campaignId) =>
  fetch(`${API}/api/campaign/${campaignId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const collectAmountHelper = (campaignId, amount) =>
  fetch(`${API}/api/campaign/collectAmount/${campaignId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(amount),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const updateCampaignHelper = (campaignId, userId, token, campaign) =>
  fetch(`${API}/api/updateCampaign/${campaignId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(campaign),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const updateMorePhotos = (campaignId, userId, token, campaign) =>
  fetch(`${API}/api/updateMorePhoto/${campaignId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(campaign),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const deleteCampaignHelper = (campaignId, userId, token, status) =>
  fetch(`${API}/api/campaign/delete/${campaignId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(status),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const campaignStatsHelper = (campaignId, userId, token) =>
  fetch(`${API}/api/campaign/stats/${campaignId}/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const getAllProfileCampaigns = (userId, token) =>
  fetch(`${API}/api/user/campaign/list/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export const getCampaignListOfUserHelper = (
  campaignId,
  userId,
  token,
  campaign
) =>
  fetch(`${API}/api/updateCampaign/${campaignId}/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(campaign),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
