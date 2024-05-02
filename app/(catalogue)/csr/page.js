import React from "react";
import CsrPage from "./CsrPage";

export const metadata = {
  title: "CSR",
  description: "Catalogue pages",
  openGraph: {
    images: [
      {
        url: "/sections/animal/catalogue_Pic/banner.webp",
        width: 1200,
        height: 630,
        alt: "CSR Image",
      },
    ],
  },
};

export default function page() {
  return <CsrPage />;
}
