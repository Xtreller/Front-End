import React, { Component } from 'react';
import '../../style/Carousel.css'
import leftarrow from '../../img/left-arrow.png'

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageidx: 0,
            images: []
        }
    }

    changeImage(id) {
        const maxcnt = this.props.images.length
        if (this.state.imageidx + id > maxcnt) {
            this.setState(({ imageidx: this.props.images.length - 3 }))
        }
        if (this.state.imageidx - id <= 0) {
            this.setState(({ imageidx: 0 }))
        }
        else {
            this.setState(({ imageidx: this.props.images.length - 3 }))
        }

    }
    componentDidMount = () => this.setState({ images: this.props.images })

    render() {
        if (this.props.images) {
            return (
                <div className="slider">,
                    {this.props.images.length > 3 ? <img
                        className="arrow-btn-previous"
                        src={leftarrow}
                        title="previous"
                        alt="nav"
                        onClick={() => this.changeImage(this.state.imageidx - 1)}

                    /> : ""
                    }
                    <div className="image-container">
                        {this.props.images.slice(this.state.imageidx, this.state.imageidx + 3).map((image, indx) => <img key={indx} src={image} className="slider-image" alt="episode" />)}
                    </div>
                    {this.props.images.length > 3 ? <img
                        className="arrow-btn-next"
                        src={leftarrow}
                        title="previous"
                        alt="nav"
                        onClick={() => this.changeImage(this.state.imageidx + 1)}
                    /> : ""
                    }
                </div>
            )
        }
        else{
            return 'Loading...'
        }
    }
}