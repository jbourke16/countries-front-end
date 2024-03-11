import { useState, useEffect } from 'react';
import { getCountry, deleteCountry } from '../services/countries.js';
import { Link, useParams, useNavigate } from 'react-router-dom';

function CountryDetail() {
    const [country, setCountry] = useState([])

    let { id } = useParams()
    let navigate = useNavigate()

    const fetchCountry = async () => {
        const oneCountry = await getCountry(id)
        setCountry(oneCountry)
    }

    useEffect(() =>  {
       fetchCountry()
    }, [])

    const handleDelete = async () => {
        await deleteCountry(id)
        navigate('/countries')
    }

    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population}</p>
            <p>Flag: {country.flag}</p>
            <p>Language: {country.primaryLanguage}</p>

            <Link to={`/countries/${id}/edit`}>
                <button>Edit</button>
            </Link>
                <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default CountryDetail