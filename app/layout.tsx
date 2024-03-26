import React from "react";
import "./global.css";
import { merriweather } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={merriweather.className}>
      <body>{children}</body>
    </html>
  );
}
