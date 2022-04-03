import React from 'react';
import './Review.css'
import useReviews from '../../hooks/useReviews';

const Review = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div>
            {
                reviews.map(review => (
                    <div className='review-card-compo'>
                        <div className='user-info'>
                            <img src={review.image} alt="" />
                            <h6>{review.name}</h6>
                        </div>
                        <p><small className='review-text'>{review.text}</small></p>
                        <p className='ratings'>Rating: {review.rating}</p>
                    </div>

                ))
            }
        </div>
    );
};

export default Review;