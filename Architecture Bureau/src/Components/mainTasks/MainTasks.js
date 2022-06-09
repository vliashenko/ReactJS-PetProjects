import React, { Component } from 'react';
import "./MainTasks.scss";

class MainTasks extends Component {
    render() {
        return (
            <section className='main-tasks'>
                <h3 className="main-tasks__title">
                    Основні задачі
                </h3>
                <div className="main-tasks__container">
                    <div className="main-tasks__container__col__one">
                        <img src={require ("../../Images/one.png")} alt="" className="main-tasks__container__col__one__image" />
                        <p className="main-tasks__container__col__one__text">
                            Створення комфортних умов та підвищення якості обслуговування клієнтів.
                        </p>
                    </div>
                    <div className="main-tasks__container__col__two">
                        <img src={require ("../../Images/two.png")} alt="" className="main-tasks__container__col__two__image" />
                        <p className="main-tasks__container__col__two__text">
                            Постійно вдосконалювати якість послуг шляхом навчання персоналу, закупівлі нового обладнання та посиленої реклами на ринку.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default MainTasks;