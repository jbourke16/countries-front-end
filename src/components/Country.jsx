import { Link } from 'react-router-dom';

function Country({ country }) {
    return (
        <div>
            <Link to={`/countries/${country._id}`}>
                <h3>{country.name}</h3>
                <p>{country.capital}</p>
                <p>{country.region}</p>
                <p>{country.population}</p>
                <p>{country.primaryLanguage}</p>
                <p>{country.flag}</p>
            </Link>
        
        </div>
    )
}

export default Country
