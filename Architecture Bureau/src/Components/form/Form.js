import React, { Component } from 'react';
import "./Form.scss"

class Form extends Component {
    render() {
        return (
            <section className='form'>
                <h3 className="form__title">
                    Зв'язатись з нами
                </h3>
                <form action="#" className="form__container">
                    <div className="form__container__wrapper">
                        <div className="form__container__fields">
                            <input type="text" className="form__container__field" placeholder="Ім'я" />
                            <input type="text" className="form__container__field" placeholder="Номер телефону*" />
                            <input type="text" className="form__container__field" placeholder="E-mail*" />
                            <input type="text" className="form__container__field" placeholder="Послуга, що цікавить*" />
                            <textarea className="form__container__field_text" placeholder='Повідомлення*' />
                        </div>

                        <div className="form__container__image">
                            <img src={require ("../../Images/form.png")} alt="" className="form__container__img" />
                        </div>
                    </div>
                    <p className="form__message">
                        Відправляючи форму Ви даєте згоду на обробку персональний данних згідно з нашою політикою конфеденціальності
                    </p>
                    <button className="form__button">
                        Надіслати
                        <img src={require ("../../Images/white-vector.png")} alt="" className="projects__button__vector" />
                    </button>
                </form>
            </section>
        );
    }
}

export default Form;