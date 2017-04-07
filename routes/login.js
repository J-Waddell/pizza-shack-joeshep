'use strict'

const { Router } = require('express')

const {show, create} = require('../controllers/sessionCtrl')

const router = Router()

router.get('/login', session.show)
router.post('/login', session.create)

module.exports = router