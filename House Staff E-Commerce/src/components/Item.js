import React, { Component } from 'react';

class Item extends Component {
    render() {
        const {img, desc, prices, title} = this.props.item;
        return (
            <div className='item'>
                <img src={img} alt="" />
                <h2>{title}</h2>
                <p>{desc}</p>
                <b>{prices[0].amount + prices[0].currency}</b>
                <div className='add-to-cart' onClick={()=> this.props.onAdd(this.props.item)}>+</div>
            </div>
        );
    }
}

export default Item;