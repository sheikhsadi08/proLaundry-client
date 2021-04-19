import React from 'react';
import './ServiceCard.css';
import { Link } from 'react-router-dom';


const ServiceCard = (props) => {
    const {title, description, price, image} = props.service;
  

    return (
        <div className="card-container">
            <div className="card-image-container">
                <img className="service-img" src={`data:image/png;base64,${image.img}`} alt=""/>
            </div>
            <h5 className="text-center">{title}</h5>
            <p className="text-center">{description}</p>
            <h6 className="text-center text-success">${price}</h6>
            <Link className="btn btn-success order-button" to={`/book/${price}`}>Order Now</Link>
        </div>
    );
};

export default ServiceCard;