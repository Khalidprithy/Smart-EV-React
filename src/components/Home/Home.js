import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import HomeIntro from '../HomeIntro/HomeIntro';
import HomeReviews from '../HomeReviews/HomeReviews';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const navigate = useNavigate()
    const [reviews, setReviews] = useReviews()
    return (
        <div className='home-container'>
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
            <div className='show-btn-container'>
                <button onClick={() => navigate('/review')} className='show-all-btn'>Show All Reviews</button>
            </div>
        </div>
    );
};

export default Home;