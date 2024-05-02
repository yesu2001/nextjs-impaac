import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getAllProfileCampaigns } from "@/helper/campaign";
import { getNgoHelper } from "@/helper/ngo";
import { getAuserHelper } from "@/helper/user";
// import Dashboard from "@/pages/dashboard/Dashboard";
import NgoProfilePage from "@/sections/@dashboard/ngo copy/NgoProfilePage";
import UserProfile from "@/sections/@dashboard/UserProfile";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Profile",
};

export default async function page() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    redirect("/login");
  }

  const userData = await getAuserHelper(
    session?.user?.uid,
    session?.user?.accessToken
  );

  console.log(userData);

  async function checkNgoProfile() {
    if (userData?.base_ngo) {
      const data = await getNgoHelper(
        userData._id,
        session?.user?.accessToken,
        userData?.base_ngo
      );
      return data;
    }
    return;
  }

  const ngoProfile = await checkNgoProfile();

  const response = await getAllProfileCampaigns(
    userData?._id,
    session?.user?.accessToken
  );
  const userCampaigns = await response.json();

  return (
    <>
      {userData?.user_role?.ngo && (
        <NgoProfilePage ngoProfile={ngoProfile} campaigns={userCampaigns} />
      )}
      {!userData?.user_role?.ngo && (
        <UserProfile userProfile={userData} campaigns={userCampaigns} />
      )}
    </>
  );
}
