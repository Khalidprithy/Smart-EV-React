import React, { useEffect, useState } from 'react';
import HomeIntro from '../HomeIntro/HomeIntro';
import HomeReviews from '../HomeReviews/HomeReviews';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div>
            <HomeIntro></HomeIntro>
            <h4 className='user-review-title'>User Reviews</h4>
            <div className='home-reviews'>
                {
                    reviews.map(review => <HomeReviews
                        key={review.id}
                        review={review}
                    ></HomeReviews>)
                }
            </div>
            <div>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>

        </div>
    );
};

export default Home;