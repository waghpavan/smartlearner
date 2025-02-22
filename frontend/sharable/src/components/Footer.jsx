import React from 'react';
import facebook from './assets/facebook.png'
import insta from './assets/insta.png'
import linkedin from './assets/linkedin.png'
import xcom from './assets/x.com.png'
import youtube from './assets/youtube.png'
const Footer = () => {
    const footerStyle = {
        backgroundColor: 'rgb(7, 7, 49)',
    };

    const liHoverStyle = {
        opacity: 0.5,
    };

    const termItemStyle = {
        padding: '7px',
    };

    const termItemHoverStyle = {
        outline: '#ffffff solid 2px',
        background: '#1e84c4',
    };

    return (
        <footer style={footerStyle} className="px-44 h-48 text-[#fff] flex justify-between items-center">
            <ul id="terms" className="flex gap-6">
                <li className='p-2 hover:outline'>Privacy Policy</li>
                <li className='p-2 hover:outline'>About Us</li>
                <li className='p-2 hover:outline'>FAQs</li>
                <li className='p-2 hover:outline'>Contact Us</li>
                <li className='p-2 hover:outline'>Refund policy</li>
            </ul>
            <ul id="foot" className="flex gap-3">
                <li className='opacity-50 hover:opacity-100'><img src={facebook} width="30px" height="40px" alt="facebook" /></li>
                <li className='opacity-50 hover:opacity-100'><img src={xcom} width="30px" height="30px" alt="x.com" /></li>
                <li className='opacity-50 hover:opacity-100'><img src={youtube} width="30px" height="30px" alt="youtube" /></li>
                <li className='opacity-50 hover:opacity-100'><img src={linkedin} width="30px" height="30px" alt="linkedin" /></li>
                <li className='opacity-50 hover:opacity-100'><img src={insta} width="30px" height="30px" alt="insta" /></li>
            </ul>
        </footer>
    );
};

export default Footer;
