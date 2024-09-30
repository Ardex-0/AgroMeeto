import { Cologindata } from '@/statics/cologin';
import Image from 'next/image';
import Link from 'next/link';

function CologinCard() {



    return (
        <>
            {Cologindata.map((item, index) => {
                return (

                    <div key={index} className={`flex flex-col ${item.style} bg-[${item.color}] w-[300px] max-lg:w-[160px] hover:-translate-y-1 hover:brightness-105 duration-300 items-center justify-center gap-4 py-6  rounded-[40px]`}>

                        <div className="flex flex-col items-center justify-center gap-6">
                            <h4 className="text-white text-center text-2xl max-lg:text-sm font-bold">
                                {item.title}
                            </h4>
                            <Image src={item.img} alt={item.title} width={240} className="max-lg:w-[100px]" />
                        </div>
                        <Link href={item.link}>
                            <div className={`button-neo !text-[${item.color}] flex hover:brightness-110 hover:duration-500 cursor-pointer transition-all items-center justify-center px-[32px] text-neo py-[4px] !bg-white rounded-3xl text-lg max-lg:text-sm font-bold`} >
                                ورود به پنل
                            </div>
                        </Link>
                    </div>

                )
            })}

        </ >
    )
}

export default CologinCard