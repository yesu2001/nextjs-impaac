"use client";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useRouter } from "next/navigation";
// @mui
import { Box, Divider, MenuItem, Stack, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// hooks
import useAuth from "@/hooks/useAuth";
import useIsMountedRef from "@/hooks/useIsMountedRef";
// components
import { IconButtonAnimate } from "@/components/animate";
import MenuPopover from "@/components/MenuPopover";
import MyAvatar from "@/components/MyAvatar";

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  // {
  //   label: 'Home',
  //   linkTo: '/',
  // },
  {
    id: "account_dropdown_visitprofile_btn",
    label: "Visit Profile",
    linkTo: "/dashboard/user/account",
  },
  {
    id: "account_dropdown_dashboard_btn",
    label: "Dashboard",
    linkTo: "/dashboard/app",
  },
];

const MENU_LOGIN = [
  {
    id: "account_dropdown_login_btn",
    label: "Login",
    linkTo: "/login",
  },
  {
    id: "account_dropdown_register_btn",
    label: "Register",
    linkTo: "/register",
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const route = useRouter();
  const { user, logout, isAuthenticated } = useAuth();

  const isMountedRef = useIsMountedRef();

  const { enqueueSnackbar } = useSnackbar();

  const [open, setOpen] = useState(null);

  const theme = useTheme();

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      route.push("/login");
      if (isMountedRef.current) {
        handleClose();
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Unable to logout!", { variant: "error" });
    }
  };

  return (
    <>
      <IconButtonAnimate
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              // bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <MyAvatar
          style={{
            backgroundColor: theme.palette.primary.main,
            color: "white",
          }}
        />
      </IconButtonAnimate>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1,
          ml: 0.75,
          "& .MuiMenuItem-root": {
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        {isAuthenticated && (
          <div>
            <Box sx={{ my: 1.5, px: 2.5 }}>
              <Typography variant="subtitle1" noWrap>
                {user?.displayName}
              </Typography>
            </Box>

            <Stack sx={{ p: 1 }}>
              {MENU_OPTIONS.map((option) => (
                <MenuItem key={option.label}>
                  <Link
                    id={option.id}
                    key={option.label}
                    href={option.linkTo}
                    onClick={handleClose}
                    sx={{ textDecoration: "none", color: "black" }}
                  >
                    {option.label}
                  </Link>
                </MenuItem>
              ))}
            </Stack>

            <Divider sx={{ borderStyle: "dashed" }} />
            <MenuItem
              id={"account_dropdown_logout_btn"}
              onClick={handleLogout}
              sx={{ m: 1, color: "red" }}
            >
              Logout
            </MenuItem>
          </div>
        )}

        {!isAuthenticated && (
          <Stack sx={{ p: 1 }}>
            {MENU_LOGIN.map((option) => (
              <Link
                key={option.label}
                id={option.id}
                href={option.linkTo}
                onClick={handleClose}
                sx={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>{option.label}</MenuItem>
              </Link>
            ))}
          </Stack>
        )}
      </MenuPopover>
    </>
  );
}
