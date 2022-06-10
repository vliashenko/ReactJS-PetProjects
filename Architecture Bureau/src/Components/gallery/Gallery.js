import React, { Component } from 'react';
import imageService from '../../services/imageService';
import GalleryItem from '../galleryItem/GalleryItem';
import Spinner from '../spinner/Spinner';
import "./Gallery.scss"

class Gallery extends Component {

    state = {
        images: [],
        loading: true,
        newImagesLoading: false,
        offset: 0
    }

    service = new imageService();

    showList = () => {
       return this.state.images.map(item => {
            return (
                <GalleryItem key={item.id} url={item.url} src={item.src.large}/>
            )
       })
    }

    onRequest = (offset) => {
        this.onImageListLoading();
        this.service
            .getImages(offset)
            .then(this.onImageListLoaded)
            .then(() => this.setState({loading: false}))
            .catch(error => console.log(error))
    }

    onImageListLoaded = (newImages) => {
        this.setState(({offset,images}) => ({
            images: [...newImages],
            loading: false,
            newItemLoading: false,
            offset: offset + 10,
        }))
    }

    onImageListLoading = () => {
        this.setState({
            newImagesLoading: true
        })
    }

    componentDidMount() {
        this.onRequest()
    }

    render() {
        const spinner = this.state.loading ? <Spinner/> : this.showList();

        return (
            <section className='gallery'>
                <div className="gallery__title">
                    <p className="gallery__title__content1">
                        Галерея
                    </p>
                    <p className="gallery__title__content2">
                        Фотографій
                    </p>
                </div>

                <div className="gallery__container">
                    {spinner}
                </div>

                <div className="gallery__button__container">
                    <button 
                        className="gallery__button"
                        style={this.state.newImagesLoading ? {opacity: "0.5"} : {opacity: "1"}}
                        onClick={() => this.onRequest(this.state.offset)}
                        disabled={this.state.newImageLoading}>
                        Завантажити більше
                    </button>
                </div>
            </section>
        );
    }
}

export default Gallery;