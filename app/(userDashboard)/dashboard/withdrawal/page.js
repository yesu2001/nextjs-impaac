import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getAuserHelper } from "@/helper/user";
import { getUserWithdrawal } from "@/helper/withdrawal";
import WithdrawalList from "@/sections/@dashboard/WithdrawalList";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Withdrawal List",
};

export default async function page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  const userData = await getAuserHelper(
    session?.user?.uid,
    session?.user?.accessToken
  );

  const data = await getUserWithdrawal(
    userData._id,
    session?.user?.accessToken
  );

  return <WithdrawalList WithdrawalData={data} user={userData} />;
}
