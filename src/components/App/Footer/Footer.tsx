import './Footer.css'
import radware_logo from '../../../assets/images/radware_logo.svg'
import RAD_logo from '../../../assets/images/RAD_logo.jpg'
import { Link } from 'react-router-dom' 
import { Button, Typography } from '@mui/material'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__logo-wrapper">
                    <a href="https://www.radware.com/" target="_blank" rel="noopener noreferrer">
                        <img src={RAD_logo} alt="logo" className="footer__logo" /> 
                    </a>
                    <a href="https://www.radware.com/" target="_blank" rel="noopener noreferrer">
                        <img src={radware_logo} alt="logo" className="footer__logo" />
                    </a>
                </div>

                    <ul className="footer__text-wrapper-links">
                        <li className="footer__text-wrapper-links-item">
                            <Link to="/privacy-policy">
                                <p className="footer__text">Privacy Policy</p>
                            </Link>
                        </li>   
                        <li className="footer__text-wrapper-links-item">
                            <Link to="/terms-of-service">
                                <p className="footer__text">Terms of Service</p>
                            </Link>
                        </li>
                        <li className="footer__text-wrapper-links-item">
                            <Link to="/cookie-settings">
                                <Typography variant="body1" color="secondary" >Cookie Settings</Typography>
                            </Link>
                        </li>
                    </ul>
                    <Button variant="outlined" color="secondary">
                        Contact Us
                    </Button>
                    <div className="footer__text-wrapper-text">
                        <Typography variant="body1" color="secondary" >All rights reserved</Typography>
                        <Typography variant="body1" color="secondary" >© 2025 Ziv and Or Project</Typography>
                    </div>
                </div>
        </footer>
    )
}

export default Footer;