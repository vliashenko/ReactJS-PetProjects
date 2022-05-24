import React, { Component } from 'react';
import SliderItem from './SliderItem';

class Slider extends Component {
    constructor(props){
        super(props);

        this.state = {
            slideIndex: 0
        }
    }

    showSlideImages = () => {
        return this.props.sliderItems.map(el => {
            return (
                <SliderItem 
                    key={el.id} 
                    items={el}/>
            )
        })
    }

    setClassName = () => {
        let classname = "slide";
        if(this.state.slideIndex === 1){
            classname = "slide1"
        } else if(this.state.slideIndex === 2){
            classname = "slide2" 
        } else{
            classname = "slide"
        }

        return classname
    }

    handleClickLeft = () => {
        if(this.state.slideIndex > 0){
            this.setState({slideIndex: this.state.slideIndex - 1})
        } else {
            this.setState({slideIndex: 2})
        }
    } 

    handleClickRight = () => {
        if(this.state.slideIndex < 2){
            this.setState({slideIndex: this.state.slideIndex + 1})
        } else {
            this.setState({slideIndex: 0})
        }
    }
    
    render() {
        
        return (
            <div className='slider-container'>
                <div className="arrow-left" direction="left" onClick={this.handleClickLeft}>
                    <img src={require ("../img/vector-left.png")} alt="" />
                </div>
                <div className="slider-wrapper">
                {this.props.sliderItems.map(el => {
                    return (
                    <div className={this.setClassName()} key={el.id}>
                        <div className="slide-image-container">
                            <img className='slide-image' src={el.img} alt="" />
                        </div>
                        <div className="slide-info">
                            <b>{el.title}</b>
                            <p>{el.desc}</p>
                            <h2>{el.link}</h2>
                        </div>
                    </div>
                    )
                })}
                </div>
                <div className="arrow-right" direction="right" onClick={this.handleClickRight}>
                <img src={require ("../img/vector-right.png")} alt="" />
                </div>
            </div>
        );
    }
}

export default Slider;