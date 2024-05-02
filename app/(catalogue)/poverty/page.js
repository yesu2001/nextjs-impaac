import React from "react";
import PovertyPage from "./PovertyPage";

export const metadata = {
  title: "Poverty",
  description: "Catalogue pages",
  openGraph: {
    images: [
      {
        url: "/sections/animal/catalogue_Pic/banner.webp",
        width: 1200,
        height: 630,
        alt: "Poverty Image",
      },
    ],
  },
};

export default function page() {
  return <PovertyPage />;
}
