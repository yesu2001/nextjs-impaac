"use client";
import { useEffect, useState } from "react";
// @mui
import { Container, Typography } from "@mui/material";
// hooks
import useAuth from "@/hooks/useAuth";
import useSettings from "@/hooks/useSettings";
// components
import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import DonationItem from "@/sections/@dashboard/donation/list/DonationItem";
import { getUserDonations } from "@/helper/donor";
import CircularLoader from "@/components/CircularLoader";

export default function DonationList({ donations, user }) {
  const { themeStretch } = useSettings();
  // const { user } = useAuth();
  // const [loading, setLoading] = useState(false);
  // const [myDonations, setMyDonations] = useState([]);

  // useEffect(() => {
  //   setLoading(true);
  //   preload();
  // }, [user]);

  // const preload = () => {
  //   if (!user.id || !user.token) {
  //     return;
  //   }
  //   getUserDonations(user.id, user.token)
  //     .then((data) => {
  //       setMyDonations(data);
  //     })
  //     .catch((err) => console.error(err))
  //     .finally(() => setLoading(false));
  // };

  return (
    <Container maxWidth={themeStretch ? false : "lg"}>
      <HeaderBreadcrumbs
        heading="Donation List"
        links={[
          { name: "Dashboard", href: "/dashboard/app" },
          { name: "Donation", href: "/donations" },
        ]}
      />
      {/* {loading && <CircularLoader />} */}
      {donations?.length < 1 && (
        <Typography variant="h4" sx={{ color: "gray", textAlign: "center" }}>
          There no donations of yours.
        </Typography>
      )}
      {donations.length > 0 &&
        donations?.map((donation) => (
          <div key={donation._id}>
            <DonationItem donation={donation} user={user} />
          </div>
        ))}
    </Container>
  );
}
