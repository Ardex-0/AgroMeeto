import Image from "next/image";
import Link from "next/link";
import React from "react";
import advisors from "/public/assets/images/cologin/advisors.png";
import agroyaarpersenel from "/public/assets/images/cologin/agroyaarpersenel.png";
import cocompany from "/public/assets/images/cologin/cocompany.png";
import visitors from "/public/assets/images/cologin/visitors.png";
import CologinCard from "@/components/Cologin/CologinCard";


export const metadata = {
  title: "ورود همکاران",
  description: "",
};


const Cologin = () => {
  return (
    <div
      className="flex flex-col items-center justify-center max-lg:py-16 py-28 px-8 my-8 gap-8 max-lg:gap-2"
    >
      <h1 className="!text-green-700 text-3xl max-lg:text-xl whitespace-nowrap font-bold">
        ورود همکاران
      </h1>

      <div className="flex bordershadow-out p-2 !rounded-2xl">
        <div className="bordershadow-in agrobg flex flex-col gap-4 items-center justify-end p-4 pb-0 h-full rounded-2xl shadow-inner overflow-hidden ">

          <div className={`flex flex-wrap max-lg:w-[344px] gap-8 max-lg:gap-2 items-center justify-center lg:mb-4 !rounded-2xl p-[5px] max-lg:p-px`}>

            <CologinCard />

          </div>
        </div>
      </div>

    </div>
  );
};


export default Cologin;