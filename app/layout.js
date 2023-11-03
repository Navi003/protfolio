import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import ToggleDarkMode from "./ui/ToggleDarkMode";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Navjot Dhiman",
  description: "Created with 💟",
};

export default function RootLayoutS({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between min-h-screen overflow-x-hidden bg-base-light">
        <Navbar />
        {children}
        <div className="w-full  bg-base-medium mt-48">
          <Footer />
        </div>
      </body>
    </html>
  );
}
