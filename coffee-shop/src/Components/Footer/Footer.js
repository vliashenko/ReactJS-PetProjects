import React, { Component } from 'react';
import '../Styles/Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer-main-container'>
                <div className="footer-main-col">
                    <div className="footer-main-logo-container">
                        <img src={require ('../Images/BrownBeans.png')} alt="Coffee-Beans" className="footer-main-logo" />
                    </div>
                    <p className="footer-main-col-item">Coffee house</p>
                        <p className="footer-main-col-item">Our coffee</p>
                            <p className="footer-main-col-item">For your pleasure</p>
                </div>
                <div className="footer-main-bottom-lines-container">
                    <div className='footer-main-bottom-lines'></div>
                        <div className="footer-main-bottom-container">
                            <img src={require ('../Images/BlackBeans.png')} alt="Coffee-Beans" className="footer-main-bottom-logo" />
                        </div>
                    <div className='footer-main-bottom-lines'></div>
                </div>
            </div>
        );
    }
}

export default Footer;