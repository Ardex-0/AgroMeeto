import React from 'react'

// nextComponents 
import Image from "next/image";

// image
import tree from "../../../public/assets/images/HomePage/appSection/appTree.png";
import mobile from "../../../public/assets/images/HomePage/appSection/mobile.png";
import Link from 'next/link';

function AppSection() {
    return (
        <div id='appsection' className="Application relative flex flex-col justify-end items-start h-[100vh] my-40 max-lg:my-16">

            <div className="Container z-10 flex flex-row max-lg:flex-col items-center justify-evenly max-lg:justify-end max-lg:py-4 neo agrobg rounded-2xl h-[400px] max-lg:h-[450px] w-[1200px] max-lg:w-[20rem]">

                <div className="Leftimage -mt-[360px] justify-start items-center inline-flex">
                    <Image className="Mobile2 hover:brightness-105 hover:-translate-y-2 duration-700 max-lg:w-[280px]" width={500} src={mobile} alt='mobile-app' />
                </div>

                <div className="Description flex-col justify-start items-center gap-6 flex">
                    <h2 className=" text-center text-[#333333] text-4xl max-lg:text-2xl font-black ">اپلیکیشن اگرویار</h2>
                    <p className=" w-[33.8rem] max-lg:w-[18.5rem] !leading-6 text-right text-[#333333] text-[0.9rem] max-lg:text-xs ">تمام نیازهای کشاورزی شما از مدیریت تغذیه و کوددهی گرفته تا بازدید تخصصی، ابزار مدیریت مزرعه، مدیریت علف‌های هرز، تقویم سمپاشی و دسترسی به شبکه جامع کارشناسان کشاورزی ایران در اپلیکیشن خدمات کشاورزی اگرویار</p>
                    <div className="Alert w-11/12 p-2 bg-yellow-200 rounded-2xl border border-slate-100 justify-end items-start gap-0.5 inline-flex">
                        <p className="Falre499451 text-right text-[#333333] text-[0.8rem] max-lg:text-xs font-normal ">
                            جهت تست انجام بازدید در اپلیکیشن، می‌توانید از کد کشاورز FKSAZ900051 استفاده نمایید.
                        </p>
                    </div>

                    <Link href={"https://agroyaar.com/download/agroyaar.apk"}>
                        <div className="button-neo px-14 max-lg:px-4 py-4 hover:brightness-105 duration-300 rounded-3xl justify-center items-center gap-2.5 inline-flex">
                            <p className=" text-center text-green-700 text-xl max-lg:text-sm font-semibold ">دانلود اپلیکیشن (نسخه آزمایشی)</p>
                        </div>
                    </Link>
                </div>

            </div>

            <Image className="tree absolute hover:brightness-[1.02] hover:-translate-y-1 duration-500 -right-52 max-lg:right-0 max-lg:mx-auto max-lg:w-[436px]" width={640} src={tree} alt='tree-background' />

        </div>
    )
}

export default AppSection