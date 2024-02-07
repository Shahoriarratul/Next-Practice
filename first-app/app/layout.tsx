import { ClerkProvider } from "@clerk/nextjs";
import "./global.css";
import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js 13 with clerk",
  description:
    "A community-droven platform for asking and answering programming Questions. Get help, share knowledge, and collaborate with devlopers from around the world. Explore topics in the web devloupment, mobile app devloupment, algorithm, dtastructure, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
