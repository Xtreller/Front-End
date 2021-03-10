
import React, { Component } from "react";
import requester from "../../tools/requester";
import Comment from "./Comment";
import Post from "./Post";

let comment;
export default class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post:
            {
                url: null,
                image: null,
                title: null,
                details: null,
                comments: []
            }

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        if(e.target.value!== ''){
        comment = e.target.value;
        }

    }
    handleSubmit(e) {
        e.preventDefault();
        if(comment !== ''){
            this.state.post.comments.push(comment);
            let newArry = this.state.post.comments;
            this.setState({ comments: newArry })
            requester.update('appdata', 'posts/'+ this.props.match.params.postid, 'kinvey', this.state)
            .then(console.log);
        }

    }


    getPost() {
        const id = this.props.match.params.postid;
        requester.get('appdata', 'posts', 'kinvey')
            .then(posts => posts.find(post => post._id === id))
            .then(post => { this.setState(post) })

    }
    componentDidMount = () => this.getPost();
    render() {
        console.log('state.post',this.state.post,'state',this.props.index)
        return (
            <section id="viewComments">
                <Post match={this.props.match} {...this.state} />
                <div class="post post-content">
                    <form id="commentForm" onSubmit={this.handleSubmit}>
                        <label>Comment</label>
                        <input name="comments" type="text" onChange={this.handleChange}></input>
                        <input type="submit" value="Add Comment" id="btnPostComment" />
                    </form>
                </div>
                {this.state.post.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
            </section>


        )
    }
}