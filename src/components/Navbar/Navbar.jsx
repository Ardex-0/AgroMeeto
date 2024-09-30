'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import AgroyaarLogo from '../../../public/assets/images/logo.svg'
import platformsicon from '../../../public/assets/images/platformsIcon.svg'
import PlarformsSideMenu from "../PlatformsSlider/PlarformsSideMenu";
import MenuComponent from "./MenuComponent";

function Navbar() {

  // sidemenu function
  const [isSubMenu, setIsSubMenu] = useState(false)

  function subMenu() {
    if (isSubMenu) {
      setIsSubMenu(false)
    } else {
      setIsSubMenu(true)
    }
  }

  // humbermenu
  const [isDisplay, setIsDisplay] = useState(false)
  const [isHamber, setIsHamber] = useState(false)
  const changingHamberLineSize = useRef(null)
  const openMenu = useRef(null)

  function showMenu() {

    document.querySelector('#serviceSection').scrollIntoView({ behavior: 'smooth', block: 'center' })
    if (isHamber) {
      openMenu.current.classList.add('max-lg:hidden')
      changingHamberLineSize.current.className = "w-[23px] h-[3px] bg-[#01984D] rounded-full"
      setIsDisplay(false)
      setIsHamber(false)
    }
  }

  function hamberMenu() {

    if (!isHamber) {
      openMenu.current.classList.remove('max-lg:hidden')
      changingHamberLineSize.current.className = "w-[11.5px] h-[3px] bg-[#01984D] rounded-full"
      setIsHamber(true)
    } else {
      openMenu.current.classList.add('max-lg:hidden')
      changingHamberLineSize.current.className = "w-[23px] h-[3px] bg-[#01984D] rounded-full"
      setIsDisplay(false)
      setIsHamber(false)
    }

  }

  return (
    <header className="flex fixed z-[9999] flex-col max-lg:items-center justify-end items-end w-full p-4 gap-2">
      <nav className="flex flex-row-reverse items-center justify-between max-lg:w-[94.4vw] py-2 px-6  max-lg:py-2 max-lg:px-4 w-full agrobg rounded-[15px] neo border border-slate-200">
        <Link className="hidden max-lg:flex" href="https://www.agroyaar.com/">
          <div className="hover:brightness-110 w-[50px] h-[50px] justify-start items-center gap-2">
            <Image
              src={AgroyaarLogo}
              alt="agroyaar-Logo"
              className="relative max-lg:w-[200px] max-lg:h-[50px]"
            />
          </div>
        </Link>

        <div className="flex flex-row items-end justify-start gap-4">
          <div className="flex flex-col gap-2 max-lg:flex-row">
            <Link href="https://dashboard.agroyaar.com/">
              <div
                className="flex max-lg:w-[94px] max-lg:h-[31px] max-lg:px-4 cursor-pointer max-lg:py-2 hover:brightness-110 max-lg:gap-2.5 px-6 py-2 bg-[#008F47] whitespace-nowrap rounded-[20px] overflow-hidden shadow border border-slate-300 justify-center items-center">
                <div className="text-center text-white text-[12px] max-lg:text-[10px] font-bold">
                  ورود / ثبت‌نام کشاورز
                </div>
              </div>
            </Link>

            <Link href="/co-login">
              <div
                className="flex max-lg:w-24 max-lg:h-[31px] max-lg:px-[13px] cursor-pointer hover:brightness-110 max-lg:py-2 max-lg:gap-2.5 px-6 py-2 bg-[#005AC7] whitespace-nowrap rounded-[20px] overflow-hidden shadow border border-slate-300 justify-center items-center "
              >
                <div className="flex text-center text-white text-[12px] max-lg:text-[10px] font-bold items-center justify-center">
                  ورود همکاران
                </div>

              </div>
            </Link>
          </div>
          <div className="flex max-lg:hidden justify-center items-center w-[35px] h-[35px] neo rounded-[10px]"
            onClick={subMenu}
          >
            <Image
              src={platformsicon}
              alt="platformsicon"
              className="cursor-pointer w-[24px] h-[24px]"
            />
          </div>
        </div>

        <div
          ref={openMenu}
          className="flex max-lg:hidden max-lg:absolute right-4 top-24 max-lg:neo max-lg:agrobg rounded-2xl w-[94vw] justify-center items-center max-lg:p-4"
        >
          <ul className="flex items-center justify-center max-lg:flex-col gap-12">
            <Link href="/">
              <li className="text-right text-[#333333] text-base font-medium hover:brightness-200 cursor-pointer">
                صفحه اصلی
              </li>
            </Link>

            <li
              onClick={showMenu}
              className="text-right hover:brightness-200 text-zinc-800 text-base font-medium cursor-pointer"
            >
              خدمات اگرویار
            </li>

            <Link href="https://blog.agroyaar.com/">
              <li className="text-right text-[#333333] text-base font-medium hover:brightness-200 cursor-pointer">
                محتوای آموزشی
              </li>
            </Link>
            <Link href="https://news.agroyaar.com/">
              <li className="text-right text-[#333333] text-base font-medium hover:brightness-200 cursor-pointer">
                اخبار و رویدادها
              </li>
            </Link>
            <Link href="https://help.agroyaar.com/">
              <li className="text-right text-[#333333] text-base font-medium hover:brightness-200 cursor-pointer">
                راهنما
              </li>
            </Link>
            <Link href="/about-us">
              <li className="text-right text-[#333333] text-base font-medium hover:brightness-200 cursor-pointer">
                درباره‌ی ما
              </li>
            </Link>
          </ul>
        </div>

        <div
          onClick={hamberMenu}
          className="hidden max-lg:flex max-lg:flex-col max-lg:gap-1.5 max-lg:items-start "
        >
          <div className="w-[24px] h-[3px] bg-[#01984D] rounded-full"></div>
          <div className="w-[24px] h-[3px] bg-[#01984D] rounded-full"></div>
          <div
            ref={changingHamberLineSize}
            className="w-[24px] h-[3px] bg-[#01984D] rounded-full"
          ></div>
        </div>

        <Link href="https://www.agroyaar.com/">
          <div className="LOGO max-lg:hidden flex hover:brightness-110 w-[212px] h-[72px] justify-center items-center gap-2">
            <Image
              src={AgroyaarLogo}
              alt="agroyaar-Logo"
              className="w-[13.25rem] h-[4.5rem] relative max-lg:w-[50px] max-lg:h-[50px]"
            />
            <div className="flex flex-col gap-2 justify-end max-lg:items-center max-lg:flex-col-reverse">
              <p className="RPM font-[RPM] text-[#008B45] text-[26px] ">agroyaar</p>
              <span className="text-[11px] whitespace-nowrap font-extrabold text-[#008B45]">پلتفرم جامع خدمات کشاورزی</span>
            </div>
          </div>
        </Link>

      </nav>

      {isDisplay && <MenuComponent />}

      {isSubMenu && (
        <PlarformsSideMenu />
      )}

    </header>
  );
}

export default Navbar;
