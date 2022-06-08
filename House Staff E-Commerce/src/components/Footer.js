import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <>

            <footer>
                <div className="footer-left">
                    <h1>House Staff</h1>
                        <div className="footer-left-desc">
                        House Staff - сервіс, який полягає в комплексному підході 
                        - це магазин меблів, освітлення, текстилю та декору, 
                        а також ідеї для Вашого інтер'єру і консультації від 
                        наших дизайнерів в подарунок.Створіть разом з нами оселю, 
                        в яку завжди так приємно повертатися.
                        </div>
                            <div className="footer-left-social">
                                <div className="footer-left-icon facebook">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </div>
                                <div className="footer-left-icon instagram">
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                                <div className="footer-left-icon linkedin">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </div>
                                <div className="footer-left-icon github">
                                    <i className="fa-brands fa-github-alt"></i>
                                </div>
                            </div>
                </div>
                <div className="footer-center">
                    <h3 className="footer-center-title">
                        Корисні посилання
                    </h3>
                        <ul className="footer-center-list">
                            <li className="footer-center-listitem">
                                Головна
                            </li>
                            <li className="footer-center-listitem">
                                Кошик
                            </li>
                            <li className="footer-center-listitem">
                                Категорії
                            </li>
                            <li className="footer-center-listitem">
                                Про нас
                            </li>
                            <li className="footer-center-listitem">
                                Мій кабінет
                            </li>
                        </ul>
                </div>
                <div className="footer-right">
                    <h3 className="footer-right-title">
                        Контакти
                    </h3>
                        <div className="footer-right-contactitem">
                            <i className="fa-solid fa-location-dot"></i>
                            <p className='contact-text'>15 Viliamsa str, Kyiv Ukraine. </p>
                        </div>
                        <div className="footer-right-contactitem">
                            <i className="fa-solid fa-mobile-screen"></i>
                            <p className='contact-text'>+380688485643 </p>
                        </div>
                        <div className="footer-right-contactitem">
                            <i className="fa-solid fa-at"></i>
                            <p className='contact-text'>greedisdood1@gmail.com  </p>
                        </div>
                </div>
            </footer>
                <div className="rights">
                    Всі права захищені &copy;
                </div>
            </>
        );
    }
}

export default Footer;
