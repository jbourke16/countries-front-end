import {useState} from 'react';
import Country from '../components/Country.jsx';

function Home({countries}) {
    const [search, setSearch] = useState("")
    const [searchedCountries, setSearchedCountries] = useState([])

    function handleClick(){
        const filteredCountries = countries.filter((country) => {
            return country.name.toLowerCase().includes(search.toLowerCase())
        })

        setSearchedCountries(filteredCountries)
    }

    return (
        <div className="homepage">
            <h1 className="home">Welcome to CountryDB</h1>
            <p>The database that holds every country, capital, and region!</p>

            <div className="search-bar">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className="find-country" onClick={handleClick}>Find Country</button>
            </div>

            <div className="results-container">
                {
                    searchedCountries?.map((country) => (
                        <Country country={country} key={country._id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home