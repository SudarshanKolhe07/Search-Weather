import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike:24.84,
        temp:25.34,
        tempMin:25.34,
        tempMax:25.34,
        humidity:47,
        weather:"haze",
    });

    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }

    return(
        <div className="WeatherApp">
            <h1>Weather App By Sudarshan</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}