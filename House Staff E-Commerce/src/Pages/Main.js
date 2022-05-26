import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Slider from "../components/Slider";
import Items from "../components/Items";
import Guarantee from "../components/Guarantee";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";

class Main extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
        <div > 
            <Header 
            getCartState={this.props.getCartState} 
            orders={this.props.orders}
            />
            <div className={this.props.cartOpen === true ? "backdropPage" : null}>
            <Categories categoryItems={this.props.categoryItems}/>
            <Slider sliderItems={this.props.sliderItems}/>
            <Guarantee/>
            <Items items={this.props.items} onAdd={this.props.addToOrder}/>
            <Newsletter/>
            <Announcement/>
            <Footer/>
            </div>
        </div>
        );
    }
}

export default Main;