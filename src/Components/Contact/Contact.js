import React from 'react';
import map from '../../images/pin.png';
import facebook from '../../images/facebook.png';
import skype from '../../images/006-skype.png';
import instagram from '../../images/011-instagram.png';
import linkedin from '../../images/010-linkedin.png';
import './Contact.css';


const Contact = () => {
    return (
        <div>
            <h1 className="main-text1">Make An Appointment</h1>
            <div className="contact-form">
           
           <div className="container contact">
               <div className="contactinfo text-white">
                   <div>
                       <h2>Contact Info</h2>
                       <ul className="info">
                           <li>
                               <img src={map} alt="" />
                               <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum!</span>
                           </li>
                           <li>
                               <img src={map} alt="" />
                               <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum!</span>
                           </li>
                           <li>
                               <img src={map} alt="" />
                               <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum!</span>
                           </li>
                       </ul>

                   </div>
                   <ul className="sci">

                       <li><a href="#"><img style={{ height: '32px' }} src={facebook} alt="" /></a></li>
                       <li><a href="#"><img style={{ height: '32px' }} src={skype} alt="" /></a></li>
                       <li><a href="#"><img style={{ height: '32px' }} src={instagram} alt="" /></a></li>
                       <li><a href="#"><img style={{ height: '32px' }} src={linkedin} alt="" /></a></li>

                   </ul>
               </div>
               <div className="contactform">
                   <h2>Make An Appointment</h2>
                   <div className="formBox">
                       <div className="inputBox w-48 ">
                           <input type="text" name="required" />
                           <span>First Name</span>
                       </div>
                       <div className="inputBox  w-48">
                           <input  type="text" name="required" />
                           <span>Last Name</span>
                       </div>
                       <div className="inputBox w-48">
                           <input type="text" name="required" />
                           <span>Email</span>
                       </div>
                       <div className="inputBox w-48">
                           <input type="text" name="required" />
                           <span>Mobile Number</span>
                       </div>
                       <div className="inputBox w-48">
                           <input type="date" name="required" />
                           <span>Appointment Date</span>
                       </div>
                       <div className="inputBox w-48">
                           <input type="time" name="required" />
                           <span>Appointment Time</span>
                       </div>
                       <div className="inputBox w-100">
                           <textarea type="text"></textarea>
                           <span>Message</span>
                       </div>
                       <div className="inputBox w-100">
                           <input type="Submit" name="required" />

                       </div>
                   </div>
               </div>
           </div>
       </div>
        </div>
    );
};

export default Contact;