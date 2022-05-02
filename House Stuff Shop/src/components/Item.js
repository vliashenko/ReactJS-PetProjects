import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Item extends Component {   

    onClickHandler = (price,item) => {
        let priceWithoutSymbol = price.slice(0,-1)
        this.props.getPrices(priceWithoutSymbol);
        this.props.addToOrder(item);
    }

    render() {
        const { item, currentValue, addToOrder } = this.props;
        
        const price = item.prices.map(item=> {
            if(item.currency === currentValue) {
               return (`${item.amount} ${item.currency}`)
            }
        })

        const filtered = price.filter(el => el !== undefined);
        const [ realPrice ]  = filtered;
        
        return (
            <div className='item'>
            <Link to='/product' state={{item, currentValue}}>
                <img src={this.props.item.img} alt=""/>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{realPrice}</b>
            </Link>
                <div className='add-to-cart' onClick={() => this.onClickHandler(realPrice,item)}>+</div>
            </div>  
        );
    }
}

export default Item;