import React from 'react';

import Rooster from './Rooster';
import Details from './Details';
import fetcher from '../../fetcher';

const ROOSTER_ENPOINT = '/roster';
const DETAILS_ENDPOINT = '/character/';

export default class Characters extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images:[],
            details:{
                name: null,
                id: null,
                url: null,
                bio: null
        }}
    }
    fetchRoster = () => fetcher.get(ROOSTER_ENPOINT ,data => 
        this.setState(
            {images: data.map(i=>{
                    return {
                        id:i.id,
                        url:i.url
                    }
                })}
            ))
    fetchDetails = id => fetcher.get(DETAILS_ENDPOINT + id ,data => 
        this.setState({details: data }))

    selectedChar = id => this.fetchDetails(id)

    componentDidMount = () => this.fetchRoster()
    render = () => (
            <div >
                <Rooster images={this.state.images} select={this.selectedChar}/>
                <Details  {...this.state.details}/>
            </div>
        )
}