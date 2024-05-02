import React from "react";
import SocialWelfarePage from "./SocialWelfarePage";

export const metadata = {
  title: "Social Welfare",
  description: "Catalogue pages",
  openGraph: {
    images: [
      {
        url: "/sections/animal/catalogue_Pic/banner.webp",
        width: 1200,
        height: 630,
        alt: "Social Welfare Image",
      },
    ],
  },
};

export default function page() {
  return <SocialWelfarePage />;
}
