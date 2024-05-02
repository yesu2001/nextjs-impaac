import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getAllProfileCampaigns } from "@/helper/campaign";
import { getAuserHelper } from "@/helper/user";
import CampaignList from "@/sections/@dashboard/CampaignList";
import { getServerSession } from "next-auth";
import React from "react";

export const metadata = {
  title: "Campaign List",
};

export default async function page() {
  const session = await getServerSession(authOptions);
  const userData = await getAuserHelper(
    session?.user?.uid,
    session?.user?.accessToken
  );

  const response = await getAllProfileCampaigns(
    userData?._id,
    session?.user?.accessToken
  );
  const campaigns = await response.json();

  return (
    <CampaignList
      campaigns={campaigns}
      user={userData}
      userProfile={userData}
    />
  );
}
