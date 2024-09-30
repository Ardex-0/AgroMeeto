import React from "react"
import Link from "next/link"


const BlogSectionCard = ({ item }) => {
  return (
    <div className="card-shadow hover:brightness-105 hover:-translate-y-2 duration-500 rounded-2xl flex flex-col items-start justify-start p-4 w-[320px] gap-4 h-[280px]">
      <div className="bg-gray-300 w-full h-[160px] rounded-2xl">
        <Link href={item?.link} target="_blank">
          <div className="rounded-2xl h-[100%] overflow-clip">
            <img referrerPolicy="no-referrer" src={item?._embedded['wp:featuredmedia'][0]?.source_url}
              alt={item?.title?.rendered}
              width={640} height={420}
            />
          </div>
        </Link>
      </div>
      <div>
        <Link href={item?.link} style={{ color: '#333333' }} target="_blank">
          <p>{item?.title?.rendered}</p>
        </Link>
      </div>
    </div>
  )
}

export default BlogSectionCard