import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getApiCurrentWeather = async (lat, lon) => {
    return await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    )
}

export const getApiForecastWeather = async (lat, lon) => {
    return await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    )
}