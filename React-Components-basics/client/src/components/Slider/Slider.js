import React from 'react';
import fetcher from '../../fetcher';

const EPISODE_ENDPOINT = '/episodePreview/'

export default class Slider extends React.Component {
    constructor(props){
        super(props);
        this.state={
            url:null,
            id:null
        }}

      fetchEpisode = id => fetcher.get(EPISODE_ENDPOINT + id,data =>this.setState(data));

      changeEpisode = id => fetcher.get(EPISODE_ENDPOINT + id,data =>this.setState(data));
      

      componentDidMount = () =>{
          this.fetchEpisode(0);
      }
    render = () => (
            <section id="slider">
                <img 
                className="button"
                 src="/left.png" 
                title="previous"
                 alt="nav" 
                 onClick={()=>{this.changeEpisode(this.state.id - 1)}}/>
                <div className="image-container">
                    <img src={this.state.url} alt="episode" />
                </div>
                <img 
                className="button" 
                src="/right.png"
                 title="previous"
                  alt="nav" 
                onClick={()=>{this.changeEpisode(this.state.id + 1)}}/>
            </section>
        );
}