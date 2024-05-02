"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Link, Typography } from "@mui/material";
// components
import MyAvatar from "@/components/MyAvatar";
import { getAuserHelper } from "@/helper/user";

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
  const { data: session } = useSession();
  const [userData, setUserData] = useState();

  useEffect(() => {
    preload();
  }, [session]);

  console.log(session);

  const preload = async () => {
    const data = await getAuserHelper(
      session?.user?.uid,
      session?.user?.accessToken
    );
    console.log(data);
    setUserData(data);
  };

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
          <Typography variant="subtitle2">{userData?.name} </Typography>
          <Typography variant="body2" noWrap sx={{ color: "green" }}>
            {userData?.user_role?.ngo ? "Organisation" : "Individual"}
          </Typography>
        </Box>
      </RootStyle>
    </Link>
  );
}
