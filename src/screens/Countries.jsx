import Country from '../components/Country.jsx';

function Countries({ countries }) {
    

    return (
        <div className="all-countries">
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