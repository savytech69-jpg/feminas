import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feminas Family Makeover Studio - Premium Beauty Salon",
  description: "Transform your look at Feminas Family Makeover Studio. Professional makeup, hair styling, bridal packages, and beauty treatments. Book your appointment today!",
  keywords: "beauty salon, makeup artist, hair styling, bridal makeup, family makeover, beauty treatments",
  openGraph: {
    title: "Feminas Family Makeover Studio",
    description: "Professional beauty services for the whole family",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
