import React, { Component } from "react";
import Post from "./Post";
import requester from "../../tools/requester";

export default class Catalogue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    getPosts = () => {
        requester.get('appdata', 'posts', 'kinvey')
        .then(res=>{this.setState({posts: res})})
    }
    componentDidMount = () => this.getPosts();
    render = () => (
        <section id="viewCatalog">
            {this.state.posts.length>0 ?
             (this.state.posts.map((posts, i) => <Post key={posts._id} index={i} {...posts} />))
           : (<h3 className='posts'>There are no posts or u r not authorized</h3>)}
        </section>
    )
}