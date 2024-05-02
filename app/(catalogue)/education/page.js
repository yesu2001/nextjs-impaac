import React from "react";
import EducationPage from "./EducationPage";

export const metadata = {
  title: "Education",
  description: "Catalogue pages",
  openGraph: {
    images: [
      {
        url: "/sections/animal/catalogue_Pic/banner.webp",
        width: 1200,
        height: 630,
        alt: "Education Image",
      },
    ],
  },
};

export default function page() {
  return <EducationPage />;
}
