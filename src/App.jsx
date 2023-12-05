import './App.css';
import axios from "axios";
import world_map from './assets/world_map.png';
import React, {useState} from "react";

function App() {

    //useState
    const [worldmap, setMap] = useState([]);
    const [error, setError] = useState('');

    //fetchInfo
    async function getInfo() {
        setError('');
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            setMap(response.data);

            // Landname
            console.log(response.data[3].name.common);
            //Flags
            console.log(response.data[3].flag);

            //population
            console.log('Has a population of: ' + response.data[3].population);
        } catch (e) {
            console.error(e);
        }
    }

    // Voor ieder land geef je het volgende weer:
    //     De naam van het land
    // De vlag van dat land
    // De zin: Has a population of [amount] people
    // De landen zijn gesorteert op populatie, van laag naar hoog;
    return (
        <>
        <img src={world_map} alt=""/>
        <h2>World Regions</h2>
        <button type="button" onClick={getInfo}>Haal Data op!</button>
        {worldmap.length > 0 && <ul>
            {worldmap.map((countries) => {
                return (
                    <>
                        <li key={countries.area}><span>{countries.flag}</span> {countries.name.common}
                        <p>Has a population of: {countries.population}</p>
                        </li>

                    </>)
            })}
        </ul>
}

</>
)
}

export default App;
