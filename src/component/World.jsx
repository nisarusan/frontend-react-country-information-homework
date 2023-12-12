
import React from 'react-dom';
import world_map from "../assets/world_map.png";
function World({ img, alt, title, countriesData}) {

    return (
        <>
            <img src={img} alt=""/>
            <h2>{title}</h2>
            {/* <button type="button" onClick={getInfo}>Haal Data op!</button> */}
            {countriesData.length > 0 && (
                <ul>
                    {countriesData.sort((a, b) => {
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
    );
}

export default World;