import Image from 'next/image'
import React from 'react'
import dualRing from '../../../public/assets/loading/Dual-Ring-Loading.svg'

function StatisticCard({ icon, title, count, active, statics }) {
  return (
    <div className='flex flex-col justify-between hover:brightness-105 hover:-translate-y-2 duration-500 max-lg:py-2 items-center h-[320px] max-lg:h-[30vh] w-[272px] max-lg:w-[150px] max-lg:gap-2 agrobg neo rounded-2xl shadow-lg p-4'>
      <Image priority={true} className=' max-lg:w-[90px] max-lg:h-[90px]' src={icon} alt='service-icon' />
      <p className={`text-xl max-lg:text-xs font-bold h-[60px] text-center text-[${active ? "#008F47" : "#404848"}]`}>{title}</p>
      {
        count ?
          <p className={`text-5xl max-lg:text-2xl font-black text-center text-[${active ? "#008F47" : "#404848"}]`}>{statics ? (count + 10900) : count}</p>
          : <Image className=' max-lg:w-[40px] max-lg:h-[40px]' priority={true} width={100} height={100} src={dualRing} alt='dual-ring-loading' />
      }
    </div>
  )
}

export default StatisticCard