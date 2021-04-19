import React from 'react';
import Banner from './Banner/Banner';
import HeaderMain from './HeaderMain/HeaderMain';


const Header = () => {
    return (
        <div style={{width:"90%", margin: "auto"}}>
            <HeaderMain></HeaderMain>
            <Banner></Banner>
        </div>
    );
};

export default Header;