'use strict'

const { Router } = require('express')
const user = require('../controllers/userCtrl')
const router = Router()

router.get('/register', user.show)
router.post('/register', user.create)

module.exports = router