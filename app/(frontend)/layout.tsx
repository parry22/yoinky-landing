import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Yoinky",
  description: "A Proactive and Ambient AI that learns from you and understands you better than you do.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning><SmoothScroll>{children}</SmoothScroll></body>
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="Tjsyhk/9urDnPvGIrKcZhQ"
        strategy="afterInteractive"
      />
    </html>
  );
}
