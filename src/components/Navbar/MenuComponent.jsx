import Link from "next/link";
import React from "react";



function MenuComponent() {


    return (

        <ul className="card-shadow agrobg fixed max-lg:top-[14rem] top-[8rem] right-[34vw] max-lg:w-[90vw] max-lg:right-6 max-lg:items-center flex flex-col justify-between max-lg:flex max-lg:flex-col w-[10rem] h-[17rem] text-center rounded-2xl pr-1 pt-1">
            <Link href="https://plan.agroyaar.com/">
                <li className="text-right text-zinc-800 text-base font-medium m-2">اگروپلن</li>
            </Link>
            {/* <ul className="hidden card-shadow agrobg fixed max-lg:top-[14rem] top-[8rem] right-[46vw] max-lg:w-[90vw] max-lg:right-6 max-lg:items-center  flex-col justify-between max-lg:flex max-lg:flex-col w-fit h-fit gap-5 text-right rounded-2xl p-2">
                <li>درخواست برنامه غذایی</li>
                <li>شرکت های طرف قرارداد</li>
                <li>سوالات متداول</li>
            </ul> */}
            <Link href="https://agroiranexpert.com/">
                <li className="text-right text-zinc-800 text-base font-medium m-2">اگروایران اکسپرت</li>
            </Link>
            {/* <ul className="hidden card-shadow agrobg fixed max-lg:top-[14rem] top-[8rem] right-[46vw] max-lg:w-[90vw] max-lg:right-6 max-lg:items-center flex-col justify-between max-lg:flex max-lg:flex-col w-fit h-fit gap-2 text-center rounded-2xl p-2">
                <li>ماموریت و اساسنامه</li>
                <li>کارشناسان تخصصی</li>
            </ul> */}
            <Link href="https://visit.agroyaar.com/">
                <li className="text-right text-zinc-800 text-base font-medium m-2">اگرو ویزیت</li>
            </Link>
            {/* <ul className="hidden card-shadow agrobg fixed max-lg:top-[14rem] top-[8rem] right-[46vw] max-lg:w-[90vw] max-lg:right-6 max-lg:items-center flex-col justify-between max-lg:flex max-lg:flex-col w-fit h-fit gap-2 text-center rounded-2xl p-2">
                <li>درخواست بازدید</li>
                <li>ماموریت و اساسنامه</li>
            </ul> */}
            <Link href="https://president.agroyaar.com/">
                <li className="text-right text-zinc-800 text-base font-medium m-2">اگرو پرزیدنت</li>
            </Link>
            {/* <ul className="hidden card-shadow agrobg fixed max-lg:top-[14rem] top-[8rem] right-[46vw] max-lg:w-[90vw] max-lg:right-6 max-lg:items-center flex-col justify-between max-lg:flex max-lg:flex-col w-fit h-fit gap-2 text-center rounded-2xl p-2">
                <li>مدیریت علف‌های هرز</li>
                <li>ایستگاه هواشناسی مجازی اختصاصی مزرعه</li>
                <li>ماموریت و اساسنامه</li>
            </ul> */}
            <Link href="https://meet.agroyaar.com/">
                <li className="text-right text-zinc-800 text-base font-medium m-2">اگرومیت</li>
            </Link>
            {/* <ul className="hidden card-shadow agrobg fixed max-lg:top-[14rem] top-[8rem] right-[46vw] max-lg:w-[90vw] max-lg:right-6 max-lg:items-center flex-col justify-between max-lg:flex max-lg:flex-col w-fit h-fit gap-2 text-center rounded-2xl p-2">
                <li>جلسات پرسش و پاسخ</li>
                <li>ماموریت و اساسنامه</li>
            </ul> */}
            <Link href="https://agroiranfarmer.com/">
                <li className="text-right text-zinc-800 text-base font-medium m-2">اگرو فارمر</li>
            </Link>
            {/* <ul className="hidden card-shadow agrobg fixed max-lg:top-[14rem] top-[8rem] right-[46vw] max-lg:w-[90vw] max-lg:right-6 max-lg:items-center flex-col justify-between max-lg:flex max-lg:flex-col w-fit h-fit gap-2 text-center rounded-2xl p-2">
                <li>کشاورزان پیشرو</li>
                <li>ماموریت و اساسنامه</li>
            </ul> */}
        </ul>
    )
}

export default MenuComponent