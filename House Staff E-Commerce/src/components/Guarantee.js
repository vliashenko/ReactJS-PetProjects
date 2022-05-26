import React, { Component } from 'react';

class Guarantee extends Component {
    render() {
        return (
            <>
            <hr/>
            <div className='guarantee'>
                    <div className="guarantee-item">
                        <div className="guarantee-icon">
                            <i className="fa fa-lock"></i>
                        </div>
                        <div className="guarantee-content">
                            <p className="guarantee-title">Гарантія якості</p>
                            <p className="guarantee-text">Ми обираємо тільки найкращих виробників меблів і декору</p>
                            <p className="guarantee-link">ДІЗНАТИСЯ БІЛЬШЕ</p>
                        </div>
                    </div>
                    <div className="guarantee-item">
                        <div className="guarantee-icon">
                            <i className="fa fa-truck"></i>
                        </div>
                        <div className="guarantee-content">
                            <p className="guarantee-title">Доставка по Україні</p>
                            <p className="guarantee-text">Доставляємо по всій Україні тільки надійними перевізниками</p>
                            <p className="guarantee-link">ДІЗНАТИСЯ БІЛЬШЕ</p>
                        </div>
                    </div>
                    <div className="guarantee-item">
                        <div className="guarantee-icon">
                            <i className="fa fa-thumbs-o-up"></i>
                        </div>
                        <div className="guarantee-content">
                            <p className="guarantee-title">Відмінний сервіс</p>
                            <p className="guarantee-text">Ми дуже хочемо бачити Вас постійним клієнтом</p>
                            <p className="guarantee-link">ДІЗНАТИСЯ БІЛЬШЕ</p>
                        </div>
                    </div>  
                </div>
                <hr/>
                </>
        );
    }
}

export default Guarantee;