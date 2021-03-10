import React, { Component } from "react";
import { Link } from "react-router-dom";
import calcTime from "../../tools/calulateTime";


export default class Post extends Component {
    constructor(props) {
        super(props)
    }
    showTime() {
        if (this.props._kmd) {
            return calcTime(this.props._kmd.ect)
        }
    }
    showControls() {
        if (!window.location.href.includes('details')) {
            return (
                <div className="controls">
                    <ul>
                        <li className="action"><Link to={`details/${this.props._id}`}>details</Link></li>
                    </ul>
                </div>)
        }
        else {
            return (
                <div className="controls">
                    <ul>
                        <li className="action"><Link to={`/edit/${this.props.match.params.postid}`}>edit</Link></li>
                        <li className="action"><Link to={`/delete/${this.props.match.params.postid}`}>delete</Link></li>
                    </ul>
                </div>

            )
        }
    }

    render() {
        return (
            <div className="posts">
                <article className="post">
                    <div className="col rank">
                        <span>{this.props.index + 1}</span>
                    </div>
                    <div className="col thumbnail">
                        <a href="">
                            <img src='seen-it\src\logo.svg' />
                        </a>
                    </div>
                    <div className="post-content">
                        <div className="title">
                            <a href={this.props.url}>
                                {this.props.title}
                            </a>
                        </div>
                        <div className="details">
                            <div className="info">
                                {this.showTime()}
                            </div>
                        </div>
                        {this.showControls()}
                    </div>

                </article>
            </div>

        )
    }
}