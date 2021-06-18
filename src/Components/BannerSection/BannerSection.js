import React from 'react';
import img from '../../images/photo-1605664042212-73d09aa18a96-removebg-preview.png';
import './BannerSection.css';
import Fade from 'react-reveal/Fade';

const BannerSection = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <Fade left>
                    <div className="col-md-6 text-white">
                        <h1>Dhaka Legal Practice</h1>
                        <p className="text-left">A multi-discipline law firm</p>
                        <a href="#" className="main-btn1"><span>Know More</span></a>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="col-md-6">
                        <img className="img-fluid mt-4 ml-5" src={img} alt="" />
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;