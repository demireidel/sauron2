import "./globals.css";
import React from "react";

export const metadata = {
  title: "Atucha II — Production 3D Guided Tour",
  description: "Guided tour and free explore of Atucha II (PHWR) — exterior, MCR, and reactor core.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
