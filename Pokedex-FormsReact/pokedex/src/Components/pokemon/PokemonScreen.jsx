import React ,{Component} from 'react';
import CreatePokemon from './CreatePokemon'
import Pokemon from './Pokemon'

class PokemonScreen extends Component{
    constructor() {
        super();
        
        this.state = {
            pokeArray: []
        }
        this.updateRoster = this.updateRoster.bind(this);
    }
    componentDidMount() {
        fetch('http://localhost:5000/pokedex/pokedex')
        .then(rawData => rawData.json())
        .then(response => this.setState({pokeArray: response.pokemonColection}))
    }
    
    updateRoster(newRoster){
        this.setState({
            pokeArray:newRoster
        })
    }
    
    render(){
        return(
            <div className="poke-screen ">
                <CreatePokemon updateRoster={this.updateRoster} />
               {this.state.pokeArray.map((pokemon,index) => <Pokemon key={index} item={pokemon} />)}
            </div>
            )
        }
}

export default PokemonScreen