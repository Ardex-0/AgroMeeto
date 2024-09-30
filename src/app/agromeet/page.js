import { Servicecard } from "@/statics/Servicecard";
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
    <div
      className="flex flex-row-reverse max-lg:flex-col items-center justify-center max-lg:py-12 py-28 px-8 my-8 gap-8"
    >

      <div className="flex flex-col max-lg:flex-row gap-2 items-center justify-center">

        <div className="flex max-lg:p-px p-[7px] w-fit h-fit bg-gradient-to-tl from-white to-slate-100 rounded-full logo-shadow border border-[#C2D9ED] justify-center items-center hover:brightness-110 hover:-translate-y-2 duration-500">

          <Image src={meet} alt="agro-meet" width={220} />

        </div>


        <h2 className="!text-[#21297A] text-[3rem] font-bold">
          AgroMeet
        </h2>

      </div>

      <div key={3} className="flex bordershadow-out p-2 !rounded-2xl">
        <div className="bordershadow-in !bg-[#21297A] w-[70vw] max-w-[1200px] max-lg:w-full flex flex-col gap-4 items-center justify-end p-4 pb-0 h-full rounded-2xl shadow-inner overflow-hidden ">
          <h1 className="!text-[#ffffff] text-3xl max-lg:text-xl whitespace-nowrap font-bold">
            شبکه اشتراک دانش کشاورزی اگرویار
          </h1>
          <div className={`flex flex-row max-lg:flex-col items-center justify-center lg:mb-4 !rounded-2xl p-[5px] max-lg:p-px`}>

            <Image className="lg:w-[45%] hover:brightness-110 hover:-translate-y-2 duration-500" src={pooster} alt="agro-meet" />

            <div style={{ boxShadow: "0px 14px 32px -4px rgba(6, 14, 90, 0.75), -4px -4px 12px 0px #303993" }} className={`flex flex-col max-lg:w-full items-center justify-center gap-4 py-6 bg-[#21297A] rounded-[40px] max-lg:rounded-b-none`}>
              <div className="flex flex-col items-center justify-center gap-6">
                <h4 className="text-white text-center text-3xl font-bold">
                  اگرومیت
                </h4>
                <p className="text-white text-center font-thin text-[16px] w-[90%]">
                  بستری برای آموزش و یادگیری کشاورزی به سبکی نوین و اثربخش، برگزاری جلسات آنلاین برای کشاورزان و فعالین این حوزه
                </p>
              </div>
              <Link href="/agromeet">
                <div className={`button-neo flex hover:brightness-110 hover:duration-500 cursor-pointer transition-all items-center justify-center px-[32px] text-neo py-[4px] !bg-white rounded-3xl !text-[#21297A] text-[23px] font-bold`} >
                  به زودی ...
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};


export default AgroMeet;