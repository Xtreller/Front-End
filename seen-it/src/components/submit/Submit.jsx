import React, { Component } from "react";
import observer from '../../tools/observer'
import requester from '../../tools/requester'


export default class Submit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            creator:null,
            url: null,
            title: null,
            image:null,
            details:null,
            comments:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        observer.subscribe(observer.events.loginUser, this.userLoggedIn)
    }
    userLoggedIn = username => {
        this.setState({ username })
    }
    handleChange(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        this.setState({creator:this.state.username,[fieldName]:fieldValue,comments:this.state.comments})
    }
    handleSubmit(e){
        e.preventDefault();
        requester.post('appdata','posts','',this.state)
        .then(console.log(this.state))
        this.props.history.push('/catalog')

    }
    render() {
        return (
            <section id="viewSubmit">
            <div className="submitArea">
                <h1>Submit Link</h1>
                <p>Please, fill out the form. A thumbnail image is not required.</p>
            </div>
            <div className="submitArea formContainer">
                <form id="submitForm" className="submitForm" onSubmit={this.handleSubmit}>
                    <label>Link URL:</label>
                    <input name="url"  type="text" onChange={this.handleChange}/>
                    <label>Link Title:</label>
                    <input name="title"  type="text" onChange={this.handleChange}/>
                    <label>Link Thumbnail Image (optional):</label>
                    <input name="image"  type="text" onChange={this.handleChange}/>
                    <label>Details (optional):</label>
                    <textarea name="details" onChange={this.handleChange}></textarea>
                    <input id="btnSubmitPost" value="Submit" type="submit"/>
                </form>
            </div>
        </section>

        )
    }
}