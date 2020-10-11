import Axios from "axios"

const { useState, useEffect } = require("react")

const useFetch = (
    url,
    options = {
        method: "GET",
    }) => {
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            options.url = url
            options.baseURL = process.env.REACT_APP_BASE_URL
            try {
                setLoading(true)
                const res = await Axios.request(options)
                setData(res.data.food)
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        }
        fetchData()
    }, [])
    return {data,setData,error,loading}
}
export default useFetch