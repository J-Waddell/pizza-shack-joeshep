'use strict'

const { Router } = require('express')

const { show, addContent } = require('../controllers/contactCtrl')

const router = Router()

router.get('/contact', show)

router.post('/contact', addContent)

module.exports = router