import React, { Component } from 'react';
import { withRouter } from 'react-router-class-tools';
import { Link } from "react-router-dom";

class Product extends Component {
    constructor(props){
        super(props);

        this.state = {
            chosenColor: ""
        }
    }

    chosenColorHandler = (e) => {
        if(e.target.className === '') {
           e.target.className = 'checked' 
        } else {
            e.target.className = '' 
        }

        if(e.target.className === 'checked') {
           this.setState(({chosenColor}) => ({
            chosenColor: e.target.style.background
            })) 
        } else {
            this.setState(({chosenColor}) => ({
                chosenColor: ""
            })) 
           
        }
    }

    
  
    render() {
             
        const { item,currentValue } = this.props.location.state;
        const { title, img, desc, attributes } = item;
        const { color } = attributes;

        const price = item.prices.map(item=> {
            if(item.currency === currentValue) {
               return `${item.amount} ${item.currency}`
            }
        })
        const realPrice = price.filter(el => el !== undefined)
        return (
            <div className='product-page'>
                
                <div className="product-image-container">
                    <img src={img} alt={title}/>
                <Link to='/'>    
                <div className="back-arrow">
                    <i className="fa fa-angle-left"></i>
                </div>
                </Link>
                </div>

                <div className="product-item-desc">
                <h2>{title}</h2>
                <p className='description'>{desc}</p>
                <p className='price'>Price: </p>
                <b>{realPrice}</b>
                <div className="atrributes">
                    {color.map((el, i) => {
                        return <div key={i+30} onClick={this.chosenColorHandler}  style={{background: el}}></div>
                    })}
                </div>
                <div className="btn-container">
                   <div>Додати до кошика</div> 
                </div>
                
                </div>

            </div>
        );
    }
}

export default withRouter(Product);