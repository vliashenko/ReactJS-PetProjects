import React, { Component } from 'react';
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import Gallery from '../Components/gallery/Gallery';


class GalleryPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Gallery/>
                <Footer/>
            </div>
        );
    }
}

export default GalleryPage;