import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUserDonations } from "@/helper/donor";
import { getAuserHelper } from "@/helper/user";
import DonationList from "@/sections/@dashboard/DonationList";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Donation List",
};

export default async function page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/login");
  }
  const userData = await getAuserHelper(
    session?.user?.uid,
    session?.user?.accessToken
  );

  const data = await getUserDonations(
    userData?._id,
    session?.user?.accessToken
  );

  return <DonationList donations={data} user={userData} />;
}
