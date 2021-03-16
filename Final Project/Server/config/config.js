const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 5000,
        dbConnectionString: 'mongodb://localhost:27017/imdb',
        jwtSecret:'randS1ring',
        authCookie : 'auth-cookie'
   },
    production: {}
};

module.exports = config[env];