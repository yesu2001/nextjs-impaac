"use client";
import Iconify from "@/components/Iconify";

const ICON_SIZE = {
  width: 24,
  height: 24,
};

export const desktopMenuConfig = [
  {
    id: "nav_about_us_btn",
    title: "About Us",
    icon: <Iconify icon={"eva:home-fill"} color="#385f96" {...ICON_SIZE} />,
    path: "/about",
  },
  {
    id: "nav_campaigns_btn",
    title: "Campaigns",
    icon: (
      <Iconify
        icon="bi:megaphone-fill"
        color="#385f96"
        width="20"
        height="20"
      />
    ),
    path: "/campaign",
  },
];

export const mobileMenuConfig = [
  {
    id: "nav_about_us_btn",
    title: "About Us",
    icon: <Iconify icon={"eva:home-fill"} color="#385f96" {...ICON_SIZE} />,
    path: "/about",
  },

  {
    id: "nav_campaigns_btn",
    title: "Campaigns",
    icon: (
      <Iconify
        icon="material-symbols:campaign-rounded"
        color="#385f96"
        width="20px"
        height="20px"
      />
    ),
    path: "/campaign",
  },
  {
    id: "nav_login_btn",
    title: "Login",
    icon: (
      <Iconify
        icon="material-symbols:login-rounded"
        color="#385f96"
        {...ICON_SIZE}
      />
    ),
    path: "/login",
  },
  {
    id: "nav_register_btn",
    title: "Register",
    icon: (
      <Iconify icon="mdi:register-outline" color="#385f96" {...ICON_SIZE} />
    ),
    path: "/register",
  },
];

export const isLogInMenuConfig = [
  {
    id: "nav_about_us_btn",
    title: "About Us",
    icon: <Iconify icon={"eva:home-fill"} color="#385f96" {...ICON_SIZE} />,
    path: "/about",
  },
  {
    id: "nav_campaigns_btn",
    title: "Campaigns",
    icon: (
      <Iconify
        icon="bi:megaphone-fill"
        color="#385f96"
        width="20px"
        height="20px"
      />
    ),
    path: "/campaign",
  },
  {
    id: "nav_dashboard_btn",
    title: "Dashboard",
    icon: <Iconify icon="ic:round-dashboard" color="#385f96" {...ICON_SIZE} />,
    path: "/dashboard/app",
  },
];
