import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Logo from './Logo/Logo';

const HeaderMain = () => {
    return (
        <div style={{display: "flex", justifyContent: "space-between", marginTop:"10px"}}>
            <Logo></Logo>
            <Navbar></Navbar>
        </div>
    );
};

export default HeaderMain;