import React, { Component } from "react";

export default class Comments extends Component {
    
   
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