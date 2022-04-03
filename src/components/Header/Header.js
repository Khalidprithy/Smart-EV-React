import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/review'>Review</NavLink>
                <NavLink to='/about'>About</NavLink>
            </ul>


        </nav>
    );
};

export default Header;