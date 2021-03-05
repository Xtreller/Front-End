let pokemons = []

module.exports = {
    addPokem:(data)=>{
        pokemons.push(data)
    },
    retrivePokemons:()=>{
        console.log('hello from database')
        return pokemons
    },
    cleanPokemonCollection:()=>{
        pokemons = []
        return pokemons
    }
}