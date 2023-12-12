import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchInput from "./component/SearchInput.jsx";

//Need make pull request

function Search() {
    const [searchInput, setSearchInput] = useState('');
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState('');
    const [searchClicked, setSearchClicked] = useState(false);


    const getCountry = async () => {
        setSearchClicked(true);
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            setCountries(response.data);
        } catch (e) {
            console.error(e);
            setError('Error fetching country data.');
        }
    };

    useEffect(() => {
        // Fetch data when component mounts
        getCountry();
    }, []); // Empty dependency array ensures it only runs once on mount

    const foundCountry = countries.find((country) => {
        return country.name.common.toLowerCase() === searchInput.toLocaleLowerCase();
    });

    return (
        <>
            <SearchInput
                title="Search country information"
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                getCountry={getCountry} // Pass the function as a prop
                searchClicked={searchClicked}
                foundCountry={foundCountry}
                error={error}
                setError={setError}
            />
        </>
    );
}

export default Search;
