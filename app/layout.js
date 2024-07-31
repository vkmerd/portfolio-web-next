import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
      <Header />
        {children}
        
        </body>
    </html>
  );
}
