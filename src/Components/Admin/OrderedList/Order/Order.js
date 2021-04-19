import React from 'react';
import './Order.css';

const Order = (props) => {

    const {title, price} = props.orderedService;

    return (
        <div>
            <div className="body-area">
                <p>{title}</p>
                <p>1</p>
                <p>$ {price}.00</p>
            </div>
        </div>
    );
};

export default Order;