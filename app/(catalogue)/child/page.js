import React from "react";
import ChildPage from "./ChildPage";

export const metadata = {
  title: "Child",
  description: "Catalogue pages",
  openGraph: {
    images: [
      {
        url: "/sections/animal/catalogue_Pic/banner.webp",
        width: 1200,
        height: 630,
        alt: "Child Image",
      },
    ],
  },
};

export default function page() {
  return <ChildPage />;
}
