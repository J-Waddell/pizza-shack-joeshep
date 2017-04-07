'use strict'

require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes/')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const flash = require('express-flash')
const session = require('express-session')
const { cyan, red } = require('chalk')
const passport = require('passport')
const KnexSessionStore = require('connect-session-knex')(session)
const { knex } = require('./db/database')

//view engine/ pug configuration
app.set('view engine', 'pug')

app.locals.company = "🍕Pizza Shack🍕"
app.locals.body = {}
app.locals.errors = {}
app.locals.body.magic = "FOO FIGHTAZ"

//middle-ware
app.use(cookieParser('secretpizza'))
app.use(session({cookie: {maxAge: 60000}, secret: 'secretpizza', resave: true, saveUninitialize: false}))
app.use(flash())
app.use(bodyParser.urlencoded({extended: false}))
app.use(session({
  store: new KnexSessionStore({
    knex,
    tablename: 'sessions'
  }),
  resave: false,
  saveUninitialize: false,
  secret: process.env.SESSION || 'pizzashacksupersecretkey'
}))

require('./lib/passport-strategies')
app.use(passport.initialize())
app.use(passport.session())

app.use( (req, res, next) => {
  app.locals.email = req.user && req.user.email
  next()
})

app.use(express.static('public'))
app.use(routes)


app.use((req, res) => {
    res.render('404')
})

app.use((err, { method, url, headers: { 'user-agent': agent } }, res, next) => {
   if (process.env.NODE_ENV === 'production') {
     res.sendStatus(err.status || 500)
   } else {
     // Send the stack trace as a response, for debugging purposes
     res.set('Content-Type', 'text/plain').send(err.stack)
   }

   const timeStamp = new Date()
   const statusCode = res.statusCode
   const statusMessage = res.statusMessage

   console.error(
     `[${timeStamp}] "${red(`${method} ${url}`)}" Error (${statusCode}): "${statusMessage}"`
   )
  console.error("Oh, crud!!!!!", err.stack)
 })

// End of Middle-wares

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port} breh`)
})