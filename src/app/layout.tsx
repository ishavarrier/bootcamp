import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // You can change the font to anything you want.
import Navbar from './components/navbar';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isha Varrier's Personal Website",
  description: "A personal website for Isha Varrier.",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}

