import React, { Component, useEffect, useState } from 'react';
import '../../style/Carousel.css'
import arrow from '../../img/left-arrow.png'
import 'react-transition-group'; // ES6
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Slider = props => {

    const [images, setImages] = useState([]);
    const [imageidx, setImageIdx] = useState(0);

    useEffect(() => {
        setImages(props.images);
    })
    const changeImage = id => {
        const maxcnt = images.length
        console.log(id)
        if (imageidx + id > maxcnt) {
            setImageIdx(maxcnt - 3)
        }
        if (imageidx - id <= 0) {
            setImageIdx(0)
        }
        else {
            setImageIdx(maxcnt - 3)
        }

    }

    if (images) {
        return (
            <div className="slider">,
                {images.length > 3 ? <img
                    className="arrow-btn-previous"
                    src={arrow}
                    title="previous"
                    alt="nav"
                    onClick={() => changeImage(imageidx + 1)}
                /> : ""
                }
                <div className="image-container">
                    {images.slice(imageidx, imageidx + 3).map((image, indx) =>
                        <img src={image} className="slider-image" alt="episode" />

                    )}
                </div>
                {
                    images.length > 3 ? <img
                        className="arrow-btn-next"
                        src={arrow}
                        title="previous"
                        alt="nav"
                        onClick={() => changeImage(imageidx - 1)}
                    /> : ""
                }
            </div >
        )
    }
    else {
        return 'Loading...'
    }

}
export default Slider;