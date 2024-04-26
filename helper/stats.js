import { API } from "@/config";

export const getStats = () =>
  fetch(`${API}/api/statistics`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
