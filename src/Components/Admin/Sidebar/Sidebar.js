import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    

    return (
        <div>
            <div className="sidebar-links">
                {/* <li><FontAwesomeIcon icon={faShoppingCart} /> <Link to={`/book/${price}`}>Book</Link></li> */}
                <li><FontAwesomeIcon icon={faShoppingBasket} /> <Link to="/orderedList">Booking List</Link></li>
                <li><FontAwesomeIcon icon={faComment} /> <Link to="/addReview">Add Review</Link></li>
            </div>

            <div className="sidebar-links">
                <li><FontAwesomeIcon icon={faShoppingBasket} /> <Link to="/orderedList">Ordered List</Link></li>
                <li><FontAwesomeIcon icon={faPlus} /> <Link to="/addService">Add Service</Link></li>
                <li><FontAwesomeIcon icon={faUserPlus} /> <Link to="/makeAdmin">Make Admin</Link></li>
            </div>
        </div>
    );
};

export default Sidebar;