import React from 'react';
import './Logo.css';
import logo from '../../../../../Images/icon.png';


const Logo = () => {
    return (
        <div className="logo-container">
            <img src={logo} alt=""/>
            <h1><span className="color-primary">Pro</span>Laundry</h1>
        </div>
    );
};

export default Logo;