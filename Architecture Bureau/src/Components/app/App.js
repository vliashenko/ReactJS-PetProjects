import React, { Component } from 'react';
import MainPage from '../../Pages/MainPage';
import GalleryPage from "../../Pages/GalleryPage";
import ProjectPage from '../../Pages/ProjectPage';


class App extends Component {

    render() {
        return (
            <div>
               <ProjectPage/>
            </div>
        );
    }
}

export default App;