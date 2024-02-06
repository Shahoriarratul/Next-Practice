import { SignOutButton, UserButton } from "@clerk/nextjs";
import React from "react";

export default function Questions() {
  return (
    <div>
      Questions
      <UserButton />
      <SignOutButton />
    </div>
  );
}
