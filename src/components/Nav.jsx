import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/countries'>Countries</NavLink>
            <NavLink to='/add-country'>Add Country</NavLink>
        </nav>
    )
};

export default Nav