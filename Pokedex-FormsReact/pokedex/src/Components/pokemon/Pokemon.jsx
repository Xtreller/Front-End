import React from 'react';

const Pokemon = props => (
    <div className="d-inline-block w-25 h-25 m-1 p-2">
    <div className="card h-50 " >
        <img className="card-img-top " src={props.item.image || 'https://wallpapercave.com/wp/wp2432874.jpg'} alt="Pikachu"></img>
            <div className="card-body">
                <h5 className="card-title">{props.item.name || 'Name'}</h5>
                <p className="card-text">{props.item.info}</p>
            </div>
    </div>
    </div>
)

export default Pokemon