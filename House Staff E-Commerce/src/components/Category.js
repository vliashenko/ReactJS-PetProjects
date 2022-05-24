import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <div className='category-item'>
                <div className="category-item-container">
                    <img src={this.props.item.img} alt="" />
                </div>
                <div className="content-container">
                    <h3>{this.props.item.title}</h3>
                    <p>
                        {this.props.item.desc}
                        <span>{this.props.item.link}</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Category;