import React, { Component } from 'react';
import Item from './Item';

class Items extends Component {

    showCatalog = () => {
        return this.props.items.map(el => {
            return (
                <Item 
                    key={el.id} 
                    item={el}
                    onAdd={this.props.onAdd}/>
            )
        })
    }

    render() {
        return (
            <main>
               {this.showCatalog()}
            </main>
        );
    }
}

export default Items;