import useResponsive from "@/hooks/useResponsive";
import React from "react";
import Image from "next/image";

export default function CatalogueImage({ image, alt, style }) {
  const isMobile = useResponsive("down", "sm");
  return (
    <Image
      src={image}
      alt={alt}
      height={isMobile ? 340 : 540}
      objectFit="cover"
      objectPosition="center"
      style={{ ...style }}
    />
  );
}
