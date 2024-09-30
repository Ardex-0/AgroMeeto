import Image from "next/image";
import React, { useState } from "react";
import StoryBg from "../../public/assets/images/HomePage/story-bg.png";
import Link from "next/link";

function Story() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className=" flex flex-col w-full max-w-[1440px] h-[960px] max-lg:h-fit gap z-10 border-t-4 border-t-[#364163] rounded-[60px] justify-start items-center ">

      <div className="flex flex-col gap items-center">

        <p className="font-RPM text-[#008B45] text-[5.5rem] max-lg:text-[3.8rem] font-semibold">AGROYAAR</p>

        <p className="text-[1.8rem] max-lg:text-[1.2rem] text-[#404848] max-lg:text-base font-semibold">
          کشاورزی <span className="text-[#008B45]">مطمئن</span> تر، <span className="text-[#008B45]">دقیق</span> تر و <span className="text-[#008B45]">اقتصادی</span> تر
        </p>

      </div>

      <div className="flex flex-row items-center max-lg:flex-col-reverse px-2 py-8 gap-2">
        {/* right section (story) */}
        <div className="white-box-shadow relative flex w-[500px] h-[500px] max-lg:w-[20.5rem] max-lg:h-[20.5rem] overflow-hidden py-8 px-4 justify-center rounded-2xl items-center gap-2 group cursor-pointer">

          <h2 className="absolute mx-auto bottom-[112px] max-lg:bottom-[130px] z-10 text-white text-[4rem] font-bold group-hover:translate-y-[-15.5rem] whitespace-nowrap max-lg:group-hover:translate-y-[-7rem] group-hover:transtion-all group-hover:duration-500 ease-in max-lg:text-[3rem] text-shadow">
            داستان اگرویار
          </h2>

          <div className="absolute z-0 w-full h-full group-hover:brightness-[0.60] group-hover:scale-[1.2] group-hover:transtion-all group-hover:delay-100 group-hover:duration-300 ease-in">
            <Image alt="background" width={500} height={500} src={StoryBg} />
          </div>

          <div className="flex flex-col gap-8 mt-24 opacity-0 group-hover:opacity-[1] group-hover:transtion-all group-hover:duration-700 ease-in">
            <div
              id="agroText"
              dir="rtl"
              className="w-full max-lg:w-[312px] cursor-pointer z-[1] text-white text-[18px] max-lg:text-[12px] font-medium"
            >
              <p>
                مجموعه شرکت های خوشه پروران در سال 1393 با هدف تولید کودهای
                زیستی و شیمیایی و تامین نهاده های بخش کشاورزی شروع به فعالیت
                کرد ولی همواره به خوبی می‌دانستیم استفاده از بهترین کودها هم
                به تنهایی برای افزایش عملکرد و بهبود شرایط مزارع کافی نیستند.
                به دنبال حلقه گمشده این بخش و با توجه به بازخوردها و نظرات
                کشاورزان و همراهان عزیزمان، سرانجام در سال 1399 پا به عرصه
                خدمات کشاورزی گذاشتیم و این چنین بود که پس از 6 سال نیازسنجی
                در این حوزه پلتفرم جامع خدمات کشاورزی اگرویار متولد شد.
              </p>

            </div>

            <Link className="text-white animate-pulse" href="/agroyaar-story">
              <div
                id="agroClick"
                className="max-lg:-mt-4 text-center cursor-pointer z-[1] whitespace-nowrap  text-[25px] font-extrabold"
              >
                برای ادامه کلیک کنید
              </div>
            </Link>
          </div>
        </div>

        {/* left section (video)*/}
        <div className="card-shadow2 !rounded-2xl p-[5px] max-lg:p-px">
          <div
            onMouseEnter={() => setIsPlaying(true)}
            onMouseLeave={() => setIsPlaying(false)}
            className="bordershadow-in flex !rounded-2xl overflow-hidden h-[30.62rem] max-lg:h-[12rem] max-lg:w-[20.5rem] items-center justify-center"
          >
            <video
              height={470}
              width={850}
              poster="https://agroyaar-static.s3.ir-thr-at1.arvanstorage.ir/interviews/AgroyaarCover.jpg"
              src="https://agroyaar-static.s3.ir-thr-at1.arvanstorage.ir/Agroyaar-Edited.mp4"
              controls={isPlaying}
            ></video>
          </div>
        </div>

      </div>


    </div >
  );
}

export default Story;
