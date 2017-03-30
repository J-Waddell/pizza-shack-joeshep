'use strict'

const { Router } = require('express')

const { show } = require('../controllers/orderCtrl')

const router = Router()

router.get('/order', show)

module.exports = router