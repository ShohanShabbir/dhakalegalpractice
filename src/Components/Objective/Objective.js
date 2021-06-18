import React from 'react';
import './Objective.css';
import Slide from 'react-reveal/Slide';

const Objective = () => {
    return (
        <Slide left>
        <div style={{backgroundColor: '#020202', marginTop:'50px'}} className="objective container-fluid  text-center  ">
            <h2 style={{textAlign: 'left', letterSpacing:'5px'}}>Objectives</h2>
            <p  className="mt-5 text-white">Our practice is predominantly business-oriented providing <br/> comprehensive advice to clients ranging from individual, small business, <br /> and governmental entities to large privately</p>
        </div>
        </Slide>
    );
};

export default Objective;