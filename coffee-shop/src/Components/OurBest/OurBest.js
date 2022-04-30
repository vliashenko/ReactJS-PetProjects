import React, { Component } from 'react';
import '../Styles/OurBest.css'

class OurBest extends Component {
    render() {
        return (
            <div className='ourBest-main-container'>
                <img src={require ("../Images/OurBest.png")} alt="" className="ourBest-main-background" />
            </div>
        );
    }
}

export default OurBest;