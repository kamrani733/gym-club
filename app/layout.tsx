import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNavigation from "@/shared/layout/Bottom-Navigation/bottom-navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitPulse",
  description: "Fitness Social Network",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full dir-rtl">
        <div className="relative flex flex-col h-full bg-gray-200 font-sans ">
          <main className="relative flex-1 w-full max-w-3xl mx-auto px-16 pt-32 pb-20 bg-black text-white sm:items-start">
            {children}
          </main>
          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
