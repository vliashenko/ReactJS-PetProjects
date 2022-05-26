import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Item extends Component {
    render() {
        const {img, desc, prices, title, id} = this.props.item;
        return (
            
            <div className='item'>
                <Link to={`/productPage/${id}`}>
                <img src={img} alt="" />
                <h2>{title}</h2>
                <p>{desc}</p>
                <b>{prices[0].amount + prices[0].currency}</b>
                </Link>
                <div className='add-to-cart' onClick={()=> this.props.onAdd(this.props.item)}>+</div>
            </div>
        );
    }
}

export default Item;