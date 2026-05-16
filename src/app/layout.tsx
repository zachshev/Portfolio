import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zach Shev | Fine Art Portraiture",
  description: "Heirloom Portraiture designed to last for generations by contemporary artist Zach Shev.",
  openGraph: {
    title: "Zach Shev | Fine Art Portraiture",
    description: "Heirloom Portraiture designed to last for generations by contemporary artist Zach Shev.",
    url: "https://zachshev.com",
    siteName: "Zach Shev",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`font-sans min-h-screen flex flex-col antialiased bg-[#D9D9D4] text-[#2a2a2a] overflow-x-hidden`}
      >
        <SmoothScroll>
          <Navigation />
          <main className="flex-grow pt-24">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
