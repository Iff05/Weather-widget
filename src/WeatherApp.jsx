import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import {useState} from"react";

export default function WeatherApp(){
    const[weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike: 44.75,
        humidity: 43,
        temp: 37.96,
        tempMax: 37.96,
        tempMin: 37.96,
        weather: "clear sky",
    });
    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{ textAlign : "center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}