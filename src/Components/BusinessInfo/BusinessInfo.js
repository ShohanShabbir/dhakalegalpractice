import React from 'react';
import phone from '../../images/icons8-phone-50.png';
import clock from '../../images/wall-clock.png';
import map from '../../images/pin.png';
import Details from '../Details/Details';
import Fade from 'react-reveal/Fade';


const BusinessInfo = () => {
    const infoData = [
        {
            title: 'Opening Hours',
            description: 'We are open 7 days',
            icon: clock,
            background: 'primary'
        },
        {
            title: 'Visit Our Location',
            description: '102, Kakrail Road, Ground Floor, Dhaka-100',
            icon: map,
            background: 'primary'
        },
        {
            title: 'Call us now',
            description: '+8801318370722',
            icon: phone,
            background: 'primary'
        }
    ]
    return (
        <div>
            <Fade bottom>
            <section className="d-flex justify-content-center">
                <div className="w-75 row">
                {
                    infoData.map(info => <Details info={info}></Details>)
                }
                </div>
            </section>
            </Fade>
        </div>
    );
};

export default BusinessInfo;