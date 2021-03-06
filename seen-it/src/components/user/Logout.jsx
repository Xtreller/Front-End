import React, { Component } from 'react';
import requester from '../../tools/requester';

export default class Logout extends Component {
    logout = () =>{
        requester.post('user','_logout','kinvey')
        .then(res=>sessionStorage.removeItem('authtoken'))
    }
    render = () => <Redirect to='/'/>
}