import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  const [population, setPopulation] = useState('');


  async function getCountry() {
    setError('');
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(response.data);
    

    } catch (e) {
      console.error(e);
      setError('Error fetching country data.');
    }
  }

  const foundCountry = countries.find((country) => {
    return country.name.common.toLowerCase() === searchInput.toLocaleLowerCase();
  });



  return (
    <>
      <h2>Search country information</h2>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="button" onClick={getCountry}>
        Zoek
      </button>

      {foundCountry && (
        <div>
          <h1><img className="img-wrapper" src={foundCountry.flags.png} /> {foundCountry.name.common}</h1>
          <p>{foundCountry.name.common} is situated in {foundCountry.subregion} and the capital is {foundCountry.capital}. 
 It has a population of {foundCountry.population.toFixed()} million people and it borders with {foundCountry.borders.length} neighboring countries</p>
          {/* Add other country information as needed */}
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
}

export default Search;
