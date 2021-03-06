import React, { Component } from 'react';
import '../../style/header.css'
import observer from '../../tools/observer';
import { Link } from "react-router-dom";

const Menu = () => {

        return (
            <div id="menu">
                <div className="title">Navigation</div>
                <Link className="nav" to="/catalog">Catalogue</Link>
                <Link className="nav" to="/submit">Submit Link</Link>
                <Link className="nav" to="/myPosts">My Posts</Link>
            </div>
        )
}
export default Menu