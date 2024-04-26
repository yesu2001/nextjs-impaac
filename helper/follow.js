import { API } from "@/config";

// create follow
export const createFollowHelper = (userId, token, followerId) =>
  fetch(`${API}/api/createFollow/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(followerId),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

// delete follow
export const deleteFollowHelper = (userId, token, followerId) =>
  fetch(`${API}/api/deleteFollow/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(followerId),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
