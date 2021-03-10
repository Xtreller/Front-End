import React, { Component } from "react";
import { Link } from "react-router-dom";
import calcTime from "../../tools/calulateTime";


export default class Post extends Component {

    showTime() {
        if (this.props._kmd) {
            return calcTime(this.props._kmd.ect)
        }
    }
    showIndex() {
        if (this.props.index) {
            return (
                <div className="col rank">
                    <span>{this.props.index + 1}</span>
                </div>)
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
                        <li className="action"><Link to={{ pathname: `/edit/${this.props.match.params.postid}`, post: { ...this.props } }} > edit</Link></li>
                        <li className="action"><Link to={`/delete/${this.props.match.params.postid}`}>delete</Link></li>
                    </ul>
                    {this.props.details}
                </div>

            )
        }
    }
   

    render() {
        return (
            <div className="posts">
                <article className="post">
                    {this.showIndex()}
                    <div className="col thumbnail">
                        <a href={this.props.url}>
                            <img src={this.props.image} />
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
                    </div>
                        {this.showControls()}

                </article>
            </div>

        )
    }
}