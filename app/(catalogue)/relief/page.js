import React from "react";
import ReliefPage from "./ReliefPage";

export const metadata = {
  title: "Relief",
  description: "Catalogue pages",
  openGraph: {
    images: [
      {
        url: "/sections/animal/catalogue_Pic/banner.webp",
        width: 1200,
        height: 630,
        alt: "Relief Image",
      },
    ],
  },
};

export default function page() {
  return <ReliefPage />;
}
