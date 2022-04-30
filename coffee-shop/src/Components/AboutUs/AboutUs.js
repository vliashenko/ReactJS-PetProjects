import React, { Component } from 'react';
import '../Styles/AboutUs.css'

class AboutUs extends Component {
    render() {
        return (
            <div className='aboutUs-main-container'>
                <div className="aboutUs-main-title">
                    <p className="aboutUs-main-title-content">About Us</p>
                </div>
                <div className="aboutUs-main-logo-container">
                <div className='aboutUs-main-lines'></div>
                    <div className="aboutUs-logo-container">
                    <img src={require ('../Images/BlackBeans.png')} alt="Coffee-Beans" className="aboutUs-logo" />
                    </div>
                    <div className='aboutUs-main-lines'></div>
                </div>
                <div className="aboutUs-main-text-container">
                    <p className="aboutUs-main-text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                        <br/>
                        <br/>
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutUs;