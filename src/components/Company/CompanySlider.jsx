"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Navigation, Scrollbar, Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/keyboard";

// Data
import { companyData } from '../../statics/companyData';


const CompanySlider = () => {
  return (
    <div className='flex flex-col items-center gap-4 justify-center w-full'>
      <h2 className='text-3xl font-bold text-[#404848]'>
        همراهان ما
      </h2>
      <div className='w-full flex flex-row !overflow-visible items-center justify-center'>
        <Swiper
          modules={[Navigation, Scrollbar, Autoplay, FreeMode]}
          spaceBetween={120}
          slidesPerView="auto"
          loop={true}
          className="w-full flex flex-row !overflow-visible items-center"
          autoplay={{
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            481: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 6,
            },

            1024: {
              slidesPerView: 7,
            },
          }}
        >
          {
            companyData.map((item, index) => {
              return (
                <SwiperSlide key={index} className='flex flex-row !overflow-visible'>
                  <div className='neo hover:brightness-95 hover:-translate-y-2 duration-500 flex flex-row !overflow-visible items-center justify-center w-[125px] h-[125px] max-lg:h-24 max-lg:w-24 p-4 max-lg:p-2 rounded-2xl'>
                    <Link rel='nofollow' href={item.link} target="_blank">
                      <Image priority={true} width={110} height={110} src={item.img} alt='companies' />
                    </Link>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>

      </div>

    </div>
  )
}

export default CompanySlider