import React from 'react';
import Home from '../Home/Home';
import BannerSection from '../BannerSection/BannerSection';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Home></Home>
            <BannerSection></BannerSection>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;