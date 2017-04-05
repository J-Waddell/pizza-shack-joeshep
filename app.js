'use strict'

require('dotenv').config()
const express = require('express')
const app = express()

const routes = require('./routes/')
const bodyParser = require('body-parser')

//view engine/ pug configuration
app.set('view engine', 'pug')

app.locals.company = "🍕Pizza Shack🍕"

//middle-ware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(routes)


// app.get('/contact', (req, res, next) => {
//     res.render('contact', {page: 'Contact'})
// })

app.get('/login', (req, res, next) => {
    res.render('login', {page: 'Login'})
})

app.get('/register', (req, res, next) => {
    res.render('register', {page: 'Register'})
})

app.use((req, res) => {
    res.render('404')
})

// End of Middle-wares

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port} breh`)
})