import React, { useEffect, useState } from "react"

import getRandomUUID from "../../utils/getRandomUUID"

const DataProvider = ({ url, render, cb = () => { } }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const json = await response.json()

                const dataWithId = json.map(i => {
                    return {
                        ...i,
                        id: getRandomUUID(),
                    }
                })

                setData(dataWithId)
                cb()
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchData()
    }, [url])

    return data.length > 0 ? render(data) : null
}

export default DataProvider