import { NavLink } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';
import { useState } from 'react';

function Nav() {

    return (
        <div className="nav-bar">
            <nav className="nav-menu">
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/countries'>Countries</NavLink></li>
                    <li><NavLink to='/add-country'>Add Country</NavLink></li>
                </ul>
            </nav>
        </div>
    )
};

export default Nav