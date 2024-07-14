import './App.css';
import Search from "./components/search/search";
import CurrentWeather from "./components/currentWeather/currentWeather";
import {getApiWeather} from "./api/apiWeather";
import {useState} from "react";

function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const handleOnSearchChange = async (searchData) => {
        const [lat, lon] = searchData.value.split(' - ');
        const response = await getApiWeather(lat, lon)
        setCurrentWeather({city: searchData.label, response: response.data});
    }

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange}/>
            {currentWeather && <CurrentWeather data={currentWeather}/>}
        </div>
    );
}

export default App;
