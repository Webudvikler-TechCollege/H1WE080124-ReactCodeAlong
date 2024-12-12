/**
 * PosterList komponentet er et eksempel på hvordan du kan 
 * bruge hooks til at kalde et API i React.
 **/
import { useState, useEffect } from "react" // Importerer React hooks
import axios from 'axios' // Importerer Axios Framework til kald af API
import { PosterListStyle } from "./PosterList.styled"

export const PosterList = () => {
    // Sætter state variabel til api data
    const [ apiData, setApiData ] = useState([])

    // Funktion til kald af data
    const getData = async () => {
        const url = "http://localhost:3000/posters";
        const result = await axios.get(url)        
        setApiData(result.data);
    }   

    // useEffect hook til at styre komponentets rendering
    useEffect(() => {
        getData()
    },[setApiData])

  // JSX Output  
  return (
    <PosterListStyle>
        <h1>Plakater</h1>
        <ul>
            {apiData && apiData.map((item, key) => {
                return (
                    <li key={key}>
                        {item.name}
                    </li>
                )
            })}
        </ul>
    </PosterListStyle>
  )
}
