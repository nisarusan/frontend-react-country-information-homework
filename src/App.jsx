import './App.css';
import axios from "axios";
import world_map from './assets/world_map.png';
import React, {useState, useEffect} from "react";

function App() {

    //useState
    const [worldmap, setMap] = useState([]);
    const [error, setError] = useState('');

    //fetchInfo
    async function getInfo() {

        //setError on zero
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            setMap(response.data);
            // // Landname
            // console.log(response.data[3].name.common);
            // //Flags
            // console.log(response.data[3].flag);
            //population
            // console.log('Has a population of: ' + response.data[3].population);
        } catch (e) {
            console.error(e);
        }
    }

    //mount and useEffect - button not required
    useEffect(() => {
        getInfo();
        setError('');
    }, []);

    return (
        <>
            <img src={world_map} alt=""/>
            <h2>World Regions</h2>
            {/* <button type="button" onClick={getInfo}>Haal Data op!</button> */}
            {worldmap.length > 0 && (
                <ul>
                    {worldmap.sort((a, b) => {
                        const populationA = a.population || 0;
                        const populationB = b.population || 0;
                        return populationA - populationB;
                    }).map((country) => (
                        <li key={`${country.area}_${country.name.common}`}>
                            <div className="img-wrapper"><img src={country.flags.png} className="country"/><span
                                className={`continent_${country.continents} country_title`}>  {country.name.common}</span>
                            </div>
                            <p>Has a population of: {country.population || 'Unknown'}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default App;
