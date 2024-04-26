export const allBlogData = (data) =>
  fetch(`https://www.blog.impaac.org/wp-json/wp/v2/posts?_embed&per_page=100`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
