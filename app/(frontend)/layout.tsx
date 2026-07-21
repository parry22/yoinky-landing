import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

// Headings and decorative accents: Instrument Serif. Body: system-ui (globals.css).
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Yoinky",
  description:
    "An AI agent that actually makes real sense of your growing personal brand. Lives in Telegram.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} h-full`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning><SmoothScroll>{children}</SmoothScroll></body>
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="Tjsyhk/9urDnPvGIrKcZhQ"
        strategy="afterInteractive"
      />
    </html>
  );
}
