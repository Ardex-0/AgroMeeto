import "./globals.css";
import "./AgroyaarStyle.css"
import HotjarComponent from "@/components/Helmet/Helmet";
import AgroMeet from "./agromeet/page";

export default function RootLayout() {
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
      
        <AgroMeet />
      
      </body>
    </html>
  )
}