import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNavigation from "@/shared/layout/Bottom-Navigation/navigation";

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
      lang="fa"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      dir="rtl"
    >
      <body className="h-full">
        <div className="relative flex flex-col h-full bg-gray-200 font-['Vazirmatn']">
          <main className=" flex-1 overflow-hidden   px-5 pt-5  relative   w-full max-w-3xl mx-auto bg-black text-white sm:items-start">
            {children}
          </main>
          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
