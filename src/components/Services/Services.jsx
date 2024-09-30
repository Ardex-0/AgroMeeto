import React, { Fragment, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { servicesData } from "@/statics/servicesData"
import ServicesCard from "./ServicesCard"

function Services() {

  const useWidth = () => {
    const [width, setWidth] = useState(0)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return width
  }

  return (
    <div className="flex flex-col gap-6 p-4 items-center">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-[#008F47] text-neo font-bold text-[52px] max-lg:text-[2.5rem]">
          خدمات اگرویار
        </h2>
        <p className="text-[#485271] font-semibold text-[24px] max-lg:text-[0.7rem]">
          هدف ما تصمیم‌گیری برای کشاورز نیست، کمک به تصمیم‌گیری بهتر کشاورز است
        </p>
      </div>

      <div className="flex gap-0 max-lg:flex-col max-lg:items-center max-lg:w-[85%]">
        {/* right section */}

        <ServicesCard />

        {/* left section */}
        <div id='serviceSection' className="w-[65vw] max-lg:w-[360px] px-8 max-lg:px-4 rounded-lg justify-center items-center max-lg:gap-10 gap-16 flex flex-wrap">
          {servicesData.map((item) => {
            return (
              <Fragment key={item.id}>
                {
                  useWidth() > 1023 && item.id === 5 ? '' :
                    <Link href={item.link} target="_blank">
                      <div className="flex flex-col w-[11.8vw] max-lg:w-[72px] gap-3 items-center justify-center hover:translate-y-[-10px] duration-200">
                        <div className="flex p-1 w-fit h-fit bg-gradient-to-tl from-white to-slate-100 rounded-2xl max-lg:rounded-[10px] card-shadow border border-[#C2D9ED] justify-center items-center">
                          <div className="flex max-lg:p-px p-[7px] w-fit h-fit bg-gradient-to-tl from-white to-slate-100 rounded-full logo-shadow border border-[#C2D9ED] justify-center items-center">
                            <Image
                              priority={true}
                              src={item.image}
                              alt={item.title}
                              width={136}
                              height={136}
                            />
                          </div>
                        </div>
                        <h3
                          style={{ color: item.color }}
                          className="max-lg:hidden whitespace-nowrap text-center text-sm font-extrabold"
                        >
                          {item.title}
                        </h3>
                        <h3
                          style={{ color: item.color }}
                          className="hidden max-lg:flex whitespace-nowrap text-center text-[9px] font-black"
                        >
                          {item.restitle}
                        </h3>
                      </div>
                    </Link>
                }
              </Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services