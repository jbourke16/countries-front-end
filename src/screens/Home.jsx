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
        <div>
            <h1 className="home">Welcome to the Country Database</h1>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handleClick}>Find Country</button>

            <div>
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