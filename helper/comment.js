import { API } from "@/config";

// create Commment
export const createCommentHelper = (CampaignId, userId, token, comment) =>
  fetch(`${API}/api/createComment/${CampaignId}/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(comment),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

// delete comment
export const deleteCommentHelper = (userId, token, commentId) =>
  fetch(`${API}/api/deleteComment/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(commentId),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
