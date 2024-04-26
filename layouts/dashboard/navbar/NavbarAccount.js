"use client";
import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Link, Typography } from "@mui/material";
// hooks
import useAuth from "@/hooks/useAuth";
// components
import MyAvatar from "@/components/MyAvatar";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.shorter,
  }),
}));

// ----------------------------------------------------------------------

NavbarAccount.propTypes = {
  isCollapse: PropTypes.bool,
};

export default function NavbarAccount({ isCollapse }) {
  const { user, userProfile, ngoProfile } = useAuth();

  return (
    <Link underline="none" color="inherit" to={"/dashboard/user/account"}>
      <RootStyle
        sx={{
          ...(isCollapse && {
            bgcolor: "transparent",
          }),
        }}
      >
        <MyAvatar />

        <Box
          sx={{
            ml: 2,
            transition: (theme) =>
              theme.transitions.create("width", {
                duration: theme.transitions.duration.shorter,
              }),
            ...(isCollapse && {
              ml: 0,
              width: 0,
            }),
          }}
        >
          <Typography variant="subtitle2">
            {ngoProfile?.name || userProfile?.name}{" "}
          </Typography>
          <Typography variant="body2" noWrap sx={{ color: "green" }}>
            {user?.userType?.ngo ? "Organisation" : "Individual"}
          </Typography>
        </Box>
      </RootStyle>
    </Link>
  );
}
