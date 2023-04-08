import React, { useEffect, useState } from "react"

const DataProvider = ({ url, render, cb = () => {} }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const jsonData = await response.json()
                setData(jsonData)
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