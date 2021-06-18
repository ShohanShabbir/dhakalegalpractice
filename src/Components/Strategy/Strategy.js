import React from 'react';
import logo from '../../images/e94e3ec68a6346898909e6bed3893b16.png';
import './Strategy.css';
import Fade from 'react-reveal/Fade';

const Strategy = () => {

    return (

        <section className="container-fluid main-text">
            <h1>Strategy</h1>
            <div className="strategy">
                <div className="container strategy-container">
                    <Fade left>
                    <div className="cards">
                        <div className="content">
                            <div className="imgBx">
                                <img src={logo} alt="" />
                            </div>
                            <div className="contentBx contents">
                                <h3>Our Strategy</h3>
                                <a href="#" className="main-btn">Learn More</a>
                            </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className="cards">
                        <div className="content">
                            <div className="imgBx">
                                <img src={logo} alt="" />
                            </div>
                            <div className="contentBx">
                                <h3>Our Strategy</h3>
                                <a href="#" className="main-btn">Learn More</a>
                            </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="cards">
                        <div className="content">
                            <div className="imgBx">
                                <img src={logo} alt="" />
                            </div>
                            <div className="contentBx">
                                <h3>Our Strategy</h3>
                                <a href="#" className="main-btn">Learn More</a>
                            </div>
                        </div>

                    </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Strategy;