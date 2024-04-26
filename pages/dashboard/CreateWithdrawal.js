"use client";
import { useEffect, useState } from "react";
// @mui
import { Container } from "@mui/material";
// hooks
import useSettings from "@/hooks/useSettings";
// sections
import { getAuserHelper } from "@/helper/user";
import useAuth from "@/hooks/useAuth";
import WithdrawalInfo from "@/sections/@dashboard/withdrawal/details/WithdrawalCreate";
import { getCampaignHelper } from "@/helper/campaign";
import { useParams } from "next/navigation";

// ----------------------------------------------------------------------

export default function CreateWithdrawal() {
  const { themeStretch } = useSettings();

  const { id } = useParams();

  const { user } = useAuth();

  const [userData, setUserData] = useState();

  const [campaign, setCampaign] = useState({});

  useEffect(() => {
    preload();
    preloadCampaign(id);
  }, []);

  const preload = () => {
    getAuserHelper(user.uid, user.token).then((data) => {
      if (data.error) {
        console.log(data.error);
      }
      setUserData(data);
    });
  };

  // Fetch Campaign
  const preloadCampaign = (id) => {
    getCampaignHelper(id).then(async (data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCampaign(data);
      }
    });
  };

  return (
    <Container maxWidth={themeStretch ? false : "lg"}>
      {userData && campaign && (
        <WithdrawalInfo userData={userData} campaign={campaign} />
      )}
    </Container>
  );
}
