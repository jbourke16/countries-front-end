import { useState, useEffect } from 'react';
import { getCountries } from '../services/countries.js';
import Country from '../components/Country.jsx';

function Countries() {
    const [countries, setCountries] = useState([])

    async function fetchCountries() {
        const allCountries = await getCountries();
        console.log(countries)
        setCountries(allCountries);
    };

    useEffect(() => {
        fetchCountries()
    }, [])

    return (
        <div>
            <h1>All Countries</h1>

            <div className="countries-container">
                {
                    countries?.map((country) => (
                        <Country country={country} key={country._id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Countries