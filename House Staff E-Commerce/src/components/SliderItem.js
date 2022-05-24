import React, { Component } from 'react';

class SliderItem extends Component {
    render() {
        const { title, desc, img, link } = this.props.items;
        return (
        <div 
            className="slide">
            <div className="slide-image-container">
                <img className='slide-image' src={img} alt="" />
            </div>
            <div className="slide-info">
                <b>{title}</b>
                <p>{desc}</p>
                <h2>{link}</h2>
            </div>
        </div>
        );
    }
}

export default SliderItem;