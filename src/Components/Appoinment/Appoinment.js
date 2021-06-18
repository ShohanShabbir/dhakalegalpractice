import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelopeSquare, faMapMarked, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Appointment.css';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
const Appoinment = () => {
    return (
        <section className="appoinment mt-5">
          <Fade left>  <h1 style={{fontSize: '60px',color: 'rgba(255, 254, 254, 0.37)', marginLeft: '10px'}}>Make An Appointment</h1> </Fade>
            <div className="contact">
            <div className="container contact-container">
                <Slide left>
                <div className="contactinfo">
                    <div className="box">
                        <div className="icon">
                            <FontAwesomeIcon icon={faMapMarked} />
                        </div>
                        <div className="text">
                            <h3 className="text-danger">Address</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sapiente.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                          <FontAwesomeIcon icon={faEnvelopeSquare} />
                        </div>
                        <div className="text">
                            <h3 className="text-danger">Email</h3>
                            <p style={{fontSize:'20px'}}>dhakalegalpractice@gmail.com</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        </div>
                        <div className="text">
                            <h3 className="text-danger">Phone Number</h3>
                            <p style={{fontSize:'20px'}}>+8801318370722.</p>
                        </div>
                    </div>
                </div>
                </Slide>
                <Slide right>
                <div className="contactForm">
                    <form action="#">
                        <h2>Make An Appointment</h2>
                        <div className="inputBox">
                            <input type="text" name="" required ="required" />
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="" required ="required" />
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <textarea type="text" name="" required ="required" />
                            <span>Type Your Message</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit" name="" required ="required" />
                            
                        </div>
                    </form>
                </div>
                </Slide>
            </div> 

        </div>
        </section>
    );
};

export default Appoinment;