import { useEffect, useState } from "react"



export const useFetch = (url) => {

    const [data, setData] = useState([])

    const getData = async () => {
        const response = await fetch(url)
        const responseData = await response.json()
        responseData && setData(responseData)
    }

    useEffect(() => {
        getData()
    }, [])

    return data
}