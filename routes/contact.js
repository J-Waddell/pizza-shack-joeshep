'use strict'

const { Router } = require('express')

const { show } = require('../controllers/contactCtrl')

const router = Router()

router.get('/contact', show)

module.exports = router