import React, { Component } from "react";
import { Redirect,withRouter } from "react-router-dom";
import observer from '../../tools/observer'
import requester from '../../tools/requester'

class EditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect:false,
            post:{

                creator:  this.props.location.post.creator,
                url: this.props.location.post.url,
                title: this.props.location.post.title,
                image: this.props.location.post.image,
                details: this.props.location.post.details,
                comments: this.props.location.post.comments
            }

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        observer.subscribe(observer.events.loginUser, this.userLoggedIn)
    }
    userLoggedIn = username => {
        this.setState({ username })
    }
    handleChange(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        let updatePost = {};    
        updatePost[fieldName] = fieldValue;
        this.setState(Object.assign(this.state.post,updatePost))
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let postid = this.props.match.params.postid;
        requester.update('appdata', 'posts/' + postid, 'kinvey', this.state.post)
            .then(console.log(this.state))
            .then(this.setState({redirect:true}));

    }
    
    render() {
        if(this.state.redirect){
            return <Redirect to={'/catalog'}/>
        }
        return (
            <section id="viewEdit">
                <div className="submitArea">
                    <h1>Edit Link</h1>
                    <p>Please, fill out the form. A thumbnail image/description is not required.</p>
                </div>
                <div className="submitArea formContainer">
                    <form id="editPostForm" className="submitForm" onSubmit={this.handleSubmit}>
                        <label>Link URL:</label>
                        <input name="url" type="text"
                            defaultValue={this.props.location.post.url} onChange={this.handleChange} />

                        <label>Link Title:</label>
                        <input name="title" type="text" defaultValue={this.props.location.post.title} onChange={this.handleChange} />

                        <label>Link Thumbnail Image (optional):</label>
                        <input name="image" type="text"
                            defaultValue={this.props.location.post.image} onChange={this.handleChange} />

                        <label>Details (optional):</label>
                        <textarea  id="descriptionTextBox" name="details" onChange={this.handleChange} >{this.props.location.post.details}</textarea>
                        <input id="btnEditPost" type="submit" value="Edit Post" />
                    </form>
                </div>
            </section>
        )
    }
}
export default withRouter(EditForm)