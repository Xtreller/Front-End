import { post } from "jquery";
import React, { Component } from "react";
import requester from "../../tools/requester";
import calcTime from '../../tools/calulateTime';

export default class Comments extends Component {
    constructor(props) {
        super(props)

    }
    // getComments() {
    //     requester.get('appdata', 'comments/?query=' + { 'postId': this.props.postId }, 'kinvey')
    //         .then(console.log)
    // }

    render() {
        return (

            <article class="post post-content">
                <p>{this.props.comment}</p>
                <div class="info">
                    {/* {calcTime(comment.ect)} | <a href="" class="deleteLink">delete</a> */}
                </div>
            </article>
        )
    }
}