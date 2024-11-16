import React from 'react';
import { Link } from "react-router-dom";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

const SocialIcons = () => {
    return (
        <div className="social-icon">
            <Link to={"https://www.linkedin.com/in/thant-htoo-aung-b47374267"} target="_blank">
                <img src={navIcon1} alt="LinkedIn Icon" />
            </Link>
            <Link to={"https://github.com/thanthtooaung-coding"} target="_blank">
                <img src={navIcon2} alt="GitHub Icon" />
            </Link>
            <Link to={"https://www.facebook.com/alvin.9698"} target="_blank">
                <img src={navIcon3} alt="Facebook Icon" />
            </Link>
            <Link to={"https://x.com/VinnnDev"} target="_blank" rel="noopener noreferrer">
                <img src={navIcon4} alt="X Icon" />
            </Link>
        </div>
    );
};

export default SocialIcons;
