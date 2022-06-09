import React, { Component } from 'react';
import "./Header.scss"

class Header extends Component {

    state = {
        categories: [
            "Головна",
            "Галерея",
            "Проєкти",
            "Сертифікати",
            "Контакти"
        ],
        chosenCategory: JSON.parse(localStorage.getItem('category')) || "Головна"
    }

    setCategory = (category) => {
        this.setState({
        chosenCategory: category
        },() => {
        localStorage.setItem('category', JSON.stringify(this.state.chosenCategory))
        });
    }

    renderItems = () => {
        return this.state.categories.map((item,i) => {
            let itemName = "header__navbar__item";
            if(this.state.chosenCategory === item) {
                itemName = "header__navbar__item__focus"
            }

            return (
                <li 
                    key={i} 
                    category={item} 
                    className={itemName}
                    onClick={() => this.setCategory(item)}>
                    {item}
                </li>
            )
        })
    }

    render() {
        return (
            <header className='header'>
                <div className="header__logo__container">
                    <img src={require ("../../Images/logo.png")} alt="" className="header__logo" />
                </div>

                <div className="header__navbar__container">
                    <ul className="header__navbar__list">
                        {this.renderItems()}
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;