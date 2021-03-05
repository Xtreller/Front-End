const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const localSignupStrategy = require('./passport/local-signup')
const localLoginStrategy = require('./passport/local-login')
const authRoutes = require('./routes/auth')
const authPokedex = require('./routes/pokedex')
const pokemons = require('./data/pokemons')

const app = express()

const port = 5000

const initialPokemon = { name: "Pikachu",
image: 'https://images3.alphacoders.com/100/thumb-1920-1009976.jpg',
info: 'Pikachu[c] is a species of Pokémon, fictional creatures that appear in an assortment of media of the Pokémon franchise by The Pokémon Company. '}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(cors())

passport.use('local-signup', localSignupStrategy)
passport.use('local-login', localLoginStrategy)

// routes
app.use('/auth', authRoutes)
app.use('/pokedex', authPokedex)

app.listen(port, () => {
  pokemons.addPokem(initialPokemon)
  console.log(`Server running on port ${port}...`)
})
