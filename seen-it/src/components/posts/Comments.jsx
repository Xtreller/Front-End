import { post } from "jquery";
import React, { Component } from "react";
import requester from "../../tools/requester";
import Post from "./Post";

export default class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {
                url:null,
                image:null,
                title:null,
                comments:null
            }
        }
    }

    getPost() {
        const id = this.props.match.params.postid;
        requester.get('appdata', 'posts', 'kinvey')
            .then(posts => posts.find(post => post._id === id)) 
            .then(post => this.setState(post))
    }
    componentDidMount = () => this.getPost();
    render() {
        return (
            <section id="viewComments">
                <div class="post">
                    <article className="post">
                        <div className="col rank">
                            <span>{this.props.index}</span>
                        </div>
                        <div className="col thumbnail">
                            <a href={this.state.url}>
                                <img src={this.state.image} />
                            </a>
                        </div>
                        <div className="post-content">
                            <div className="title">
                                <a href={this.state.url}>
                                    {this.state.title}
                                </a>
                            </div>
                            <div class="details">
                                <div class="info">
                                {this.state.comments}
                                </div>
                            </div>
                        </div>

                    </article>
                </div>
                <div class="post post-content">
                    <form id="commentForm">
                        <label>Comment</label>
                        <textarea name="content" type="text"></textarea>
                        <input type="submit" value="Add Comment" id="btnPostComment" />
                    </form>
                </div>
                <article class="post post-content">
                    <p>Thanks, just what I needed.</p>
                    <div class="info">
                        submitted 5 days ago by Gosho | <a href="#" class="deleteLink">delete</a>
                    </div>
                </article>
                <article class="post post-content">
                    <p>Tutorial is kinda outdated, but it works.</p>
                    <div class="info">
                        submitted 4 days ago by Kiril | <a href="#" class="deleteLink">delete</a>
                    </div>
                </article>
                <article class="post post-content">
                    <p>Beats React any day! So must easier and less boilerplate.</p>
                    <div class="info">
                        submitted 3 days ago by Nakov | <a href="#" class="deleteLink">delete</a>
                    </div>
                </article>
            </section>


        )
    }
}