'use client'
import { posters } from '@/statics/posters';
import Image from 'next/image'
import Link from 'next/link';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

function TopSlider() {
    return (
        <div className="w-[100vw] max-w-[1920px] px-[1vw] h-full mb-3">
            <Swiper
                className="p-0 overflow-visible"
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
            >
                {
                    posters.map((slider, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Link href={slider.link} target="_blank">
                                    <div className="flex flex-row neo items-center justify-center overflow-hidden rounded-[30px]">
                                        <Image priority={true} src={slider.src} className=" h-full w-full max-lg:hidden" alt='pooster' />
                                        <Image priority={true} src={slider.ressrc} className=" hidden max-lg:inline h-full w-full" alt='pooster' />
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default TopSlider