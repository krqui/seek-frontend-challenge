"use client";

import { Work_Sans } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ↓ there is a mismatch in Google Chrome, here is the solution
  useEffect(() => {
    document.documentElement.setAttribute("hc", "delumine-smart dynamic");
    document.documentElement.setAttribute("looks-dark", "");
  }, []);
  return (
    <html lang="en">
      <body className={`${workSans.variable} font-work-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
