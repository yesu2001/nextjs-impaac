"use client";
// components
import SvgIconStyle from "../../../components/SvgIconStyle";

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const ICONS = {
  cart: getIcon("ic_cart"),
  user: getIcon("ic_user"),
  banking: getIcon("ic_banking"),
  ecommerce: getIcon("ic_ecommerce"),
  analytics: getIcon("ic_analytics"),
  dashboard: getIcon("ic_dashboard"),
  menuItem: getIcon("ic_menu_item"),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: "general",
    items: [
      {
        id: "dashboard_nav_btn",
        title: "Dashboard",
        path: "/dashboard/app",
        icon: ICONS.dashboard,
      },
      {
        id: "dashboard_nav_campaigns_btn",
        title: "My Campaigns",
        path: "/dashboard/campaign",
        icon: ICONS.menuItem,
      },
      {
        id: "dashboard_nav_donations_btn",
        title: "My Donations",
        path: "/dashboard/donation",
        icon: ICONS.ecommerce,
      },
      {
        id: "dashboard_nav_withdrawals_btn",
        title: "My Withdrawals",
        path: "/dashboard/withdrawal",
        icon: ICONS.analytics,
      },
      // { title: 'KYC', path: PATH_DASHBOARD.general.kyc, icon: ICONS.banking },
      {
        id: "dashboard_nav_account_btn",
        title: "Account Setting",
        path: "/dashboard/user/account",
        icon: ICONS.user,
      },
      // {
      //   title: 'Logout',
      //   icon: ICONS.menuItem,
      // },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'management',
  //   items: [
  //     // USER
  //     {
  //       title: 'user',
  //       path: PATH_DASHBOARD.user.root,
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'profile', path: PATH_DASHBOARD.user.profile },
  //         { title: 'account', path: PATH_DASHBOARD.user.account },
  //       ],
  //     },
  //     // {
  //     //   title: 'Organisation',
  //     //   path: PATH_DASHBOARD.organisation.root,
  //     //   icon: ICONS.user,
  //     //   children: [
  //     //     { title: 'profile', path: PATH_DASHBOARD.organisation.profile },
  //     //     { title: 'account', path: PATH_DASHBOARD.organisation.account },
  //     //     { title: 'create', path: PATH_DASHBOARD.organisation.new },
  //     //   ],
  //     // },
  //   ],
  // },
];

export default navConfig;
