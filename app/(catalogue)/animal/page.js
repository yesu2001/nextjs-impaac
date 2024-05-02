import React from "react";
import AnimalPage from "./Animal";

export const metadata = {
  title: "Animal",
  description: "Catalogue pages",
  openGraph: {
    images: [
      {
        url: "/sections/animal/catalogue_Pic/banner.webp",
        width: 1200,
        height: 630,
        alt: "Animal Image",
      },
    ],
  },
};

export default function page() {
  return <AnimalPage />;
}
