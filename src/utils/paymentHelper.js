export function categoryToPaymentDescription(category) {
    switch (category) {
       
        case "WEATHER_STATION":
            return "ایستگاه هواشناسی"

        case "QUESTIONNAIRE":
            return "درخواست برنامه کودی"

        case "VISIT":
            return "درخواست بازدید"

        case "EXPERIMENT":
            return "درخواست آزمایش"

        case "YIELD_GAP":
            return "خلأ عملکرد"

        case "CHILLING_REQUIREMENT":
            return "تعیین نیاز سرمایی"

        case "HARVEST_DATE_RECOMMENDATION":
            return "تعیین تاریخ برداشت"

        case "CULTIVAR_RECOMMENDATION":
            return "انتخاب رقم مناسب"

        default:
            return 'پرداخت اگرویار'
    }
}

export function returnToToButtonText(category, returnTo) {
    switch (category) {
        
        case "QUESTIONNAIRE":
            return ['بازگشت به برنامه کودی', returnTo]

        case "VISIT":
            return ['بازگشت به بازدید', returnTo]

        case "WEATHER_STATION":
            return ['بازگشت به داشبورد', returnTo]

        case "YIELD_GAPS":
            return ['بازگشت به خلأ عملکرد', returnTo]

        case "CULTIVAR_RECOMMENDATION":
            return ['بازگشت به انتخاب رقم مناسب', returnTo]

        case "HARVEST_DATE_RECOMMENDATION":
            return ['بازگشت به تعیین تاریخ برداشت', returnTo]

        case "CHILLING_REQUIREMENT":
            return ['بازگشت به نیاز سرمایی', returnTo]

        default:
            return ['بازگشت به اگرویار', returnTo]
            
    }
}