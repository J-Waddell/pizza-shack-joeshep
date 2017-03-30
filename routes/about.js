'use strict'

const { Router } = require('express')

const { show } = require('../controllers/about')

const router = Router()

router.get('/about', show)

module.exports = router