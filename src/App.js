import './App.css';
import Search from "./components/search/search";
import CurrentWeather from "./components/currentWeather/currentWeather";
import {getApiCurrentWeather, getApiForecastWeather} from "./api/apiWeather";
import {useState} from "react";
import ForecastWeather from "./components/forecastWeather/forecastWeather";

function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastWeather, setForecastWeather] = useState(null);
    const handleOnSearchChange = async (searchData) => {
        const [lat, lon] = searchData.value.split(' - ');
        const current_weather_response = await getApiCurrentWeather(lat, lon)
        const forecast_weather_response = await getApiForecastWeather(lat, lon)
        console.log(forecast_weather_response)
        setCurrentWeather({city: searchData.label, response: current_weather_response.data});
        setForecastWeather({city: searchData.label, response: forecast_weather_response.data});
    }

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange}/>
            <div className="weather-container">
                {currentWeather && <CurrentWeather data={currentWeather}/>}
                {/*{forecastWeather && <ForecastWeather data={forecastWeather}/>}*/}
            </div>
        </div>
    );
}

export default App;
