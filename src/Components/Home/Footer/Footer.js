import React from 'react';
import './Footer.css';
import footer from '../../../Images/footer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="d-flex align-items-center" style={{width:"90%", height: "300px", margin: "auto"}}>

                <div className="col-md-4 color-white footer-logo">
                    <img src={footer} alt=""/>
                    <p>We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies and cleaning methods.</p>
                    <p>Our prices are simple and affordable which are easy on pocket in comparison with the high street prices</p>
                </div>

                <div className="col-md-4 color-white footer-contacts">
                    <h5>Contacts</h5>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt}/> 8494 Signal Hill Road Manassas, VA, 20110</p>
                    <p><FontAwesomeIcon icon={faClock}/> Mon-Fri: 8am - 5pm</p>
                    <p><FontAwesomeIcon icon={faClock}/> Sat-Sun: 10am - 5pm</p>
                    <p><FontAwesomeIcon icon={faEnvelope}/> info@yourlaundrysite.com</p>
                    <h5><FontAwesomeIcon icon={faPhoneAlt}/> +14378862618</h5>
                </div >

                <div className="col-md-4 color-white footer-links">
                    <p>About Us</p>
                    <p>Our Pricing</p>
                    <p>Refund policy</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;