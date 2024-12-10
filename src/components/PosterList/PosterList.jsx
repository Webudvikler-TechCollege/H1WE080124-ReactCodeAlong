// Importerer React hooks
import { useState, useEffect } from "react"
// Importerer Axios Framework til kald af API
import axios from 'axios'

export const PosterList = () => {
    // Sætter state variabel til api data
    const [ apiData, setApiData ] = useState([])

    // Funktion til kald af data
    const getData = async () => {
        const url = "https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/";
        const result = await axios.get(url)
        // console.log(apiData)
        setApiData(result.data.Days);
    }   

    // useEffect hook til at styre komponentets rendering
    useEffect(() => {
        getData()
    },[setApiData])

  // JSX Output  
  return (
    <div>
        <h1>Plakater</h1>
        <ul>
            {apiData && apiData.map((item, key) => {
                return (
                    <li key={key}>{item.DayName}</li>
                )
            })}
        </ul>
    </div>
  )
}
