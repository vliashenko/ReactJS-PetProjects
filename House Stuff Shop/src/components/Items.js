import React, { Component } from 'react';
import Item from './Item';

class Items extends Component {
    render() {
        const { items, filteredArr, filterHandler,currentValue, addToOrder, getPrices } = this.props;
        
        return (
            <div>
                <div className="category">
                   {this.props.categories.map((el, i)=> {
                    return <div key={i} onClick={()=> filterHandler(el)}>{el}</div>
                })} 
                </div>
                
            <main>
                {filteredArr.length === 0?items.map(el => (   
                    <Item 
                    item={el} 
                    key={el.id}
                    currentValue={currentValue}
                    addToOrder={addToOrder}
                    getPrices={getPrices}
                    />
                )) :
                filteredArr.map(el => (   
                    <Item 
                    item={el} 
                    key={el.id}
                    currentValue={currentValue}
                    addToOrder={addToOrder}
                    getPrices={getPrices}
                    />
                ))
                }
            </main>
            </div>
        );
    }
}

export default Items;