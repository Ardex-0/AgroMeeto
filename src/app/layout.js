import "./globals.css";
import "./AgroyaarStyle.css"
import HotjarComponent from "@/components/Helmet/Helmet";
import AgroMeet from "./agromeet/page";

export default function RootLayout() {
  const metadata = {
    title: "اگرومیتو | شبکه اشتراک دانش کشاورزی کشاورزی",
    description: "                  بستری برای آموزش و یادگیری کشاورزی به سبکی نوین و اثربخش، برگزاری جلسات آنلاین برای کشاورزان و فعالین این حوزه",
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