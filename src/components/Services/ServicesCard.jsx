import React, { useState } from "react";
import { Servicecard } from '@/statics/Servicecard';
import Link from 'next/link';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

function ServicesCard() {

    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <div className=" w-[34vw] max-w-[480px] max-lg:w-full mx-auto">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
            >
                {
                    Servicecard.map((slider, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="bordershadow-out p-2 !rounded-2xl">
                                    <div style={{ backgroundColor: slider.color }} className="bordershadow-in w-[30vw] max-w-[440px] max-lg:w-full flex flex-col gap-4 items-center justify-end p-4 pb-0 h-full rounded-2xl shadow-inner overflow-hidden ">
                                        <div style={{ backgroundColor: slider.color, boxShadow: slider.shadow }} className={`flex flex-col items-center justify-center ${slider.shadow} mb-4 !rounded-2xl p-[5px] max-lg:p-px`}>
                                            <div
                                                onMouseEnter={() => setIsPlaying(true)}
                                                onMouseLeave={() => setIsPlaying(false)}
                                                style={{ backgroundColor: slider.color }}
                                                className="shadow-inner flex !rounded-2xl overflow-hidden w-[24.5rem] h-[13.8rem] max-lg:h-[12rem] max-lg:w-[20.5rem] items-center justify-center"
                                            >
                                                <video
                                                    height={470}
                                                    width={850}
                                                    poster={slider.pooster}
                                                    src={slider.src}
                                                    controls={isPlaying}
                                                ></video>
                                            </div>
                                        </div>
                                        <div style={{ backgroundColor: slider.color, boxShadow: slider.shadow }} className={`flex flex-col max-lg:w-full items-center justify-center gap-4 py-6 ${slider.shadow} rounded-t-[40px]`}>
                                            <div className="flex flex-col items-center justify-center gap-4">
                                                <h4 className="text-white text-center text-xl font-bold">
                                                    {slider.title}
                                                </h4>
                                                <p className="text-white text-center font-thin text-[16px] w-[60%]">
                                                    {slider.description}
                                                </p>
                                            </div>
                                            <Link href={slider.link} target="_blank">
                                                <div style={{ color: slider.color, boxShadow: slider.shadow }} className={`flex hover:animate-bounce hover:duration-500 cursor-pointer transition-all items-center justify-center px-[32px] text-neo py-[4px] bg-white rounded-3xl text-[23px] font-bold}`} >
                                                    <h3>درخواست {slider.name} </h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide >
                        )
                    })
                }
            </Swiper >
        </div >
    )
}

export default ServicesCard