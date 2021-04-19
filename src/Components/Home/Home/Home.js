import React from 'react';
import About from '../About/About';
import Delivery from '../Delivery/Delivery';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <About></About>
            <Reviews></Reviews>
            <Delivery></Delivery>
            <Footer></Footer>
        </div>
    );
};

export default Home;