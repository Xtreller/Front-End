import React from 'react';
import { Redirect } from 'react-router';
import { Route, withRouter } from 'react-router-dom';
import AdminPage from '../User/AdminPage';


function ProtectedRoute({ userRole: userRole, isAuth: isAuth, component: Component, ...rest }) {
  
    return (
        <Route {...rest}
            render={props => {
                if (Component === AdminPage) {
                    if (localStorage.getItem('userRole') !== 'admin') {
                        return (<Redirect to={{
                            pathname: '/',
                            state: { from: props.location }
                        }} />)
                    }
                    else {
                        return <Component />
                    }
                }
                else {
                    if (isAuth) {
                        return <Component />
                    }
                    return (<Redirect to={{
                        pathname: '/',
                        state: { from: props.location }
                    }} />)
                }
            }}
        />
    );
}

export default withRouter(ProtectedRoute);