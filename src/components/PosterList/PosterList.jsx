import axios from 'axios'
import { useEffect, useState } from 'react'

export const PosterList = () => {
    const [ apiData, setApiData ] = useState([])

    const getData = async () => {
        const url = "http://localhost:3000/posters"
        const result = await axios.get(url)
        console.log(result.data);
        
        setApiData(result.data);
    }

    useEffect(() => {
        getData()
    },[setApiData])
    
    return (
        <ul>
            {apiData && apiData.map((value,index) => {
                return (
                    <li key={index}>{value.name}</li>
                )
            })}
        </ul>
    )
}