import React, { Component } from 'react';
import "./AboutUs.scss";

class AboutUs extends Component {
    render() {
        return (
            <section className='about-us'>
                <div className="about-us__col__one">
                    <div className="about-us__col__one__first__container">
                        <img src={require ("../../Images/about-us2.png")} alt="" className="about-us__col__one__first__container_img1" />
                        <img src={require ("../../Images/about-us3.png")} alt="" className="about-us__col__one__first__container_img2" />
                    </div>
                    <div className="about-us__col__one__second__container">
                    <img src={require ("../../Images/about-us1.jpg")} alt="" className="about-us__col__one__second__container_img3" />
                    </div>
                </div>
                <div className="about-us__col__two">
                    <h3 className="about-us__col__two__title">
                        Про Нас
                    </h3>
                    <p className="about-us__col__two__text">
                    Ми давно зрозуміли головне - проектний склад фахівців визначає 50%
                    якісного і швидкого будівництва вашого будинку за проектом. Наші
                    проектувальники завжди зацікавлені в кінцевому результаті - будівництві
                    будинку, а не просто завершеного проекту на папері. Якість проектної
                    документації визначає дуже багато. Це кількість опрацьованих варіантів
                    планування, облаштування, конструктивних матеріалів, - економічно
                    вигідних для даної місцевості, умов та вимог. Правильно тільки
                    наступне - проектувальники ведуть будівництво і відповідають 
                    за нього, контролюють етапи, вносять корективи, якщо необхідно.
                    </p>
                    <button className="about-us__col__two__button">
                        Читати
                        <img src={require ("../../Images/vector-right.png")} alt="" className="about-us__col__two__button__vector" />
                    </button>
                </div>
            </section>
        );
    }
}

export default AboutUs;