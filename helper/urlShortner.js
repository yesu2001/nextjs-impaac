import { API } from "@/config";

export const getLongUrlHelper = (shortId) =>
  fetch(`${API}/api/c/${shortId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
