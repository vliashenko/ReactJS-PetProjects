import React, { Component } from 'react';
import MainPage from '../../Pages/MainPage';
import GalleryPage from "../../Pages/GalleryPage";
import ProjectPage from '../../Pages/ProjectPage';
import ProjectItemPage from '../../Pages/ProjectItemPage';


class App extends Component {

    render() {
        return (
            <div>
               <ProjectItemPage/>
            </div>
        );
    }
}

export default App;