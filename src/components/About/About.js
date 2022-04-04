import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <div className='question-1'>
                <h3>What is Semantic tag?</h3>
                <p>Semantic tags are specific meaningful tag for different sections and layout of the web page. Semantic tags helps build a better connection between developer and browser.</p>
                <h5>Benefits</h5>
                <ul>
                    <li>Better for SEO. Easier to determine which section is for what use and it's importance</li>
                    <li>The codes are easier to read and edit.</li>
                    <li>Great accessibility</li>
                    <li>Better user experience</li>
                </ul>
                <h5>Examples</h5>
                <ul className='example-list'>
                    <li>header,</li>
                    <li>nav,</li>
                    <li>section,</li>
                    <li>article,</li>
                    <li>aside,</li>
                    <li>footer,</li>
                </ul>
            </div>
            <div className='question-2'>
                <h3>What is Context API?</h3>
                <p>Context API allows us to share state across the entire app easily. This is a better alternative to props drilling or moving props from grandparent to parent to child and so on. You need React.createContext() to use this feature. All you need to do is wrap the component and pass one or multiple state or value. It is hold that state and it will be accessible from all of it's child component. This is a safer way of passing data and also easier to manage. </p>
            </div>
        </div>
    );
};

export default About;