import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import requester from "../../tools/requester";

class DeletePost extends Component {
    constructor(props){
        super(props)
    }
    deletePost(){
        requester.remove('appdata','posts/'+this.props.match.params.postid,'Kinvey')
        return <Redirect to='/catalog'/>
    }
    render(){
        return this.deletePost()
    }
}
export default DeletePost