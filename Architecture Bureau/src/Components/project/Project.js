import React, { Component } from 'react';
import "./Project.scss"

class Project extends Component {

    showItems = () => {
        return this.props.projects.map((item) => {
            return (
                <div 
                    key={item.id}
                    className='project__item'>
                        <div className="project__item__image">
                            <img src={item.src} alt="" className="project__item__image__img" />
                        </div>
                        <div className="project__item__desc">
                            <h3 className="project__item__desc__title">
                                {item.name}
                            </h3>
                            <p className="project__item__desc__text">
                                {item.description}
                            </p>
                            <button className="project__item__desc__button">
                                Переглянути
                                <img src={require ("../../Images/vector-right.png")} alt="" className="project__item__desc__button__vector" />
                            </button>
                        </div>
                </div>
            )
        })
    }

    render() {
        return (
            <section className='project'>
                <div className="project__title">
                    <p className="project__title__content1">
                        Наші
                    </p>
                    <p className="project__title__content2">
                        Проєкти
                    </p>
                </div>
                <div className="project__container">
                    {this.showItems()}
                </div>
            </section>
        );
    }
}

export default Project;