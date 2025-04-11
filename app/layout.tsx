import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/Footer";

const geistMono = localFont({
  src: [
    {
      path: './fonts/GeistMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/GeistMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/GeistMono-Light.ttf',
      weight: '300',
      style: 'normal',
    }
  ],
  variable: '--font-geist-mono'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${geistMono.variable}`}>
      <body className={`font-mono`}>
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
