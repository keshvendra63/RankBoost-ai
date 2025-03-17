import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const montserratSans = Montserrat({
  variable: "--font-Montserrat",
  subsets: ["latin"],
});


export const metadata = {
  title: "RankBoost Ai | Web Development, SEO & Digital Marketing Experts",
  description: "RankBoost Ai is your go-to solution for web development, SEO, graphic design, and digital marketing. We create high-performance websites, boost search rankings, and drive business growth with AI-powered strategies. Elevate your online presence today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserratSans.variable}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
