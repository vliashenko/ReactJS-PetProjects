import React, { Component } from 'react';
import Category from './Category';

class Categories extends Component {

    showCategories = () => {
        return this.props.categoryItems.map(el => {
            return (
                <Category key={el.id} item={el}/>
            )
        })
    }

    render() {
        return (
            <section>
                {this.showCategories()}
            </section>
        );
    }
}

export default Categories;