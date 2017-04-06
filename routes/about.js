'use strict'

const { Router } = require('express')

const { show } = require('../controllers/aboutCtrl')

const router = Router()

router.get('/about', show)

module.exports = router