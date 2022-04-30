import React, { Component } from 'react';
import '../Styles/HeaderMain.css'

class HeaderMain extends Component {
    render() {
        return (
            <header className='header-main-container'>
                <div className="header-main-col">
                    <div className="header-main-logo">
                    <img src={require ('../Images/CoffeBeans.png')} alt="Header-Logo" className="header-logo" />
                    </div>
                    <p className="header-main-col-item">Coffee house</p>
                    <p className="header-main-col-item">Our coffee</p>
                    <p className="header-main-col-item">For your pleasure</p>
                </div>

                <div className="header-main-title">
                    <p className="header-main-title-content">Everything You Love About Coffee</p>
                    
                    <div className="title-lines-logo">
                        <div className='title-lines'></div>
                        <div className="title-logo-container">
                        <img src={require ('../Images/CoffeBeans.png')} alt="Coffee-Beans" className="title-logo" />
                        </div>
                        <div className='title-lines'></div>
                    </div>

                    <p className="header-main-subtitle-first">We makes every day full of energy and taste</p>
                    <p className="header-main-subtitle-second">Want to try our beans?</p>

                    <button className='header-main-button'>Learn more</button>
                </div>

                <img className='header-main-background' src={require ('../Images/HeaderMain.png')} alt="Main-Background" />
            </header>
        );
    }
}

export default HeaderMain;