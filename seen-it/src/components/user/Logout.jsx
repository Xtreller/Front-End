import React, { Component } from 'react';
import requester from '../../tools/requester';
import { Redirect } from "react-router-dom";


export default class Logout extends Component {
    logout = () =>{
        requester.post('user','_logout','kinvey')
        .then(console.log(sessionStorage.getItem('authtoken')))
        .then(sessionStorage.removeItem('authtoken'))
    }
    render = () => {
    this.logout()   
   return <Redirect to='/'/>    
    }
}