import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/whatsapp";
import ScrollToTopButton from "@/components/scrollToTop";
import CustomCursor from "@/components/cursor";

const Fira = Fira_Sans({ weight: ["700"], subsets: ["latin"] });
export const metadata: Metadata = {
  title: "DigiFalx - Your Digital Partner",
  description: "Web Design & Digital Marketing Agency in Dubai & Navi Mumbai",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/white.svg" sizes="any" />
      </head>
      <body className={Fira.className}>
        <Navbar />
        <section>{children}</section>
        <Whatsapp />
        <ScrollToTopButton />
        <CustomCursor />
        <Footer />
      </body>
    </html>
  );
}
