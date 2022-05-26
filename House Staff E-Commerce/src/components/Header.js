import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Order from "./Order";

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            cartOpen: false
        }
    }

    setBackDrop = async () => {
        let res = await !(this.state.cartOpen); 
        if(res) {
            document.body.classList.add("backdropOn");
        } else {
            document.body.classList.remove("backdropOn");
        }
    }

    closeCart = () => {
        this.setState({cartOpen: false})
    }

    setCartopen = (e) => {
        e.stopPropagation();

        this.setState(({cartOpen})=> ({
            cartOpen: !cartOpen
        }))
        
        this.setBackDrop();

        this.props.getCartState(!this.state.cartOpen);
    }


    render() {
        
        return (
            <header>
                <div>
                    <Link to="/">
                    <span className="logo">House Staff</span>
                    </Link>
                    <ul className='nav'>
                        <li>Про нас</li>
                        <li>Контакти</li>
                        <li>Мій кабінет</li>
                    </ul>
                    <i className={`fa-solid fa-cart-shopping ${this.state.cartOpen && 'active'}`} onClick={this.setCartopen}></i>
                
                    {this.state.cartOpen && ( 
                        <div className='shop-cart'>
                            {this.props.orders.length > 0? 
                                this.props.orders.map(el => (
                                    <Order key={el.id} item={el}/>
                                ))
                                :
                                "Товари відсутні!"
                            }
                        </div>
                    )}
                </div>
                <div 
                    style={this.state.cartOpen===true? {opacity: "0.5"} : {opacity: "1"}}
                    className="presentation"></div>
            </header>
        );
    }
}

export default Header;