import Navbar from "@/components/Navbar";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google"
import Footer from "@/components/Footer";

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
