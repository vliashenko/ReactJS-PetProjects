import React, { Component } from 'react';
import "./Projects.scss";

class Projects extends Component {
    render() {
        return (
            <section className='projects'>
                <h3 className="projects__title">
                    Наші Проєкти
                </h3>
                <div className="projects__container">
                    <div className="projects__container__first_col">
                        <div className="projects__container__first_col__image">
                            <img src={require ("../../Images/project1.jpg")} alt="" className="projects__container__first_col__img" />
                            <div className="projects__container__first_col__image__content">
                                <p className="projects__container__first_col__img__text">
                                    Центр дозвілля
                                </p>
                                <button className="projects__container__first_col__img__button">
                                    Детальніше
                                    <img src={require ("../../Images/white-vector.png")} alt="" className="projects__container__first_col__img__button__vector" />
                                </button>
                            </div>
                        </div>
                        <div className="projects__container__first_col__image">
                            <img src={require ("../../Images/project2.jpeg")} alt="" className="projects__container__first_col__img" />
                            <div className="projects__container__first_col__image__content">
                                <p className="projects__container__first_col__img__text">
                                    Бізнес-центр
                                </p>
                                <button className="projects__container__first_col__img__button">
                                    Детальніше
                                    <img src={require ("../../Images/white-vector.png")} alt="" className="projects__container__first_col__img__button__vector" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="projects__container__second_col">
                            <div className="projects__container__second_col__image">
                                <img src={require ("../../Images/project5.png")} alt="" className="projects__container__second_col__img" />
                                <div className="projects__container__second_col__image__content">
                                    <p className="projects__container__second_col__img__text">
                                        Виставковий центр
                                    </p>
                                    <button className="projects__container__second_col__img__button">
                                        Детальніше
                                        <img src={require ("../../Images/white-vector.png")} alt="" className="projects__container__first_col__img__button__vector" />
                                    </button>
                                </div>
                            </div>
                            <div className="projects__container__second_col__image">
                                <img src={require ("../../Images/project3.png")} alt="" className="projects__container__second_col__img" />
                                <div className="projects__container__second_col__image__content">
                                    <p className="projects__container__second_col__img__text">
                                        Житлові будівлі
                                    </p>
                                    <button className="projects__container__second_col__img__button">
                                        Детальніше
                                        <img src={require ("../../Images/white-vector.png")} alt="" className="projects__container__first_col__img__button__vector" />
                                    </button>
                                </div>
                            </div>
                            <div className="projects__container__second_col__image">
                                <img src={require ("../../Images/project4.png")} alt="" className="projects__container__second_col__img" />
                                <div className="projects__container__second_col__image__content">
                                    <p className="projects__container__second_col__img__text">
                                        Майданчики
                                    </p>
                                    <button className="projects__container__second_col__img__button">
                                        Детальніше
                                        <img src={require ("../../Images/white-vector.png")} alt="" className="projects__container__first_col__img__button__vector" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    <button className="projects__button">
                        Всі Проєкти
                        <img src={require ("../../Images/white-vector.png")} alt="" className="projects__button__vector" />
                    </button>
                </div>
            </section>
        );
    }
}

export default Projects;