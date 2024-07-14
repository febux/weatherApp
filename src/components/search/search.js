import {AsyncPaginate} from "react-select-async-paginate";
import {useState} from "react";
import axios from "axios";
import {geoApiOptions} from "../../api/apiGeo";

const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState('');

    const loadOptionsSearch = async (search) => {
        // Simulating an API call
        try {
            const response = await axios.request(
                geoApiOptions(search),
            );
            const cityOptions = response.data.data.map((city) => {
                return {
                    value: `${city.latitude} - ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                }
            });
            return {
                options: cityOptions
            }
        } catch (error) {
            return {
                options: {}
            }
        }
    }
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search"
            debounceTimeout={1000}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptionsSearch}
        />
    )
}

export default Search;