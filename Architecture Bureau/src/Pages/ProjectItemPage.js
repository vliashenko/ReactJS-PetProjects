import React, { Component } from 'react';
import Header from "../Components/header/Header";
import ProjectItem from "../Components/projectItem/ProjectItem"
import Footer from "../Components/footer/Footer";

class ProjectItemPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ProjectItem/>
                <Footer/>
            </div>
        );
    }
}

export default ProjectItemPage;