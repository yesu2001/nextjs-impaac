import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { Box } from "@mui/material";
import impaaclogo from "@/assets/logo.png";

// ----------------------------------------------------------------------

CircularLogo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function CircularLogo({ disabledLink = false, sx }) {
  const logo = (
    <div>
      <Box sx={{ width: 40, height: 40, ...sx }}>
        <img src={impaaclogo} alt="logo" />
      </Box>
    </div>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
