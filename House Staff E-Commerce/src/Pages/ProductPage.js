import React, { Component } from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import { useParams, Link } from "react-router-dom";

class ProductPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            attributes: [],
            color: []
        }
    }

    getColor = (color) => {
        this.setState({color})
    }

    showAttributes = (el) => {
       let color = el.attributes.filter(item => item.color);
       let others = el.attributes.filter(item => !item.color);

        let otherRes = others.map((item,i) => {
            let res = item[Object.keys(item)[0]];
            return (
                <div key={i} className="attributes">
                    {res.map((element,int) => {
                        return (
                            <div  key={int+21} className="attribute-item">
                                {element}
                            </div>
                        )
                    })}
                </div>
            )
        })

        let colorRes = color.map(item => {
            let res = item[Object.keys(item)[0]];
            return res.map((element,i) => {
                return (
                    <div onClick={() => this.getColor(element)} key={i} className={this.state.color === element? "attribute-color-item checked-color" : "attribute-color-item"} style={{background: `${element}`}}></div> 
                )
            })
        })

       return (
           <div>
                    {otherRes}
                <div  className="attributes-color">
                    {colorRes}
                </div>
           </div>
       )
    }

    showProduct = (id) => {
        let product = this.props.items.map(el=> {
            if(el.id === id){
                return (
                    <div key={el.id} className="product-page">
                        <div className="product-image-container">
                            <img src={el.img} alt="" />
                            <Link to="/">
                                <div className="back-arrow">
                                    <i className="fa-solid fa-angle-left"></i>
                                </div>
                            </Link>
                        </div>
                        <div className="product-item-desc">
                            <h2 className="product-title">
                                {el.title}
                            </h2>
                            <div className="desc">
                                {el.desc}
                            </div>
                            <div className="price">
                                Ціна: {el.prices[0].amount + el.prices[0].currency}
                            </div>
                            {this.showAttributes(el)}
                            <div className="btn-container">
                                <div>
                                    Додати
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
        return product
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const { id } = this.props.params;

        return (
            <div>
                <Header
                    getCartState={this.props.getCartState} 
                    orders={this.props.orders}
                />
                <div className={this.props.cartOpen === true ? "backdropPage" : null}>
                    {this.showProduct(id)}
                    <Newsletter/>
                    <Announcement/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default (props) => (
    <ProductPage
        {...props}
        params={useParams()}
    />
);