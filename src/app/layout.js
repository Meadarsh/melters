
import "./globals.css";
import { Inter } from "next/font/google";
import ShoppingP from "./shop/page";
import Link from "next/link";
import Navbar from './components/Navbar';
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
   
    <html lang="en">
      <body className={inter.className}>
      
        {children} 
      
      
         </body>
    </html>
  );
}