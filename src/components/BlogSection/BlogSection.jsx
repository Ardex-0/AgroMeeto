"use client"
import React from "react"

// image
import blogBackground from "../../../public/assets/images/HomePage/blogSection/blogBackground.png"
import dualRingLoading from "../../../public/assets/loading/Dual-Ring-Loading.svg"
import Image from "next/image"

// swiper
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/free-mode"
import "swiper/css/scrollbar"
import "swiper/css/keyboard"

import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules"
import Link from "next/link"
import BlogSectionCard from "./BlogSectionCard"

const BlogSection = ({ blogData }) => {
  return (
    <>
      <div className="flex justify-center p-12 max-lg:p-2 items-center w-full">
        <div className="bordershadow-out hover:brightness-105 duration-500 p-1.5 w-[1360px] max-lg:w-full h-[745px] max-lg:h-fit">
          <div className="bordershadow-in flex flex-col items-center justify-center gap-12 relative h-full max-lg:py-8" >
            <div className="flex flex-col items-center justify-center gap-4 z-[1]">
              <p className="text-3xl max-lg:text-xl font-bold text-[#1F784D]" >
                با اگرویار به‌روز باشید
              </p>
              <h2 className="text-5xl max-lg:text-3xl font-black text-[#404848]">
                جدیدترین مطالب آموزشی
              </h2>
            </div>
            <div className="w-[80%] max-lg:w-full max-lg:h-fit max-lg:p-2 p-4 !h-[328px] justify-center items-center flex z-[1]">
              {
                blogData?.length !== 0 ?
                  <Swiper
                    className="pb-5 h-[360px]"
                    modules={[Pagination, FreeMode, Autoplay, Navigation]}
                    spaceBetween={42}
                    draggable={true}
                    slidesPerView={3}
                    loop={true}
                    pagination={{ clickable: true }}
                    centeredSlides={true}
                    autoplay={{
                      disableOnInteraction: false,
                      delay: 5000,
                      pauseOnMouseEnter: true,
                    }}
                    freeMode={{
                      enabled: true,
                      minimumVelocity: 0.1,
                      momentumBounceRatio: 0.1,
                      momentumRatio: 0.1,
                      momentumVelocityRatio: 0.1,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      481: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },

                      1024: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {blogData?.map((item, index) => (
                      <SwiperSlide key={index}>
                        <BlogSectionCard item={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  : <Image priority={true} src={dualRingLoading} alt="dual-ring-loading" />
              }
            </div>
            <Link className="z-[2]" href="https://blog.agroyaar.com" target='_blank' style={{ color: "#000" }}>
              <button className="button-neo hover:button-neo2 px-24 py-2 text-2xl max-lg:text-base font-semibold text-[#404848]">
                مطالب بیشتر
              </button>
            </Link>
            <Image className="absolute z-[0]" src={blogBackground} alt="blogsectionbackground" width={1352} height={715} />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogSection