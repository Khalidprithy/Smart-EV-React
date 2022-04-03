import React from 'react';
import './HomeReviews.css'

const HomeReviews = ({ review }) => {
    const { image, name, rating, text } = review;
    return (
        <div className='review-card'>
            <div className='user-info'>
                <img src={image} alt="" />
                <h6>{name}</h6>
            </div>
            <p><small className='review-text'>{text.slice(0, 180)}</small></p>
            <p className='rating'>Rating: {rating}</p>
        </div>
    );
};

export default HomeReviews; <h4>Reviews</h4>