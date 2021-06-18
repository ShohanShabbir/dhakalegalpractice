import React from 'react';
import logo from '../../images/hp-icon-1.png';
import logo1 from '../../images/financial-profit .png';
import './Services.css';
import Fade from 'react-reveal/Fade';

const Services = () => {
    return (
        <Fade left>
        <section className="container-fluid service-container">
            <h1 style={{ fontSize: '60px', marginTop: '100px', color: 'rgba(255, 254, 254, 0.37)', letterSpacing:'4px' }} className=" ml-4">Services</h1>
            <div className="service-section container">
                <div className="services">

                    <div className="service-card">
                        <div className="imgBx">
                            <img className="" src={logo1} alt="" />
                        </div>
                        <div className="contentBx">
                            <h3>COMPANY, CORPORATE, AND COMMERCIAL LAW</h3>
                           
                            <a href="#" className="main-btn">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="services">

                    <div className="service-card">
                        <div className="imgBx">
                            <img className="" src={logo1} alt="" />
                        </div>
                        <div className="contentBx">
                            <h3>E-commerce Law</h3>
                            <a href="#" className="main-btn">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="services">

                    <div className="service-card">
                        <div className="imgBx">
                            <img className="" src={logo1} alt="" />
                        </div>
                        <div className="contentBx">
                            <h3>CONVEYANCE & MORTGAGES</h3>
                            
                            <a href="#" className="main-btn">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="services">

                    <div className="service-card">
                        <div className="imgBx">
                            <img className="" src={logo1} alt="" />
                        </div>
                        <div className="contentBx">
                            <h3>LITIGATION AND ARBITRATION</h3>
                            
                            <a href="#" className="main-btn">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="services">

                    <div className="service-card">
                        <div className="imgBx">
                            <img className="" src={logo1} alt="" />
                        </div>
                        <div className="contentBx">
                            <h3>PARA–LEGAL MATTERS</h3>
                            
                            <a href="#" className="main-btn">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Fade>
    );
};

export default Services;