import React from "react";
import "./global.css";
import { merriweather } from "./fonts";
import Navbar from "./components/navbar/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={merriweather.className}>
      <body>
        <div className="main-container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
