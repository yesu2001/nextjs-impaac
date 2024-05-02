import React from "react";
import VolunteerPage from "./VolunteerPage";

export const metadata = {
  title: "Volunteer",
  description: "Catalogue pages",
  openGraph: {
    images: [
      {
        url: "/sections/animal/catalogue_Pic/banner.webp",
        width: 1200,
        height: 630,
        alt: "Volunteer Image",
      },
    ],
  },
};

export default function page() {
  return <VolunteerPage />;
}
