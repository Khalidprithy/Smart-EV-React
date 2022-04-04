import React from 'react';
import './Footer.css'
import { AiOutlineGithub, AiFillInstagram, AiFillYoutube, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='footer'>
            <h4>Developed by KBin</h4>
            <h6>Get in Touch</h6>
            <div>
                <AiOutlineGithub className='footer-icon'></AiOutlineGithub>
                <AiFillFacebook className='footer-icon'></AiFillFacebook>
                <AiFillInstagram className='footer-icon'></AiFillInstagram>
                <AiFillYoutube className='footer-icon'></AiFillYoutube>
            </div>
            <p><small>©Copyright-kbin.Dev</small></p>
        </div>
    );
};

export default Footer;