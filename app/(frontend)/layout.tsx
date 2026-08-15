import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const denton = localFont({
  src: [
    { path: "../../public/fonts/Denton-Light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/Denton-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Denton-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Denton-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-denton",
  display: "swap",
});

const delight = localFont({
  src: "../../public/fonts/Delight-Variable.ttf",
  weight: "100 900",
  variable: "--font-delight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yoinky",
  description:
    "The company narrative engine that turns founder insight, customer evidence and company activity into governed narratives and traceable content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${denton.variable} ${delight.variable} h-full`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning><SmoothScroll>{children}</SmoothScroll></body>
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="Tjsyhk/9urDnPvGIrKcZhQ"
        strategy="afterInteractive"
      />
    </html>
  );
}
