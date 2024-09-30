import React from "react";

export const metadata = {
  title: "درباره ما | اگرویار",
  description: "شرکت خوشه پروران مهام، با نام تجاری اگرویار در سال 1399 راه‌اندازی شد.",
};

const AboutUs = () => {
  return (
    <div className="flex flex-col w-full items-center justify-start gap-12 mt-32 max-lg:mt-12 py-16">
      <div className="flex flex-col w-fit items-center gap-4">
        <h1 className="text-[#008F47] !text-5xl font-bold">
          درباره اگرویار
        </h1>
        <div className="white-inner-box flex flex-col gap-4 justify-center max-lg:p-5">
          <p className="w-full text-[#333] text-justify leading-10 max-lg:leading-6 max-lg:text-xs">
            شرکت خوشه پروران مهام، با نام تجاری اگرویار در سال 1399 راه‌اندازی
            شد. اگرویار پلتفرم جامعی شامل سایت و اپلیکیشن برای ارائه خدمات به
            کشاورزان و کارشناسان کشاورزی است. در پلتفرم جامع خدمات کشاورزی
            اگرویار فرهنگ جدیدی از کشاورزی را تجربه می‌کنید و می‌توانید باغ و
            مزرعه خود را هدفمند و هوشمندانه مدیریت کنید.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-fit items-center gap-4">
        <p className="text-[#008F47] !text-3xl font-bold">
          ماموریت ما
        </p>
        <div className="white-inner-box flex flex-col gap-4 justify-center max-lg:p-5">
          <p className="w-full text-[#333] text-justify leading-10 max-lg:leading-6 max-lg:text-xs">
            ما متعهد هستیم که در حوزه کشاورزی و امنیت غذایی میهن عزیزمان ایران
            تأثیرگذار باشیم و به آینده‌ای پایدار برای تولید محصولات کشاورزی کشور
            کمک کنیم. با بهره‌مندی از ظرفیت اساتید، کارشناسان و فعالان حوزه
            کشاورزی کشور و با همراهی کشاورزان عزیز و تیم جوان و خلاق اگرویار، از
            طریق افزایش کیفیت و راندمان تولید محصولات کشاورزی به تولید صنعتی
            پایدار و حفاظت از محیط زیست کشورمان کمک خواهیم کرد.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-fit items-center gap-4">
        <p className="text-[#008F47] !text-3xl font-bold">
          ارزش های اصلی ما
        </p>
        <div className="white-inner-box flex flex-col gap-4 justify-center max-lg:p-5">
          <div
            direction="column"
            Resdirection="column"
            padding="1rem"
            gap="1rem"
          >
            <div
              direction="column"
              Resdirection="column"
              alignItems="flex-start"
            >
              <p className="font-bold text-[#008f47]">
                صداقت و سلامت
              </p>
              <p className="w-full text-[#333] text-justify leading-10 max-lg:leading-6 max-lg:text-xs">
                صداقت و سلامت در کار، شاخصه اصلی تیم اگرویار است و
                در آن فرهنگ جدیدی مطابق با منطق و اصول اکوسیستم کشاورزی در کل
                دنیا پایه‌ریزی شده است.
              </p>
            </div>
            <div
              direction="column"
              Resdirection="column"
              alignItems="flex-start"
            >
              <p className="font-bold text-[#008f47]">
                نوآوری و نبوغ
              </p>
              <p className="w-full text-[#333] text-justify leading-10 max-lg:leading-6 max-lg:text-xs">
                نوآوری در خدمت‌رسانی نقطه قوت تیم اگرویار است. نوآوری در اگرویار
                توسط کارکنان با انگیزه و خلاق، کارشناسان متخصص و کشاورزان پیشرو
                ایجاد شده است که همگی یک تیم منحصر به فرد را تشکیل می‌دهند.
              </p>
            </div>
            <div
              direction="column"
              Resdirection="column"
              alignItems="flex-start"
            >
              <p className="font-bold text-[#008f47]">
                سودمندی
              </p>
              <p className="w-full text-[#333] text-justify leading-10 max-lg:leading-6 max-lg:text-xs">
                انجام کاری که برای کشاورزان، کارشناسان، سهامداران، شرکای تجاری
                ما و همینطور محیط زیست سودمند و درست است.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-fit items-center gap-4">
        <p className="text-[#008F47] !text-3xl font-bold">
          اهداف ما
        </p>
        <div className="white-inner-box flex flex-col gap-4 justify-center max-lg:p-5">
          <div className="w-full text-[#333] text-justify leading-10 max-lg:leading-6 max-lg:text-xs">
            <p>همراهی کشاورزان برای تصمیم‌گیری بهتر</p>
            <p>
              همراهی کارشناسان برای ارائه خدمات به کشاورزان
            </p>
            <p>
              کمک به افزایش سلامت و راندمان تولید محصولات کشاورزی
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
