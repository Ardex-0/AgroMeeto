'use client'
import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import { videos } from "@/statics/videos";

function CustomerExperiences() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full flex flex-col mt-8 items-center gap-4">
      <p className="text-xl max-lg:text-xs text-green-700 font-bold">
        اگرویار به همراهی کشاورزانی چون شما افتخار می کند
      </p>
      <p className="text-3xl max-lg:text-lg text-green-700 font-bold">
        داستان اگرویار را از زبان کشاورزان پیشرو بشنوید
      </p>
      <div className="flex w-[94vw]">
        <Swiper
          className="overflow-visible"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={64}
          centeredSlides={true}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {videos.map((slider, index) => {
            return (
              <SwiperSlide
                key={index}
                className="flex flex-row items-center justify-center"
              >
                <div className="flex flex-row mx-auto neo items-center justify-center w-fit h-fit overflow-hidden rounded-[30px]">
                  <div className="flex rounded-2xl overflow-hidden bg-green-300 h-fit w-fit items-center justify-center">
                    <video
                      poster={slider.pooster}
                      controls={isPlaying}
                      onMouseEnter={() => setIsPlaying(true)}
                      onMouseLeave={() => setIsPlaying(false)}
                      width={850}
                      height={500}
                    >
                      <source src={slider.src} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default CustomerExperiences;
