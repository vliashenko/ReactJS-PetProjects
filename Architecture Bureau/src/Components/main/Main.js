import React, { Component } from 'react';
import "./Main.scss";

class Main extends Component {

    state = {
        slideIndex: 0
    }

    handleClick = (direction) => {
        if(direction === "up") {
           if(this.state.slideIndex > 0) {
               this.setState({slideIndex: this.state.slideIndex - 1})
           } else {
            this.setState({slideIndex: 1})
           }
        } else {
            if(this.state.slideIndex < 1) {
                this.setState({slideIndex: this.state.slideIndex + 1})
            } else {
             this.setState({slideIndex: 0})
            }
        }
    }

    changeSlide = () => {
        let imgStyle = {"transform" : "translateY(0)"}
        if(this.state.slideIndex === 1) {
           return imgStyle = {"transform" : "translateY(-830px)"}
        } else {
           return imgStyle
        }
    }

    render() {
        return (
            <main className='main'>
                <div className="main__col__one">
                    <div className="main__col__one__title">
                        <p className="main__col__one__title__first">
                            DIGITAL
                        </p>
                        <p className="main__col__one__title__second">
                            PROJECT
                        </p>
                    </div>
                    <div className="main__col__one__buttons">
                        <div onClick={() =>this.handleClick("up")} className="main__col__one__button">
                            <img src={require ("../../Images/vector-left.png")} alt="" className="main__col__one__button__image" />
                        </div>
                        <div onClick={() =>this.handleClick("down")} className="main__col__one__button">
                            <img src={require ("../../Images/vector-right.png")} alt="" className="main__col__one__button__image" />
                        </div>
                    </div>
                </div>
                <div className="main__col__two">
                    <div className="main__col__two__container">
                    <div className="main__col__two__wrapper">
                        <div style={this.changeSlide()} className="main__col__two__image__container">
                            <img src={require ("../../Images/main-photo1.png")} alt="" className="main__col__two__image" />
                            <button  className="main__col__two__button">
                                Дізнатись більше
                                <img src={require ("../../Images/vector-right.png")} alt="" className="main__col__two__button__vector" />
                            </button>
                        </div>
                        
                        <div style={this.changeSlide()} className="main__col__two__image__container">
                            <img src={require ("../../Images/main-photo2.png")} alt="" className="main__col__two__image" />
                            <button className="main__col__two__button">
                                Дізнатись більше
                                <img src={require ("../../Images/vector-right.png")} alt="" className="main__col__two__button__vector" />
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;