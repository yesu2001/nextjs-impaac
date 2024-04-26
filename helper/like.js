import { API } from "@/config";

// create a like
export const createLikeHelper = (CampaignId) =>
  fetch(`${API}/api/createLike/${CampaignId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

// create a like
export const deleteLikeHelper = (CampaignId) =>
  fetch(`${API}/api/deleteLike/${CampaignId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
