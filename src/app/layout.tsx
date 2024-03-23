import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { Metadata } from "next";
import Navbar from "./component/Navbar";

const inter = Poppins({ subsets: ["latin"], weight: ["100", "200", '300', "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Simply Crud Page",
  description: "Created using next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster richColors position="top-right"/>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
