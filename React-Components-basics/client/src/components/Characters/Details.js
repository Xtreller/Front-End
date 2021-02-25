import React from 'react';

export default class Details extends React.Component {
    constructor(props){
        super(props);
    }
    render = () => (
            <section id="bio">
                <div className="detailsImg">
                    <img src={this.props.url}/> 
                </div>
                <div >
                    <p>Name: <strong>{this.props.name}</strong></p>
                    <p>Bio:{this.props.bio}</p>
                    <p></p>
                </div>
            </section>
        )
}