import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "CTF Platform",
  description: "Capture the Flag Challenge Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <Navbar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
