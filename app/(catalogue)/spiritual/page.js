import React from "react";
import SpiritualPage from "./SpiritualPage";

export const metadata = {
  title: "Spiritual",
  description: "Catalogue pages",
  openGraph: {
    images: [
      {
        url: "/sections/animal/catalogue_Pic/banner.webp",
        width: 1200,
        height: 630,
        alt: "Spiritual Image",
      },
    ],
  },
};

export default function page() {
  return <SpiritualPage />;
}
