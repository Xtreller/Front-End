import React from 'react';
import { Redirect } from 'react-router';
import { Route, withRouter } from 'react-router-dom';
import AdminPage from '../User/AdminPage';
import AddMovies from '../Movies/AddMovies';
import EditMovie from '../Movies/EditMovie';
import Delete from '../Movies/Delete';


function ProtectedRoute({ userRole, component: Component, ...rest }) {

    return (
        <Route {...rest}
            render={props => {
                if (Component === AdminPage || Component === AddMovies) {
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
                if (Component === Delete || Component === EditMovie) {
                    let movieid = rest.location.pathname.split('/')[rest.location.pathname.split('/').length - 1]
                    console.log(movieid)
                    if (localStorage.getItem('userRole') !== 'admin') {
                        return (<Redirect to={{
                            pathname: '/',
                            state: { from: props.location }
                        }} />)
                    }
                    else {
                        return <Component id={movieid} />
                    }
                }
                else {
                    const isAuth = localStorage.getItem('token');
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