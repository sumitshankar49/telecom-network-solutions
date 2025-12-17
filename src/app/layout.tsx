import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['monospace'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "DPB Solution - Telecommunications & IT Solutions",
  description: "Leading provider of telecommunications and IT solutions, connecting businesses to the future with cutting-edge technology and unparalleled service.",
  keywords: "telecommunications, IT solutions, internet, cloud services, VoIP, cybersecurity, managed services",
  authors: [{ name: "DPB Solution" }],
  creator: "DPB Solution",
  publisher: "DPB Solution",
  openGraph: {
    title: "DPB Solution - Telecommunications & IT Solutions",
    description: "Leading provider of telecommunications and IT solutions.",
    url: "https://dpbsolution.com",
    siteName: "DPB Solution",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DPB Solution - Telecommunications & IT Solutions",
    description: "Leading provider of telecommunications and IT solutions.",
    creator: "@dpbsolution",
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
