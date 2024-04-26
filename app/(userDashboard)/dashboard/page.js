import { redirect } from "next/navigation";
import React from "react";

export default function page() {
  redirect("/dashboard/app");
  return <div>Loading...</div>;
}
