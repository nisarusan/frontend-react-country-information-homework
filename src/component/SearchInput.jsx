import React from 'react';

function SearchInput({
                         searchClicked,
                         title,
                         setSearchInput,
                         getCountry,
                         foundCountry,
                         searchInput,
                         error
                     }) {
    return (
        <>
            <h2>{title}</h2>
            <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="button" onClick={getCountry}>
                Zoek
            </button>
            {searchClicked && !foundCountry && (
                <p>This country hasn't been found.</p>
            )}

            {foundCountry && (
                <div>
                    <h1>
                        <img
                            className="img-wrapper"
                            src={foundCountry.flags.png}
                            alt={foundCountry.name.common}
                        />{' '}
                        {foundCountry.name.common}
                    </h1>
                    <p>
                        {foundCountry.name.common} is situated in{' '}
                        {foundCountry.subregion} and the capital is{' '}
                        {foundCountry.capital}.
                        It has a population of{' '}
                        {foundCountry.population
                            ? foundCountry.population.toFixed()
                            : 'Unknown'}{' '}
                        million people and it borders with{' '}
                        {foundCountry.borders.length} neighboring countries
                    </p>
                </div>
            )}

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    );
}

export default SearchInput;
