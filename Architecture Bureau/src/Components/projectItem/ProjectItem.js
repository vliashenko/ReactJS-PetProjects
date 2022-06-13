import React, { Component } from 'react';
import "./projectItem.scss";

class projectItem extends Component {
    render() {
        return (
            <div className='projectItem'>
                <div className="projectItem__title">
                    <p className="projectItem__title__content1">
                        Паркінг
                    </p>
                    <p className="projectItem__title__content2">
                        500 Авто
                    </p>
                </div>

                <div className="projectItem__container">
                    <div className="projectItem__container__first">
                        <img src={require ("../../Images/project3.png")} alt="" className="projectItem__container__first__img" />
                    </div>

                    <div className="projectItem__container__second">
                        <img src={require ("../../Images/project4.png")} alt="" className="projectItem__container__second__img" />
                        <p className="projectItem__container__second__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries, but also the 
                            leap into electronic typesetting, remaining essentially unchanged. It was 
                            popularised in the 1960s with the release of Letraset sheets containing 
                            Lorem Ipsum passages, and more recently with desktop publishing software 
                            like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is 
                            simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                            has been the industry's standard dummy text ever since the 1500s, when 
                            an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries, but also 
                            the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets 
                            containing Lorem Ipsum passages, and more recently with desktop publishing 
                            software like Aldus PageMaker including versions of Lorem Ipsum. Lorem 
                            Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                            Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries, but also the 
                            leap into electronic typesetting, remaining essentially unchanged. It was 
                            popularised in the 1960s with the release of Letraset sheets containing 
                            Lorem Ipsum passages, and more recently with.
                        </p>
                    </div>

                    <div className="projectItem__container__third">
                        <img src={require ("../../Images/project4.png")} alt="" className="projectItem__container__third__img" />
                    </div>
                </div>
            </div>
        );
    }
}

export default projectItem;