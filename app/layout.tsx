// app/layout.tsx
import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { poppins, anuphan } from "@/app/fonts";
import type { Metadata } from "next";
import Script from "next/script";
import GAListener from "@/components/GAListener";
import { Anuphan } from "next/font/google";

export const metadata: Metadata = {
  title: "Rare collective zoo",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th-TH" className={poppins.className}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JE5CBL7675"
          strategy="afterInteractive"
        />

        {/* config */}
        <Script id="ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JE5CBL7675');
          `}
        </Script>
      </head>
      <body className="bg-black text-white flex min-h-screen flex-col">
        <GAListener />
        <Navbar />
        <main className="flex-1 bg-black">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
