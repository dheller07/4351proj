import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css';


function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <FacebookIcon/><TwitterIcon/><InstagramIcon/>
            <p> &copy; Fall 2021 COSC 4351.com</p>
            </div>
           
        </div>
    );
}

export default Footer;

