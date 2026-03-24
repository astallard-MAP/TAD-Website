import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FrankAI from "@/components/FrankAI/FrankAI";

export const metadata: Metadata = {
  title: "The Auction Department | Land & Property Auction Specialists UK",
  description: "The Auction Department Limited is a leading UK Land and Property Auction company. We provide a transparent and professional service for buying and selling property at auction.",
  keywords: "property auction, land auction, UK real estate, sell property fast, buy auction property, The Auction Department",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
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
