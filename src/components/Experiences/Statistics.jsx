import React from "react"
import StatisticCard from "./StatisticCard"
import Farmer from "../../../public/assets/images/HomePage/ExperinceCard/farmerIcon.png"
import Expert from "../../../public/assets/images/HomePage/ExperinceCard/expertIcon.png"
import NutritionProgram from "../../../public/assets/images/HomePage/ExperinceCard/nutritionProgram.png"
import Tik from "../../../public/assets/images/HomePage/ExperinceCard/tik.png"


function Statistics({ expertCountData, numberOfMealPlansAndFarmers }) {

  const staticsCounterCards = [
    {
      title: 'کشاورزان اگرویار',
      icon: Farmer,
      count: numberOfMealPlansAndFarmers?.result?.data?.numberOfFarmers,
      active: false
    },
    {
      title: 'اعضای شبکه کارشناسان کشاورزی ایران',
      icon: Expert,
      count: expertCountData?.result?.data?.confirmedExpertsCount,
      active: false
    },
    {
      title: "برنامه‌های کودی نگارش شده برای باغ و مزرعه",
      icon: NutritionProgram,
      count: numberOfMealPlansAndFarmers?.result?.data?.numberOfMealPlans,
      active: false,
      statics: true
    },
    {
      title: "درصد رضایت",
      icon: Tik,
      count: '92%',
      active: true
    },
  ]

  return (

    <div className="flex flex-col gap-16 items-center w-full">

      <h2 className="text-4xl text-green-700 font-bold">
        تجربه ای بهتر با اگرویار
      </h2>

      <div className="flex flex-wrap justify-evenly w-full max-w-[1440px] p-4 py-2 gap-4">
        {
          staticsCounterCards.map((card, i) => <StatisticCard key={i} {...card} />)
        }
      </div>

    </div>
  )
}

export default Statistics