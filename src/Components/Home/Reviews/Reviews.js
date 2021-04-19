import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
import './Reviews.css';

const Reviews = () => {


    const [reviews, setReviews] = useState([]);
    
  useEffect(() => {
    fetch('https://vast-ravine-84927.herokuapp.com/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  }, [])




    return (
        <div >
            <h1 className="review-heading">Clients <span>Review</span></h1>
            <div className="review-container">
              {reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)}
            </div>
        </div>
    );
};

export default Reviews;