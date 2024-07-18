import "./forecastWeather.css"

const ForecastWeather = ({data}) => {
    const image = `icons/${data.response.weather[0].icon}.png`; // Replace with actual weather icon URL
    return (
        <div className="forecast-weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.response.weather[0].description}</p>
                </div>
                <img className="weather-icon" src={image} alt={"icons/unknown.png"}/>
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.response.main.temp)}°C</p>
            </div>
        </div>
    )
}

export default ForecastWeather;