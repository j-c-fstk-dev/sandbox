import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
  "#MonthlyEarthDay - A Global Movement for Monthly Environmental Action",
  description:
  "Join the #MonthlyEarthDay movement! Take meaningful environmental action on the 22nd of every month. Connect with a global community working towards sustainability and positive environmental impact."
};

export default function RootLayout({
  children
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" data-oid="b1jifow">
      <head data-oid="x0ail_k">
        <Script
          type="module"
          src="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/preload/dist/index.js"
          data-oid="zxbuq9a" />

        <link rel="preconnect" href="https://fonts.googleapis.com" data-oid="r1zm-.2" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="" data-oid="efzjkqp" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap"
          rel="stylesheet" data-oid="ubn7zd9" />

      </head>
      <body
        className="antialiased bg-neutral-light-gray min-h-screen"
        data-oid="hqec2:a">

        <Header data-oid="-h:65mu" />
        <main className="pt-16" data-oid="nz_b-74">{children}</main>
        <Footer data-oid="p9xf9gx" />
      </body>
    </html>);

}