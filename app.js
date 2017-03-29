'use strict'

require('dotenv').config()
const express = require('express')
const app = express()

//view engine/ pug configuration
app.set('view engine', 'pug')

//middle-ware
app.use(express.static('public'))

app.get('/', (req, res, next) => {
    res.render('index')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port} breh`)
})