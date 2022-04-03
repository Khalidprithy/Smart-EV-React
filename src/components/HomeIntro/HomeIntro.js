import React from 'react';

const HomeIntro = () => {
    return (
        <div>
            <div className='home-intro'>
                <div>
                    <img className='intro-img' src="https://img.freepik.com/free-vector/electric-car-charging-station-front-view-electric-car-silhouette-with-green-glowing-dark-background-ev-concept_148087-350.jpg" alt="" />
                </div>
                <div className='info-text'>
                    <h2>Best EV in Town <br /> + Smart features</h2>
                    <p>Electric and hybrid vehicles are associated with green technologies and a reduction in greenhouse emissions due to their low emissions of greenhouse gases and fuel-economic benefits over gasoline and diesel vehicles.</p>
                    <button className='book-btn'>Prebook</button>
                </div>
            </div>

        </div>
    );
};

export default HomeIntro;