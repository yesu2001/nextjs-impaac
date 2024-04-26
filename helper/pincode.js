export const pinCodeHelper = (data) =>
  fetch("https://pincode.p.rapidapi.com/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "b5e7255020msh94c96a92aac7db4p1197d1jsn129d8d014695",
      "X-RapidAPI-Host": "pincode.p.rapidapi.com",
    },
    body: `{"searchBy":"pincode","value":${data}}`,
  })
    .then((response) => response.json())
    // .then(response => console.log(response))
    .catch((err) => console.error(err));
