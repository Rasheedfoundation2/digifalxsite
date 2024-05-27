import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarMain } from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digifalx",
  description: "Web Design & Digital Marketing Agency in Mumbai - DigiFalx",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <NavbarMain/>
        {children}
      
      </body>
    </html>
  );
}
