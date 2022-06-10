import React, { Component } from 'react';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import Project from '../Components/project/Project';

class ProjectPage extends Component {

    state = {
        projects: [
            {
                id: 1,
                name: "Котеджний будинок",
                src: "https://www.rsarchitecture-studio.com/wp-content/uploads/2017/06/Image-Architectural-Design-Services-6.jpg",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                id: 2,
                name: "Бізнес-центр",
                src: "https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1603015025/content-items/006/021/104/070514_13.31.10-original.jpg?1603015025",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                id: 3,
                name: "Житловий корпус",
                src: "https://i.ytimg.com/vi/Vi5Z_W6zWT8/maxresdefault.jpg",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                id: 4,
                name: "Готель",
                src: "https://l-e-a-d.pro/wp-content/uploads/2019/09/SESC_00-655x409.jpg",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                id: 5,
                name: "Офісний центр",
                src: "https://holmesglen.edu.au/Holmesglen/media/ArticleImages/Building-Design-model.jpg",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
        ]
    }

    render() {
        return (
            <div>
                <Header/>
                <Project projects={this.state.projects}/>
                <Footer/>
            </div>
        );
    }
}

export default ProjectPage;