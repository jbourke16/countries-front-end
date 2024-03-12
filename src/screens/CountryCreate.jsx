import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCountry } from '../services/countries.js';

function CountryCreate({fetchCountries}) {
    const [country, setCountry] = useState({
        name: "",
        capital: "",
        region: "",
        population: "",
        flag: "",
        primaryLanguage: ""
    });

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createCountry(country);
        fetchCountries()
        navigate('/countries');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setCountry((prevCountry) => ({
            ...prevCountry,
            [name]: value,
        }));
    }


    return (
        <div className ="create-country-form">
            <h1>Add a country to our Database!</h1>

            <form className="country-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add country here"
                    name="name"
                    value={country.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Add country capital"
                    name="capital"
                    value={country.capital}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Add country's region"
                    name="region"
                    value={country.region}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    placeholder="Population size"
                    name="population"
                    value={country.population}
                    onChange={handleChange}
                />
                 <input
                    type="text"
                    placeholder="Put flag emoji here"
                    name="flag"
                    value={country.flag}
                    onChange={handleChange}
                />
                 <input
                    type="text"
                    placeholder="Put country's primary language here"
                    name="primaryLanguage"
                    value={country.primaryLanguage}
                    onChange={handleChange}
                /> 

                  <button type="submit">Create Country</button>   
            </form>

        </div>

    )
}

export default CountryCreate