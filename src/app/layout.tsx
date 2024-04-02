import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideNavbar from "@/components/SideNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-white flex text-black",
          inter.className,
          {
            "debug-screens": process.env.NODE_ENV == "development",
          }
        )}
      >
        <SideNavbar></SideNavbar>
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  );
}
