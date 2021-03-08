import React, { Component } from "react";
import requester from "../../tools/requester";

export default class Catalogue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myPosts:[]
        }
    }
    componentDidMount(){
        requester.get('appdata','posts','')
        .then(console.log)
    }
    render() {
        return (
            this.state.myPosts.map((post,index)=>
            <section id="viewMyPosts">
                <div class="post post-content">
                    <h1>Your Posts</h1>
                </div>
                <div class="posts">
                    <article class="post">
                        <div class="col rank">
                            <span>1</span>
                        </div>
                        <div class="col thumbnail">
                            <a href={post.url}>
                                <img src={post.image}/>
                            </a>
                        </div>
                        <div class="post-content">
                            <div class="title">
                                <a href="http://sammyjs.org/docs/api/0.7.4/all#Sammy.RenderContext-load">
                                    {post.title}
                            </a>
                            </div>
                            <div class="details">
                                <div class="info">
                            </div>
                                <div class="controls">
                                    <ul>
                                        {/* <li class="action"><Route to={}></Route></li> */}
                                        <li class="action"><a class="editLink" href="#">edit</a></li>
                                        <li class="action"><a class="deleteLink" href="#">delete</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div class="clear"></div>
                    </article>
                </div>
            </section>
            )
        )
    }
}