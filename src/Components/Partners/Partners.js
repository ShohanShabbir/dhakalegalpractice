import React from 'react';
import brand from '../../images/Arpon-Enterprise-Dhaka.png';
import brand1 from '../../images/Blue-Seal-Textile-Ltd.png';
import brand2 from '../../images/DBBL-Bank.png';
import brand3 from '../../images/Dhaka-North-City-Corporation.png';
import brand4 from '../../images/Eastern-Insurance-Company-Limited-Dhaka..png';
import brand5 from '../../images/union-logo-PNG.png';
import logo from '../../images/e94e3ec68a6346898909e6bed3893b16.png';
import './Partners.css';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const Partners = () => {
    return (
        <Slide left>
        <section className="container-fluid main">
            <h1>People Trust Us</h1>
            <div className="partner">
                <div className="container partner-container brands">

                    <div className="cards">
                        <div className="content">
                            <div className="imgBx">
                                <img src={brand} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="content">
                            <div className="imgBx">
                                <img src={brand1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="content">
                            <div className="imgBx">
                                <img src={brand2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="content">
                            <div className="imgBx">
                                <img src={brand3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="content">
                            <div className="imgBx">
                                <img src={brand4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Slide>
    );
};

export default Partners;