import React, { Component } from 'react';
import "./GalleryItem.scss"

class GalleryItem extends Component {
    render() {
        return (
            <div className='gallery__item'>
                <a href={this.props.url}>
                    <img src={this.props.src} alt="" className="gallery__item__img" />
                </a>
            </div>
        );
    }
}

export default GalleryItem;