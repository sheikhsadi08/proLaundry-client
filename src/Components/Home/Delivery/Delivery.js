import React from 'react';
import './Delivery.css';
import CarImage from '../../../Images/delivery.png';

const Delivery = () => {
    return (
        <div className="delivery-container d-flex align-items-center mt-5 mb-5">
            <div className="col-md-5 text-right">
                <h1>Quality Service with</h1>
                <h2>Free <span className="color-primary">Collection & Delivery</span></h2>
                <p>It is our goal to offer you the best possible laundry</p>
                <p>and dry cleaning service available.</p>
                <h2>+14378862618</h2>
            </div>

            <div className="col-md-4">
                <img src={CarImage} alt=""/>
            </div>
        </div>
    );
};

export default Delivery;