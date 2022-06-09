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
                    <div className="projects__container__first">
                        <img src={require ("../../Images/project1.jpg")} alt="" className="projects__container__first__img1" />
                        <img src={require ("../../Images/project2.jpeg")} alt="" className="projects__container__first__img2" />
                    </div>
                    <div className="projects__container__second">
                        <img src={require ("../../Images/project2.png")} alt="" className="projects__container__second__img3" />
                        <img src={require ("../../Images/project4.png")} alt="" className="projects__container__second__img4" />
                        <img src={require ("../../Images/project3.png")} alt="" className="projects__container__second__img5" />
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