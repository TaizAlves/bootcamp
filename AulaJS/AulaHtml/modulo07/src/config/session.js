const session = require('express-session')
const pgSession = require('connect-pg-simple')(session) //ele cria uma função e passo para dentro da função o session
const db = require('./db')

module.exports = session({
    store: new pgSession({              //cria a sessão e guarda no banco de dados
        pool: db
    }),
    secret: 'iabadabaduuuu',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000    //quanto tempo tem que serem miliseguntos= 30 diasx24hsx60minx60segxmiliseguntos
    }
})
