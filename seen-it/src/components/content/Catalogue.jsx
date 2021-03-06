import React, { Component } from "react";

export default class Catalogue extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section id="viewCatalog">
                <div class="posts">
                    <article class="post">
                        <div class="col rank">
                            <span>1</span>
                        </div>
                        <div class="col thumbnail">
                            <a href="https://softuni.bg/">
                                <img src='seen-it\src\logo.svg' />
                            </a>
                        </div>
                        <div class="post-content">
                            <div class="title">
                                <a href="https://softuni.bg/">
                                    SoftUni
                            </a>
                            </div>
                            <div class="details">
                                <div class="info">
                                    submitted 1 day ago by Kiril
                            </div>
                                <div class="controls">
                                    <ul>
                                        <li class="action"><a class="commentsLink" href="#">comments</a></li>
                                        <li class="action"><a class="editLink" href="#">edit</a></li>
                                        <li class="action"><a class="deleteLink" href="#">delete</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </article>
                </div>
            </section>

        )
    }
}