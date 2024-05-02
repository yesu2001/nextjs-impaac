import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DummyButton from "@/components/DummyButton";

export default async function page() {
  const session = await getServerSession(authOptions);

  console.log(session);
  if (session) {
    return (
      <div>
        <p>
          Signed in as {session.user.email} <br />
        </p>
        <DummyButton />
      </div>
    );
  }
  return <div>Not signed in</div>;
}
