import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import HeaderMain from '../../Home/Header/HeaderMain/HeaderMain';
import Sidebar from '../Sidebar/Sidebar';
import './Book.css';

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [bookedData, setBookedData] = useContext(UserContext);

    const [booking, setBooking] = useState({});

    

    const { price } = useParams();
  
    useEffect(() => {
      fetch(`https://vast-ravine-84927.herokuapp.com/service/${price}`)
        .then(res => res.json())
        .then(data => {
            setBooking(data);
        });
    }, [price, setBooking]);



    // send ordered data to database.
    const handleOrders = () => {
        const url = "https://vast-ravine-84927.herokuapp.com/orderService";    
    
        fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(booking),
        }).then((res) => res.json());
    };



    
    return (
        <div style={{width:"90%", margin: "auto"}}>
            <HeaderMain></HeaderMain>
            <div className="d-flex">
                <Sidebar></Sidebar>
                <div className="book-container">
                    <h2>Proceed to Checkout...</h2>
                    <h5>User Name : <b>{loggedInUser.name}</b></h5>
                    <h5>Email : <b>{loggedInUser.email}</b></h5>
                    <h5>Service Name : <b>{booking.title}</b></h5>
                    <h5>Your total Bill <b>${booking.price}</b></h5>
                    <Link to="/OrderedList" className="btn btn-success" onClick={handleOrders}>Checkout</Link>
                </div>
            </div>
            
        </div>
    );
};

export default Book;