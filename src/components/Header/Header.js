import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { AiFillCar, AiFillInfoCircle } from 'react-icons/ai';

const Header = () => {
    return (
        <nav className='nav-bar'>
            <div className='title'>
                <h4>Smart-EV</h4>
                <AiFillCar></AiFillCar>
            </div>
            <ul>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : 'nav-link'} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : 'nav-link'} to='/review'>Review</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : 'nav-link'} to='/Chart'>Chart</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : 'nav-link'} to='/about'>About</NavLink>
            </ul>
            <AiFillInfoCircle></AiFillInfoCircle>
        </nav>
    );
};

export default Header;