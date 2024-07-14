import axios from "axios";


const API_KEY = "fa66369467d1bec6f89d74ac761aec4c"

export const getApiWeather = async (lat, lon) => {
    return await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    )
}