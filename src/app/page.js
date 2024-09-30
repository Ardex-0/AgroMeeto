"use client"
import FarmTogether from "../../public/assets/images/HomePage/ExperinceCard/farmtoghether.png"
import backgroundstorysection from "../../public/assets/images/HomePage/backgroundstorysection.png"
import Image from "next/image";
import CustomerExperiences from "@/components/Experiences/CustomerExperiences";
import Services from "@/components/Services/Services";
import Story from "@/components/Story";
import TopSlider from "@/components/TopSlider";
import Statistics from "@/components/Experiences/Statistics";
import BlogSection from "@/components/BlogSection/BlogSection";
import AppSection from "@/components/Appsection/AppSection";
import CompanySlider from "@/components/Company/CompanySlider";
import PlatformsSlider from "@/components/PlatformsSlider/PlarformsSlider";

// next components
import Head from "next/head";
import { Fragment } from "react";
import { useFetch } from "@/components/BlogSection/blogApi";

export default function Home() {
  const expertUrl = "https://api.agroiranexpert.com/statics/experts-count"
  const countUrl = "https://api.agroyaar.com/statics/counts-info"
  const blogUrl = "https://blog.agroyaar.com/wp-json/wp/v2/posts?_fields=title,link,_links,_embedded&_embed&per"
  return (
    <Fragment>

      <Head>
        <meta name="enamad" content="280441" />
        <meta name="samandehi" content="771840306" />
      </Head>

      <main className="flex min-h-screen bg-[#e8edf3] flex-col gap-8 items-center justify-between pt-32 max-lg:pt-0">

        <div className="flex flex-col max-lg:mt-[5rem] items-center justify-center h-fit">

          <div className="flex items-center h-[78px] justify-center pt-4">
            <h1 className="text-neutral-700 h-[78px] max-lg:h-[30px] text-5xl max-lg:text-[22px] font-bold" >
              پلتفرم جامع خدمات کشاورزی <span className="text-green-700 h-[78px] max-lg:h-[30px] text-5xl max-lg:text-[22px] font-bold">اگرویار</span>
            </h1>
          </div>

          <TopSlider />

        </div>

        <Story />

        <Image className="-mt-[960px] max-lg:-mt-40 z-0 hover:brightness-105 hover:translate-y-1 duration-500" src={backgroundstorysection} alt="background-story-section" width={1440} height={960} />

        <Services />

        <CustomerExperiences />

        <Image className="hover:brightness-110 hover:-translate-y-2 duration-500" src={FarmTogether} alt="farm-together" width={944} height={226} />

        <Statistics expertCountData={useFetch(expertUrl)} numberOfMealPlansAndFarmers={useFetch(countUrl)}  />

        <BlogSection blogData={useFetch(blogUrl)} />

        <AppSection />

        <CompanySlider />

        <PlatformsSlider />

      </main>

    </Fragment>
  )
}
