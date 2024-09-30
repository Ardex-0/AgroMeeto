import Footer from "@/components/Footer/Footer";
import "./globals.css";
import "./AgroyaarStyle.css"
import Navbar from "@/components/Navbar/Navbar";
import HotjarComponent from "@/components/Helmet/Helmet";

export default function RootLayout({ children }) {
  const metadata = {
    title: "اگرویار | پلتفرم جامع خدمات کشاورزی",
    description: "اگرویار تمام نیازهای کشاورزی شما از خدمات برنامه کودی گرفته تا بازدید تخصصی، مدیریت مزرعه، مدیریت علف‌های هرز، آزمایشات آب و خاک و ... را برطرف می‌کند.",
  }
  return (
    <html lang="fa-IR" dir="rtl">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
        <HotjarComponent />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}