import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCountry, editCountry } from '../services/countries.js';

function CountryEdit() {
    const [country, setCountry] = useState({
        name: "",
        capital: "",
        region: "",
        population: "",
        flag: "",
        primaryLanguage: "",
    });

    let { id } = useParams;
    let navigate = useNavigate();

    async function fetchCountry() {
        const oneCountry = await getCountry(id);
        setCountry(oneCountry);
    };

    useEffect(() => {
        fetchCountry()
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await editCountry(id, country);
        navigate(`/countries/${id}`);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setCountry((prevCountry) => ({
            ...prevCountry,
            [name]: value,
        }));
    };

    return (
        <div className="update-country">
            <h1>Update a Country in our Database!</h1>

            <form onSubmit={handleSubmit}>
                <input  
                    type="text"
                    placeholder="Edit country name"
                    name="country"
                    value={country?.name}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Edit country capital"
                    name="capital"
                    value={country?.capital}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Edit country region"
                    name="region"
                    value={country?.region}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Edit population size"
                    name="population"
                    value={country?.population}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Edit flag"
                    name="flag"
                    value={country?.flag}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Edit primary language"
                    name="primaryLanguage"
                    value={country?.primaryLanguage}
                    onChange={handleChange}
                />
            </form>

            <button type="submit">Edit Country</button>

        </div>
    )
}

export default CountryEdit

