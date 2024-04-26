import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
// @mui
import { Box, styled } from "@mui/material";
import footerlogo from "@/assets/logo3.png";
import useResponsive from "@/hooks/useResponsive";

const LogoBox = styled(Box)(({ theme }) => ({
  width: 175,
  height: 40,
  [theme.breakpoints.down("md")]: {
    width: 85,
  },
}));

// ----------------------------------------------------------------------

LogoWhite.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function LogoWhite({ disabledLink = false, sx }) {
  const isMobile = useResponsive("down", "sm");
  const logo = (
    <div>
      <LogoBox sx={{ ...sx }}>
        <Image
          src={footerlogo}
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
