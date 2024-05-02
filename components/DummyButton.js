"use client";
import { signOut } from "next-auth/react";
import React from "react";

export default function DummyButton() {
  return <button onClick={() => signOut()}>Sign out</button>;
}
