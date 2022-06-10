import React, { Component } from 'react';
import "./Footer.scss"

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className="footer__container">
                    <div className="footer__container__col1">
                        <img src={require ("../../Images/white-logo.png")} alt="" className="footer__container__col1__logo" />
                    </div>

                    <div className="footer__container__col2">
                        <ul className="footer__container__col2__list">
                            <li className="footer__container__col2__list__item_title">
                                Інформація
                            </li>
                            <li className="footer__container__col2__list__item">
                                Головна
                            </li>
                            <li className="footer__container__col2__list__item">
                                Галерея
                            </li>
                            <li className="footer__container__col2__list__item">
                                Проєкти
                            </li>
                            <li className="footer__container__col2__list__item">
                                Контакти
                            </li>
                        </ul>
                    </div>

                    <div className="footer__container__col3">
                        <ul className="footer__container__col3__list">
                            <li className="footer__container__col3__list__item">
                                <img src={require ('../../Images/icon1.png')} alt="" />
                                <p>вул.Віль'ямса 17, м.Київ, Україна</p>
                            </li>
                            <li className="footer__container__col3__list__item">
                                <img src={require ('../../Images/icon2.png')} alt="" />
                               <p>+380-688-485-643</p> 
                            </li>
                            <li className="footer__container__col3__list__item">
                                <img style={{width: "16px", height: "11px"}} src={require ('../../Images/icon3.png')} alt="" />
                               <p>greedisdood1@gmail.com</p> 
                            </li>
                        </ul>
                    </div>

                    <div className="footer__container__col4">
                        <div className="footer__container__col4__list">
                            <p>Соціальні мережі</p>
                            <img src={require ('../../Images/facebook.png')} alt="" />
                            <img src={require ('../../Images/twitter.png')} alt="" />
                            <img src={require ('../../Images/linkedin.png')} alt="" />
                            <img src={require ('../../Images/pinterest.png')} alt="" />
                        </div>
                    </div>
                </div>
                <hr />
                <p className='footer__message'>
                    &copy; Digital Project. All rights reserved.
                </p>
            </footer>
        );
    }
}

export default Footer;