import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "RealtMark — Real Estate Digital Marketing Across Dubai & the GCC",
  description:
    "Digital growth partner for real estate developers, brokerages, and agents across Dubai, Abu Dhabi, and the wider GCC. SEO, paid media, content, and CRM systems built for qualified buyer and investor leads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}
