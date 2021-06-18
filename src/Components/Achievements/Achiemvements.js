import React from 'react';
import pic from '../../images/felix-mittermeier-nAjil1z3eLk-unsplash.jpg';
import logo from '../../images/e94e3ec68a6346898909e6bed3893b16.png';
import './Achievements.css';
import Fade from 'react-reveal/Fade';

const Achiemvements = () => {
    return (
        <div className="mt-5 main-texts">
            
            <h1>Achievements</h1>
            
            <div className="container achievements">
            
            
                <div className="row d-flex justify-content-center align-items-center">
                <Fade left>
                    <div className="col-md-6 text-white">
                     <img src={logo} alt="" />
                        <h2 className="mb-4">Our Goals <span className="text-danger">&</span> Achiemvements On Law Practices</h2>
                        <p className="mb-4">Working as a lawyer involves the practical application of abstract legal theories and knowledge to solve specific individualized problems, or to advance interests</p>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-4 text-danger">
                                <h5>12 years Of Experience</h5>
                            </div>
                            <div className="col-md-4 text-danger">
                            <h5>500+ Happy Clients</h5>
                            </div>
                            <div className="col-md-4 text-danger">
                            <h5>500+ Positive results</h5>
                            </div>
                        </div>
                    </div>
                    </Fade>

                    <Fade right>
                    <div className="col-md-6 mt-4 img">
                        <img className="img-fluid" src={pic} alt="" />
                    </div>
                    </Fade>
                </div>
                
            </div>
        </div>
    );
};

export default Achiemvements;