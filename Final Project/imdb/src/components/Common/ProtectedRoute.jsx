import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Route, Link } from 'react-router-dom';
import AdminPage from '../User/AdminPage';


function ProtectedRoute({ isAuth: isAuth, component: Component, ...rest }) {
    console.log(Component)
    console.log(isAuth)
    return (
        <Route {...rest}
            render={(props) => {
                if(Component === AdminPage){
                    if(isAuth !== "admin"){
                        return (<Redirect to={{
                            pathname: '/',
                            state: { from: props.location }
                        }} />)
                    }
                }
                if (isAuth) {
                    return <Component />
                }
                else {
                    return (<Redirect to={{
                        pathname: '/',
                        state: { from: props.location }
                    }} />)
                }
            }}
        />
    );
}

export default ProtectedRoute;