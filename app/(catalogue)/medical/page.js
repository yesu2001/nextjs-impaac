import React from "react";
import MedicalPage from "./MedicalPage";

export const metadata = {
  title: "Medical",
  description: "Catalogue pages",
  openGraph: {
    images: [
      {
        url: "/sections/animal/catalogue_Pic/banner.webp",
        width: 1200,
        height: 630,
        alt: "Medical Image",
      },
    ],
  },
};

export default function page() {
  return <MedicalPage />;
}
