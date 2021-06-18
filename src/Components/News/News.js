import React from 'react';
import logo from '../../images/e94e3ec68a6346898909e6bed3893b16.png';
import './News.css';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const news = () => {
    return (
        <div style={{background: '#000'}}>
            <section className="container-fluid main-text">
            <Fade left>
            <h1>news & Events</h1>
            </Fade>
            <div className="news">
                <Slide bottom>
                <div className="container news-container">

                    <div className="cards">
                        <div className="content">
                            <div className="imgBx">
                                <img src={logo} alt="" />
                            </div>
                            <div className="contentBx contents">
                                    <h3 style={{fontSize: '20px'}}>Myanmar journalists fly home after arrest</h3>
                                   
                                <a  href="#" className="main-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="content">
                            <div className="imgBx">
                                <img src={logo} alt="" />
                            </div>
                            <div className="contentBx">
                                <h3 style={{fontSize: '20px'}}>Myanmar journalists fly home after arrest</h3>
                                
                                <a href="#" className="main-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="content">
                            <div className="imgBx">
                                <img src={logo} alt="" />
                            </div>
                            <div className="contentBx">
                                <h3 style={{fontSize: '20px'}}>Myanmar journalists fly home after arrest</h3>
                            
                                <a href="#" className="main-btn">Read More</a>
                            </div>
                        </div>

                    </div>
                </div>
                </Slide>
            </div>
        </section>
        </div>
    );
};

export default news;