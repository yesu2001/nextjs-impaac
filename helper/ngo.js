import { API } from "@/config";

// create a NGO
export const createNgoHelper = (userId, token, ngo) =>
  fetch(`${API}/api/ngo/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(ngo),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

// Get One Ngo
export const getNgoHelper = (userId, token, ngoId) =>
  fetch(`${API}/api/ngo/one/${userId}/${ngoId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

// get One public ngo profile
export const getOnePublicNgo = (ngoId) =>
  fetch(`${API}/api/public/ngo/one/${ngoId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

// update  NGO
export const updateNgoHelper = (userId, token, ngoId, data) =>
  fetch(`${API}/api/ngo/update/${userId}/${ngoId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

// create a User To organisation
export const OrganisationLinkToUserHelper = (userId, token, organisation) =>
  fetch(`${API}/api/organisationLinkToUser/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(organisation),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const getAllNgoHelper = () =>
  fetch(`${API}/api/public/ngo/all`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      // 'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const getNgoCampaigns = (ngoId) =>
  fetch(`${API}/api/public/ngo/campaigns/${ngoId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const createOrganisationHelper = (userId, token, organisation) =>
  fetch(`${API}/api/organisation/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(organisation),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
