import './App.css';
import axios from "axios";
import world_map from './assets/world_map.png';
import React, {useState, useEffect} from "react";
import Worldmap from "./component/World.jsx";
import World from "./component/World.jsx";

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
            <World
                img={world_map}
                alt="World Regions"
                title="World Regions"
                countriesData={worldmap}
                />

        </>
    )
}

export default App;
