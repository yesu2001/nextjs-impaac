import PropTypes from "prop-types";
// @mui
import Link from "next/link";
import Image from "next/image";
import { Box, styled } from "@mui/material";
import impaaclogo from "../assets/IFLogo.png";
import useResponsive from "@/hooks/useResponsive";

const LogoBox = styled(Box)(({ theme }) => ({
  width: 175,
  height: 50,
  [theme.breakpoints.down("md")]: {
    width: 120,
  },
}));

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const isMobile = useResponsive("down", "sm");
  const logo = (
    <div>
      <LogoBox sx={{ ...sx }}>
        <Image
          src={impaaclogo}
          alt="logo"
          width={150}
          height={isMobile ? 45 : 55}
        />
      </LogoBox>
    </div>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <Link href="/">{logo}</Link>;
}
