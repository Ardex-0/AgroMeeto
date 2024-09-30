'use client'
import React from "react"
import Link from "next/link"
import { platforms } from "../../statics/PlatformsSliderData"
import Image from "next/image"


const gotoappsection = (id) => {

  if (id === 0) {
    document.querySelector('#appsection').scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

const PlarformsSideMenu = () => {
  return (
    <div className="flex max-lg:hidden flex-col justify-center">
      {
        <div className="card-shadow2 flex flex-col justify-center items-center gap-3 p-3 !rounded-xl z-[999] ">
          {platforms.map((item) => {
            return (
              <>
                {
                  item.id !== 1 &&
                  <Link key={item.id} href={item.address} target="_blank">
                    <div
                      onClick={() => gotoappsection(item.id)}
                      className="flex flex-row-reverse justify-center items-center w-full gap-2 cursor-pointer hover:brightness-105"
                    >
                      <div className="flex items-center justify-center circle-neo2 w-11 h-11 p-1.5">
                        <Image width={32} height={32} src={item.img.src} alt="platforms" />
                      </div>
                      <h3 style={{ color: item.color, fontSize: "0.65rem", fontWeight: 800, width: "90px" }}>
                        {item.name}
                      </h3>
                    </div>
                  </Link>
                }
              </>
            )
          })}
        </div>
      }
    </div >
  )
}

export default PlarformsSideMenu