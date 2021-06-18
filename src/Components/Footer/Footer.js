import React from 'react';
import logo from '../../images/e94e3ec68a6346898909e6bed3893b16.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelopeOpen, faEnvelopeSquare, faMapMarked, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        
        <div className="footer">
            <Fade left>
            <footer>
                <div className="footer-left text-center text-white mt-5">
                    <img src={logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, sit! <br/> Facere autem reprehenderit est a voluptatibus architecto magnam minima, <br/> magni culpa dolore rem? Quod rerum nam quidem reiciendis illo <br/> minima odit totam dolores aliquid repudiandae, vitae sed tempore error vel.</p>
                </div>
                <div className="container details d-flex align-items-center">
                    <div className="icon d-flex align-items-center ">
                    <FontAwesomeIcon className="mr-5" icon={faMapMarked}/>
                        <h6>Lorem ipsum dolor sit amet.</h6>
                    </div>
                    <div className="icon d-flex align-items-center ">
                    <FontAwesomeIcon className="mr-5" icon={faEnvelopeOpen}/>
                        <h6>dhakalegalpractice@lawfirm.com</h6>
                    </div>
                    <div className="icon d-flex align-items-center ">
                    <FontAwesomeIcon className="mr-5" icon={faPhoneAlt}/>
                        <h6>+8801317777777</h6>
                    </div>
                </div>
            </footer>
            </Fade>
        </div>
        
    );
};

export default Footer;