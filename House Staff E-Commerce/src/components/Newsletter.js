import React, { Component } from 'react';

class Newsletter extends Component {
    render() {
        return (
            <div className='newsletter'>
                <div className="newsletter-content">
                    <h3>Розсилка новин</h3>
                    <p>Підпишіться на розсилку і отримуйте насвіжіші новини про ваш улюбленний сайт!</p>
                    <div className="newsletter-input-container">
                        <input type="text" placeholder='Ваш email' />
                        <button>
                            <i className="fa fa-envelope"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newsletter;