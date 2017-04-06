'use strict'

const { Router } = require('express')

const { show, create } = require('../controllers/orderCtrl')

const router = Router()

router.get('/order', show)
router.post('/order', create)

module.exports = router