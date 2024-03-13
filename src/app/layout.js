'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from 'next-themes'
import Theme from "tailwindcss-animated/src/theme";
import { Analytics } from "@vercel/analytics/react";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics/>
      <body>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem/>{children}
      
      </body>
    </html>
  );
}
