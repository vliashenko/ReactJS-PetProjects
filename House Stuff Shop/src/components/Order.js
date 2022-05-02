import React, { Component } from 'react';

class Order extends Component {
    
    render() {

        const { item, currentValue } = this.props;
        const price = item.prices.map(item=> {
            if(item.currency === currentValue) {
               return (`${item.amount} ${item.currency}`)
            }
        })
        return (
            <div className='order-item'>
                <img src={this.props.item.img} alt=""/>
                <h2>{this.props.item.title}</h2>
                <b data-price={price}>{price}</b>
            </div>
        );
    }
}

export default Order;