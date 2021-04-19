import React, { useEffect, useState } from 'react';
import './OrderedList.css'
import HeaderMain from '../../Home/Header/HeaderMain/HeaderMain';
import Sidebar from '../Sidebar/Sidebar';
import Order from './Order/Order';

const OrderedList = () => {


    const [orderedServices, setOrderedServices] = useState([]);

    useEffect(() => {
    fetch('https://vast-ravine-84927.herokuapp.com/orderedServices')
    .then(res => res.json())
    .then(data => setOrderedServices(data))
    }, [])




    return (
        <div style={{width:"90%", margin: "auto"}}>
            <HeaderMain></HeaderMain>
            <div className="d-flex">
                <Sidebar></Sidebar>
                <div className="order-container">
                    <div className="heading-area">
                        <h3>Name</h3>
                        <h3>Quantity</h3>
                        <h3 className="heading-area-child">Price</h3>
                    </div>
                    <hr/>
                    {
                        orderedServices.map(orderedService => <Order orderedService={orderedService}></Order>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OrderedList;