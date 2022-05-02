import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Order from './Order';

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            cartOpen: false,
            currency: "$"
        }
    }

    setCartOpen = () => {
        this.setState(({cartOpen})=> ({
            cartOpen: !cartOpen
        }))
    }

    setCurrency = () => {
        if(this.state.currency === "$" && this.state.cartOpen !==true) {
          this.setState(({currency})=> ({
            currency: "£"
        }))   
        
        } else if(this.state.currency === "£" && this.state.cartOpen !==true){
            this.setState(({currency})=> ({
                currency: "$"
            }))
        }
        
    }

    onClick = () => { 
        this.setCurrency();
       
        setTimeout(() => {
            this.props.getCurrency(this.state.currency); 
        },0)
        
    }

    showOrderes = (ordered,currentValue) => {

      return (
        <div>
            {ordered.map(el=> {
            return <Order key={el.id} item={el} currentValue={currentValue} />
            })}
            <div className='total-sum'>
                Сумма : {this.props.allPrices.reduce((acc,curr) => acc+=curr).toFixed(2) + currentValue}
            </div>
            <div className='order-buttons'>
                <button className='order-btn'>Переглянути товар</button>
                <button className='order-btn'>Завершити покупку</button>
            </div>
        </div>
      )  
    }

    showNothing = () => {
        return (
            <div className='empty'>
                <h2>Товари ще не додані</h2>
            </div>
        )
    }


    render () {
       const { ordered, currentValue } = this.props;
        
        return (
        <header>
            <div>
                <Link to={"/"}>
                <span className="logo">House Staff</span>
                </Link>
                <ul className="nav">
                    <li className='currency'  onClick={this.onClick}>{this.state.currency}</li>
                    <li>Про нас</li>
                    <li>Контакти</li>
                    <li>Кабінет</li>
                </ul>
                <i className={`fa fa-shopping-cart ${this.state.cartOpen && 'active'}`} onClick={this.setCartOpen}>
                    <span className="amount">{ordered.length}</span>
                        </i>
                

                {this.state.cartOpen && (
                    <div className='shop-cart'>
                        {ordered.length > 0 ?
                            this.showOrderes(ordered, currentValue) : this.showNothing()}
                    </div>
                )}
            </div>

            <div className="presentation"></div>
        </header>
    );
    }

    
}

export default Header;