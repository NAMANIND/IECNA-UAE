import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { inter } from "@/styles/fonts";
import logo from "../../public/logo.svg";

export const metadata = {
  title: "Influence exchange confex & Awards 2.0 Series | 4th edition",
  description:
    " Join industry leaders at the 4th edition of Influence Exchange Confex & Awards 2.0 Series for insights, networking, and recognition in the world of influence marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-foreground bg-background ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
