
import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/whatsapp";



const Fira = Fira_Sans({ weight: ["700"],subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digifalx",
  description: "Web Design & Digital Marketing Agency in Mumbai - DigiFalx",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={Fira.className}>
         <Navbar/> 
         <section>
          {children}
          <Whatsapp/>
         </section>
        

         <Footer/>
        
      
      </body>
    </html>
  );
}
