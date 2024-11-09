import React from 'react';
// import { FacebookOutlined, LinkedinOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import './style.css';
import logo from '../../assets/kyt.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-head">
                <div className="footer-head-logo">
                    <img src={logo} alt="LOGO" />
                </div>
                <div className="footer-icons">
                    {/* <TwitterOutlined className="social-icon" />
                    <LinkedinOutlined className="social-icon" />
                    <FacebookOutlined className="social-icon" />
                    <YoutubeOutlined className="social-icon" /> */}
                </div>
            </div>

            <div className="footer-top">
                <div className="footer-section">
                    <h3 className="footer-title">Products</h3>
                    <ul className="footer-list">
                        <li>KYT - Know Your Trader Passport</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Company</h3>
                    <ul className="footer-list">
                        <li>About Us</li>
                        <li>Reviews</li>
                        <li>Careers</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Legal</h3>
                    <ul className="footer-list">
                        <li>Third Party</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-disclaimer">
                    The information provided on this website is for informational and educational purposes only. The website does not hold or handle any assets of users and does not provide investment, financial, legal, tax or other advice. Any analysis or visual representation of financial data is for general information purposes only and should not be relied upon for investment decisions. Users should always conduct their own research and make their own decisions.
                </p>
                <p className="footer-copyright">
                    Copyright © 2024 "KYT - KNOW YOUR Trader" TECHNOLOGIES OÜ, A COMPANY INCORPORATED IN ESTONIA, REGISTRY NUMBER 16094061. All rights reserved. Version: 1.58.1.3d653a11
                </p>
            </div>
        </footer>
    );
};

export default Footer;
