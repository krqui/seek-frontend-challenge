import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SeekyApp",
  description: "My front-end challenge in React and NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider count={7}>
      <html lang="en">
        <body className={`${workSans.variable} font-work-sans antialiased`}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
