const authRoutes = require('../routes/auth')
const authMovies = require('../routes/movies')


module.exports = (app) => {

  app.use('/auth', authRoutes)
  app.use('/catalogue', authMovies)

  app.get('*', (req, res, next) => {
    return res.status(400).json({message:'Not Found'})
  })
}

