import React from 'react';
import "./ReviewCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewCard = (props) => {
    const {name, designation, description, image} = props.review;


    return (
        <div className="review-card-container">

            <div className="d-flex">
                <div className="review-card-image-container">
                    <img className="service-img" src={`data:image/png;base64,${image.img}`} alt=""/>
                </div>
                <div className="my-auto ml-3">
                    <h5 className="">{name}</h5>
                    <p className="">{designation}</p>
                </div>
            </div>

            <div>
                <p className="my-3 review-description">{description}</p>
                <div className="review-star">
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </div>
            </div>

        </div>
    );
};

export default ReviewCard;