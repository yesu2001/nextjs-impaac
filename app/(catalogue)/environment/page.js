import React from "react";
import EnvPage from "./EnvPage";

export const metadata = {
  title: "Environment",
  description: "Catalogue pages",
  openGraph: {
    images: [
      {
        url: "/sections/animal/catalogue_Pic/banner.webp",
        width: 1200,
        height: 630,
        alt: "Environment Image",
      },
    ],
  },
};

export default function page() {
  return <EnvPage />;
}
