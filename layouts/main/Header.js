import React from "react";
import Link from "next/link";
import { Box, Button, AppBar, Toolbar, Container } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Logo from "@/components/Logo";
import useOffSetTop from "@/hooks/useOffSetTop";
import { HEADER } from "@/config";
import cssStyles from "@/utils/cssStyles";
import useResponsive from "@/hooks/useResponsive";
import { usePathname } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import MenuDesktop from "./MenuDesktop";
import {
  desktopMenuConfig,
  isLogInMenuConfig,
  mobileMenuConfig,
} from "./menuConfig";
import AccountPopover from "../dashboard/header/AccountPopover";
import MenuMobile from "./MenuMobile";

export default function Header() {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);
  const theme = useTheme();
  const { isAuthenticated } = useAuth();
  const { pathname } = usePathname();
  const isDesktop = useResponsive("up", "md");

  const isHome = pathname === "/";

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: "transparent" }}>
      <Toolbar
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <Box sx={{ flexGrow: 1 }} />
          {isDesktop && !isAuthenticated && (
            <MenuDesktop
              isOffset={isOffset}
              isHome={isHome}
              navConfig={desktopMenuConfig}
            />
          )}
          {isDesktop && isAuthenticated && (
            <MenuDesktop
              isOffset={isOffset}
              isHome={isHome}
              navConfig={isLogInMenuConfig}
            />
          )}
          <Button
            id="b_start_fundraiser_navbar"
            sx={{ m: { md: 2, xs: 1 }, fontWeight: "500", fontSize: "15px" }}
            variant="contained"
            rel="noopener"
            href={"/fundraisers/new"}
          >
            Start Campaign
          </Button>
          {isDesktop && <AccountPopover />}

          {!isDesktop && !isAuthenticated && (
            <MenuMobile
              isOffset={isOffset}
              isHome={isHome}
              navConfig={mobileMenuConfig}
            />
          )}
          {!isDesktop && isAuthenticated && (
            <MenuMobile
              isOffset={isOffset}
              isHome={isHome}
              navConfig={isLogInMenuConfig}
            />
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
}
