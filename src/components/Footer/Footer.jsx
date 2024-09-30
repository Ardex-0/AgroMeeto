import Image from "next/image";
import Link from "next/link";
import logoinFooter from "../../../public/assets/images/HomePage/footer/logoFooter.svg";
import samandehi from "../../../public/assets/images/HomePage/samandehi.png";
import { footerItems } from "../../statics/footerItems";
import { socialItems } from "../../statics/socialItems";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center gap-[25px] px-[40px] py-[20px] max-lg:items-center max-lg:pb-32 bg-[#e7edf3]">
        <div className="lineshadow" />
        <div className="flex  max-lg:flex-col items-center w-full px-[2%] justify-between" >
          <div className="Right flex  flex-col justify-center max-lg:items-center items-end gap-3" >
            <div className="flex flex-row  w-full h-[98px] justify-between px-2 max-xl:gap-4 max-lg:items-center max-lg:justify-center" >
              <div className="flex flex-col justify-center gap-2 items-center">
                <Image src={logoinFooter} width={80} height={80} alt='Logo' />
                <Link className="hover:animate-pulse" style={{ fontSize: "0.7rem", color: '#444', }} href='/privacy'>قوانین و مقررات</Link>
              </div>
              <a referrerPolicy="origin" href="https://trustseal.enamad.ir/?id=306212&amp;Code=dfVMaBXdF2b3R0hviV5y">
                <img loading="lazy"
                  width={90} height={98}
                  referrerPolicy="origin"
                  src="https://Trustseal.eNamad.ir/logo.aspx?id=306212&amp;Code=dfVMaBXdF2b3R0hviV5y" alt="enamad"
                  style={{ cursor: "pointer" }} id="dfVMaBXdF2b3R0hviV5y"
                />
              </a>
              <a href="https://logo.samandehi.ir/Verify.aspx?id=342553&p=xlaoaodsuiwkdshwdshwxlao">
                <Image
                  width={90} height={98}
                  src={samandehi}
                  alt="logo-samandehi"
                />
              </a>
            </div>

            <div className="flex ">

              <p className=" w-[356px] text-justify text-[#404848] text-base font-normal leading-7 max-lg:text-center">

                صداقت و سلامت در کار شاخصه اصلی تیم اگرویار است. اینجا در پلتفرم
                جامع خدمات کشاورزی اگرویار فرهنگ جدیدی از کشاورزی را تجربه می‌کنید و
                می‌توانید باغ و مزرعه خود را هدفمند و هوشمندانه مدیریت کنید.

              </p>

            </div>


          </div>

          <div className="flex justify-between w-[34%] max-lg:w-[92vw] max-lg:gap-2 max-lg:py-4">
            <div className="flex flex-col w-[12rem]">

              {
                footerItems.slice(0, 5).map(item => (
                  <div key={item.id} className="flex flex-col items-start max-lg:justify-center">
                    <Link rel="nofollow" target="_blank" className=" hover:text-[#fff]" style={{ margin: '1rem 0', width: "12.5rem", fontSize: "12px", color: "#000" }} href={item.link}>{item.title}</Link>
                  </div>
                ))
              }

            </div>

            <div className="flex flex-col w-[10rem]">

              {
                footerItems.slice(5, 10).map(item => (
                  <div key={item.id} className="flex flex-col items-start max-lg:justify-center">
                    <Link rel="nofollow" target="_blank" style={{ margin: '1rem 0', width: "12.5rem", fontSize: "0.8rem", color: "#000" }} href={item.link}>{item.title}</Link>
                  </div>
                ))
              }

            </div>
          </div>

          <div className="flex flex-col justify-between items-start max-lg:items-center max-lg:justify-center w-fit gap-[0.2rem] ">

            <div className="w-[286px] h-[200px] !mb-2 border-[2px] border-[#CDD6E5] rounded-[16px] overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d804.0760154573424!2d59.59917780705129!3d36.280671504804936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6c91fa6e918a29%3A0xea7fc1b496f8ddbe!2z2K7ZiNi02Ycg2b7YsdmI2LHYp9mGINmF2YfYp9mFICjYp9qv2LHZiNuM2KfYsSk!5e0!3m2!1sfa!2s!4v1693116636974!5m2!1sfa!2s" width={286} height={200} allowFullScreen="" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

            <div className="flex flex-col w-[280px] items-start max-lg:items-center justify-center gap-2">
              <p title="آدرس اگرویار" className="text-[0.8rem]" ><span className="font-extrabold"> آدرس:</span> مشهد - چهارراه بیسیم (ملک الشعرا 13) - نبش جهاد ۴- ساختمان پژوهشکده بیوتکنولوژی - طبقه دوم  </p>

              <p title="پست الکترونیکی اگرویار" className="text-[0.8rem]" ><span className="font-extrabold">پست الکترونیکی:</span> agroyaar.ict@gmail.com</p>

              <p title="شماره تماس اگرویار" className="text-[0.8rem]" ><span className="font-extrabold">شماره تماس:</span> 09155158630 , 91004601-051</p>
            </div>

          </div>
        </div>

        <div className="lineshadow" />


        <div className="flex w-[100%] max-lg:w-fit max-lg:flex-col max-lg:gap-4 max-lg:py-4 max-lg:px-[2.5rem] px-9 justify-between ">
          <div className="flex max-lg:flex-col max-lg:items-center w-full justify-start max-lg:justify-center gap-2">
            <div className="flex flex-col gap-1 justify-end max-lg:items-center">
              <p className="!font-[RPM] text-[#008B45] text-[24px] max-lg:text-[38px] h-[29px] max-lg:h-fit">AGROYAAR</p>
              <span className="text-[10px] max-lg:text-base max-lg:text-center font-extrabold text-[#008B45]">پلتفرم جامع خدمات کشاورزی</span>
            </div>
            <div className="flex flex-col justify-end max-lg:items-center max-lg:flex-col-reverse">
              <p className="text-[10px] font-normal h-[20px] text-[#808080]">Copyright © 2024 Agroyaar Company</p>
              <p className="text-[10px] max-lg:text-center font-medium text-[#929292]">©️ کپی رایت تمامی حقوق این سایت متعلق به شرکت خوشه‌پروران مهام (اگرویار) است. هرگونه کپی‌برداری و سوء استفاده از اطلاعات و محتوای آن پیگرد قانونی دارد.</p>
            </div>
          </div>
          <div title="شبکه‌های اجتماعی اگرویار" className="Icons flex flex-row justify-center items-center gap-3.5">
            {
              socialItems.reverse().map(item => (
                <div key={item.id} className="cursor-pointer neo p-[9px] Gmail grayscale hover:grayscale-0 max-lg:w-10 max-lg:h-10 w-11 h-11 rounded-full">
                  <Link href={item.link}><Image src={item.img.src} width={24} height={24} alt={item.name} /></Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;