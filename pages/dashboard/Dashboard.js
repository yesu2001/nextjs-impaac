"use client";
import useAuth from "@/hooks/useAuth";
import NgoProfilePage from "@/sections/@dashboard/ngo copy/NgoProfilePage";
import UserProfile from "@/sections/@dashboard/UserProfile";
import React from "react";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <>
      {user?.userType?.ngo && <NgoProfilePage />}
      {!user?.userType?.ngo && <UserProfile />}
    </>
  );
}
