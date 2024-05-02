import React from "react";
import SocialImpactPage from "./SocialImpactPage";

export const metadata = {
  title: "Social Impact",
  description: "Catalogue pages",
  openGraph: {
    images: [
      {
        url: "/sections/animal/catalogue_Pic/banner.webp",
        width: 1200,
        height: 630,
        alt: "Social impact Image",
      },
    ],
  },
};

export default function page() {
  return <SocialImpactPage />;
}
