import React, { Component } from 'react';

class Order extends Component {
    render() {
        const { img, prices, title, desc } = this.props.item;
        return (
            <div className='item'>
                <img src={img} alt="" />
                <h2>{title}</h2>
                <b>{prices[0].amount + prices[0].currency}</b>
            </div>
        );
    }
}

export default Order;