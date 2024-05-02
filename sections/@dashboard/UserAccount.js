"use client";
import { capitalCase } from "change-case";
// @mui
import { Box, Container, Tab, Tabs } from "@mui/material";
// hooks
import useSettings from "@/hooks/useSettings";
import useTabs from "@/hooks/useTabs";
// components
import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import Iconify from "@/components/Iconify";
import AccountGeneral from "@/sections/@dashboard/user/account/AccountGeneral";

export default function UserAccount({ user }) {
  const { themeStretch } = useSettings();

  const { currentTab, onChangeTab } = useTabs("general");

  const ACCOUNT_TABS = [
    {
      value: "general",
      icon: <Iconify icon={"ic:round-account-box"} width={20} height={20} />,
      component: <AccountGeneral user={user} />,
    },
  ];

  return (
    <Container maxWidth={themeStretch ? false : "lg"}>
      <HeaderBreadcrumbs
        heading="Account"
        links={[
          { name: "Dashboard", href: "/dashboard/app" },
          { name: "User", href: "/dashboard/user/account" },
          { name: "Account Settings" },
        ]}
      />

      <Tabs
        allowScrollButtonsMobile
        variant="scrollable"
        scrollButtons="auto"
        value={currentTab}
        onChange={onChangeTab}
      >
        {ACCOUNT_TABS.map((tab) => (
          <Tab
            disableRipple
            key={tab.value}
            label={capitalCase(tab.value)}
            icon={tab.icon}
            value={tab.value}
          />
        ))}
      </Tabs>

      <Box sx={{ mb: 5 }} />

      {ACCOUNT_TABS.map((tab) => {
        const isMatched = tab.value === currentTab;
        return isMatched && <Box key={tab.value}>{tab.component}</Box>;
      })}
    </Container>
  );
}
