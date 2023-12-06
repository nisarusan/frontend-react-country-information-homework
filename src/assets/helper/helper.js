import axios from "axios";

async function getInfo() {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const data = response.data;

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

let continent = 'continent_';
let continentArr = ["Africa", "Europe", "Asia", "Oceania", "North America", "South America", "Antartica"];

if(country.continents == 'Europe') {
    continent = continent + 'eu';
} else if(country.continents == 'Asia') {
    continent = contintent + 'asia'''
} eslse if()