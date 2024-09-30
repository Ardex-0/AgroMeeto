'use client'
import React from "react"
import Link from "next/link"

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import { platforms } from "../../statics/PlatformsSliderData"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import Image from "next/image"


const gotoappsection = (id) => {
  if (id === 0) {
    document.querySelector('#appsection').scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

const PlatformsSlider = () => {
  return (
    <div className="hidden max-lg:flex w-full justify-center">
      {
        <div className=" card-shadow2 flex justify-center items-center fixed w-[90%] h-[5rem] bottom-0 my-[5%] mx-auto !rounded-xl z-[999] ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={4.3}
          >
            {platforms.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link href={item.address} target="_blank">
                    <div
                      onClick={() => gotoappsection(item.id)}
                      className="flex flex-col justify-between items-center w-full gap-2"
                    >
                      <div className="flex items-center justify-center w-12 h-12 circle-neo2">
                        <Image priority={true} width={32} height={32} src={item.img.src} alt="platforms" />
                      </div>
                      <h3 style={{ color: item.color, fontSize: "0.5rem", fontWeight: 800 }}>
                        {item.name}
                      </h3>
                    </div>
                  </Link>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      }
    </div >
  )
}

export default PlatformsSlider