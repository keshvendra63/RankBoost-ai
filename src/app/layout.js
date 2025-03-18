import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Toaster } from "react-hot-toast";
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
      <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-YQS5HR8DT5"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YQS5HR8DT5');
          `,
          }}
        />
      </head>
      <body className={montserratSans.variable}>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
