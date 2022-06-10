import React, { Component } from 'react';
import Header from '../Components/header/Header';
import Main from '../Components/main/Main';
import AboutUs from '../Components/about-us/AboutUs';
import MainTasks from '../Components/mainTasks/MainTasks';
import Projects from '../Components/projects/Projects';
import Form from '../Components/form/Form';
import Footer from '../Components/footer/Footer';

class MainPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <AboutUs/>
                <MainTasks/>
                <Projects/>
                <Form/>
                <Footer/>
            </div>
        );
    }
}

export default MainPage;