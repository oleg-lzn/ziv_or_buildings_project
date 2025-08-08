import './Footer.css'
import radware_logo from '../../../assets/images/radware_logo.svg'
import RAD_logo from '../../../assets/images/RAD_logo.jpg'
import { Link } from 'react-router-dom' 
import { Button } from '@mui/material'

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
                                <p className="footer__text">Cookie Settings</p>
                            </Link>
                        </li>
                    </ul>
                    <Link to="/contact-us">
                        <Button variant="outlined" color="secondary">
                            Contact Us
                        </Button>
                    </Link>
                    <div className="footer__text-wrapper-text">
                        <p className="footer__text">All rights reserved</p>
                        <p className="footer__text">© 2025 Ziv and Or Project</p>
                    </div>
                </div>
        </footer>
    )
}

export default Footer;