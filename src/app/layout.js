
import "./globals.css";
import "./index.css"
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Providers } from "./toolkit/providers";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Melters",
  description: "iceCream store",
  
};

export default function RootLayout({ children }) {
  return (
   
    <html lang="en">
     <UserProvider>
      <Providers>
      <body className={inter.className}>
       
       {children} 
     
        </body>
      </Providers>
      
         </UserProvider>
    </html>
  );
}
