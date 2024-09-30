import Image from "next/image";
import Link from "next/link";
import React from "react";
import pooster from "/public/assets/images/Meetpooster.png"
import meet from "/public/assets/images/HomePage/CardsPlatforms/agroMeet.svg"

export const metadata = {
  title: "شبکه اشتراک دانش کشاورزی",
  description: "مجموعه شرکت‌های خوشه پروران در سال 1393 با هدف تولید کودهای زیستی و شیمیایی و تامین نهاده‌های بخش کشاورزی شروع به فعالیت کرد.",
};


const AgroMeet = () => {
  return (

    <div className="flex">
      <div className="!bg-[#21287af1] w-full flex flex-col gap-4 items-center justify-end py-4 h-full shadow-inner overflow-hidden ">

        <div className="flex flex-row max-lg:flex-row gap-4 py-2 lg:pr-32 max-lg:px-2 w-full !bg-[#21276e] items-center justify-center">

          <h2 className="!text-[#ffffff] text-[3rem] max-lg:text-base font-bold">
            AgroMeeto
          </h2>

          <div className="flex meet-shadow rounded-full max-lg:p-px p-[7px] w-fit h-fit justify-center items-center hover:brightness-110 hover:-translate-y-2 duration-500">

            <Image className="brightness-[10]" src={meet} alt="agro-meet" width={60} />

          </div>

          <h1 className="!text-[#ffffff] text-[2.5rem] max-lg:text-[1.1rem] whitespace-nowrap font-bold">
            شبکه اشتراک دانش کشاورزی
          </h1>

        </div>

        <div className={`flex flex-row max-lg:flex-col gap-8 max-lg:gap-2 items-center justify-center mb-4 !rounded-2xl p-4 max-lg:p-px`}>

          <Image className="lg:w-[45%] max-lg:w-[80%] hover:brightness-110 hover:-translate-y-2 duration-500" src={pooster} alt="agro-meet" />

          <div className={`meet-shadow lg:w-[50%] flex flex-col max-lg:w-[95%] items-center justify-center gap-4 py-6 bg-[#21297A] rounded-[40px]`}>
            <div className="flex flex-col items-center justify-center gap-6">
              <h4 className="text-white text-center text-3xl max-lg:text-2xl font-bold">
                اگرومیتو
              </h4>
              <p className="text-white text-center font-thin text-[16px] max-lg:text-sm w-[90%]">
                شبکه اشتراک دانش کشاورزی، یک پلتفرم جامع است که به منظور ایجاد، اشتراک و ارائه، جلسات و دوره‌های آموزش آنلاین و حضوری طراحی شده‌است.
                <br />
                این پلتفرم، فضایی را فراهم می‌کند تا مدرسان بتوانند فعالیت‌های آموزشی ایجاد کرده و دانشپذیران بتوانند در دوره‌ها و جلسات شرکت کرده و تعاملات آموزشی لازم را برقرار کنند.
              </p>
            </div>
            <Link href="/agromeet">
              <div className={`button-neo flex hover:brightness-110 hover:duration-500 cursor-pointer transition-all items-center justify-center px-[32px] text-neo py-[4px] !bg-white rounded-3xl !text-[#21297A] text-[23px] max-lg:text-xl font-bold`} >
                به زودی ...
              </div>
            </Link>
          </div>

        </div>

        <div className={`lg:meet-shadow flex flex-col lg:w-[50%] max-lg:w-[95%] items-center justify-center gap-4 lg:m-32 py-6 lg:bg-[#21297A] rounded-[40px]`}>
          <div className="flex flex-col w-full items-center justify-center gap-6">
            <h4 className="text-white text-right text-3xl max-lg:text-xl font-bold w-[90%]">
              مورد استفاده برای:
            </h4>
            <p className="text-white text-right w-[500px] max-lg:w-[300px] font-thin text-[16px]">
              -تمامی دانشپذیران حوزه کشاورزی
            </p>
            <p className="text-white text-right w-[500px] max-lg:w-[300px] font-thin text-[16px]">
              -دانشگاه‌ها و مراکز تحقیقات کشاورزی
            </p>
            <p className="text-white text-right w-[500px] max-lg:w-[300px] font-thin text-[16px]">
              -آموزشگاه‌های خصوصی
            </p>
            <p className="text-white text-right w-[500px] max-lg:w-[300px] font-thin text-[16px]">
              -سازمان‌ها و شرکت‌ها
            </p>
            <p className="text-white text-right w-[500px] max-lg:w-[300px] font-thin text-[16px]">
              -مدرسین و خبرگان مستقل
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};


export default AgroMeet;