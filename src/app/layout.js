import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Toaster } from "react-hot-toast";
const montserrat = Montserrat({
  variable: "--font-Montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "RankBoost Ai | Web Development, SEO & Digital Marketing Experts",
  description:
    "RankBoost Ai is your go-to solution for web development, SEO, graphic design, and digital marketing. We create high-performance websites, boost search rankings, and drive business growth with AI-powered strategies. Elevate your online presence today!",
  keywords: [
    "web design",
    "ux design",
    "web development",
    "responsive web design",
    "web application",
    "user experience design",
    "web design services",
    "web development services",
    "seo",
    "digital marketing",
    "front end development",
    "back end development",
    "full stack development",
    "web design and development",
    "website creation",
    "web application development",
    "web design course",
    "web development course",
    "ai in web design",
    "ai for web development",
    "website maintenance",
    "web marketing",
    "user experience",
    "web graphic design",
    "website design",
    "web app development",
    "digital solutions",
    "web design and seo",
    "web development agency",
    "frontend development",
    "backend development",
    "web design and branding",
    "web design and marketing",
    "web design best practices",
    "web development best practices",
    "website optimization",
    "web app solutions",
    "web design trends",
    "web design tools",
    "web development tools",
    "e-commerce web design",
    "web design for mobile",
    "web design for developers",
    "web design principles",
    "web design portfolio",
    "graphic design",
    "digital design",
    "web design and user experience",
    "web design and social media",
    "web design and advertising",
    "web design and digital marketing",
    "web design for SEO",
    "web development frameworks",
    "content management systems",
    "website analytics",
    "website performance",
    "website security",
    "web hosting",
    "domain registration",
    "website migration",
    "web accessibility",
    "web standards",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Vue.js",
    "Angular",
    "PHP",
    "Python",
    "Ruby on Rails",
    "web development languages",
    "web development methodologies",
    "agile development",
    "waterfall development",
    "version control",
    "Git",
    "API development",
    "RESTful services",
    "web services",
    "cloud computing",
    "web performance optimization",
    "website usability",
    "A/B testing",
    "conversion rate optimization",
    "lead generation",
    "email marketing",
    "social media marketing",
    "content marketing",
    "search engine marketing",
    "pay-per-click advertising",
    "online reputation management",
    "digital branding",
    "digital strategy",
    "user interface design",
    "wireframing",
    "prototyping",
    "mockups",
    "user testing",
    "customer journey mapping",
    "digital project management",
    "remote work tools",
    "collaboration tools",
    "freelancing platforms",
    "online courses",
    "webinars",
    "networking",
    "professional development",
    "industry trends",
    "best practices"
],
  openGraph: {
    title: "RankBoost Ai | Web Development, SEO & Digital Marketing Experts",
    description:
      "RankBoost Ai is your go-to solution for web development, SEO, graphic design, and digital marketing. We create high-performance websites, boost search rankings, and drive business growth with AI-powered strategies. Elevate your online presence today!",
    url: "https://rankboostuk.in/",
    images: [
      {
        url: "https://rankboostuk.in/android-chrome-512x512.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rankboostuk.in/",
  },
  icons: {
    icon: "https://rankboostuk.in/favicon-32x32.png", // Default favicon
    apple: "https://rankboostuk.in/apple-touch-icon.png", // Apple Touch Icon
    shortcut: "https://rankboostuk.in/favicon.ico", // Shortcut Icon
  },
  other: {
    // Add custom meta tags here
    "title": "RankBoost Ai | Web Development, SEO & Digital Marketing Experts",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="../../public/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="../../public/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="../../public/favicon-16x16.png"/>
<link rel="manifest" href="../../public/site.webmanifest"/>
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
      <body className={montserrat.variable}>
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
