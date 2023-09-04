import "./globals.css";
import { Inter, Kanit, Sarabun } from "next/font/google";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
export const sarabun = Sarabun({
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-sarabun",
  fallback: ["Helvetica", "sans-serif"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Pops",
    default: "Pops Recording System", // a default is required when creating a template
  },
  description: "Created using next.js",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/apple-icon.png"
        />
      </head>
      <body className={`${kanit.className}`}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer position="bottom-right" theme="dark" autoClose={3000}/>
        </AuthProvider>
      </body>
    </html>
  );
}
