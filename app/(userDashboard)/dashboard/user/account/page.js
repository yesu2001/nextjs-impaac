import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getAuserHelper } from "@/helper/user";
import UserAccount from "@/sections/@dashboard/UserAccount";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "User - Account Settings",
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

  return (
    <div>
      <UserAccount user={userData} />
    </div>
  );
}
