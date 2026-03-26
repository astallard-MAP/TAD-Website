import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FrankAI from "@/components/FrankAI/FrankAI";
import ComingSoon from "@/components/ComingSoon/ComingSoon";

export const viewport = {
  themeColor: '#8461a6',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "The Auction Department | Land & Property Auction Specialists UK",
  description: "The Auction Department Limited is a leading UK Land and Property Auction company. We provide a transparent and professional service for buying and selling property at auction.",
  keywords: "property auction, land auction, UK real estate, sell property fast, buy auction property, The Auction Department",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body style={{ position: 'relative' }}>
        <ComingSoon />
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <FrankAI />
      </body>
    </html>
  );
}
