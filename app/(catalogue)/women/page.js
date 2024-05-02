import React from "react";
import WomenPage from "./WomenPage";

export const metadata = {
  title: "Women",
  description: "Catalogue pages",
  openGraph: {
    images: [
      {
        url: "/sections/animal/catalogue_Pic/banner.webp",
        width: 1200,
        height: 630,
        alt: "Women Banner Image",
      },
    ],
  },
};

export default function page() {
  return <WomenPage />;
}
