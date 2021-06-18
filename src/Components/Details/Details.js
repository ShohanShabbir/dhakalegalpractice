import React from 'react';
import './Details.css';

const Details = ({ info }) => {
    return (
        <div className="col-md-4 text-white info-card">
            <div className={`d-flex justify-content-center align-items-center info-container info-${info.background}`}>
                <div className="mr-5">
                    <img style={{height: '50px'}} src={info.icon} alt="" />
                </div>
                <div className="ml-2">
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>

    );
};

export default Details;