import React from 'react';
import './About.css';
import AboutImg from '../../../Images/about.jpg';
import ExperienceImage from '../../../Images/experience.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const About = () => {
    return (
        <div className="about-container d-flex">
            <div className="about-image-container col-md-5">
                <img className="female-img" src={AboutImg} alt=""/>
                <img className="experience-img" src={ExperienceImage} alt=""/>
            </div>

            <div className="about-description-container col-md-7">
                <div>
                    <h5 className="color-primary font-weight-primary">More than 25 Years of Experience</h5>
                    <h1>We are Passionate About Laundry</h1>
                    <p className="description-text">We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics. Plus, we maintain the highest standards of business integrity by following local and national regulations and environmental safety rules. We are passionate about the way you think about laundry!</p>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="col-md-6">
                        <p className="list-text"><span className="color-primary"><FontAwesomeIcon icon={faCheck}/></span> 100% Customer Satisfaction</p>
                        <p className="list-text"><span className="color-primary"><FontAwesomeIcon icon={faCheck}/></span> Free Collection & Delivery</p>
                        <p className="list-text"><span className="color-primary"><FontAwesomeIcon icon={faCheck}/></span> Affordable Prices</p>
                        <p className="list-text"><span className="color-primary"><FontAwesomeIcon icon={faCheck}/></span> Best Quality</p>
                    </div>

                    <div className="col-md-6 text-center font-weight-primary">
                        <h5 className="color-primary"><FontAwesomeIcon icon={faPhoneAlt}/></h5>
                        <p>Call for Quality Services</p>
                        <h4 className="font-weight-primary">+14378862618</h4>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;