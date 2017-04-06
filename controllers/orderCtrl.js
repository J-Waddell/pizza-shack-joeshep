'use strict'

const Order = require('../models/order')
const { knex } = require('../db/database')
const Size = () => knex('sizes')
const Topping = () => knex('toppings')

const getToppings = () =>
    Topping().select()
    .then( (rows) => rows)
    .catch( (err) => {
        throw error
    })

const getSizes = () =>
    Size().select()
    .then( (rows) => rows)
    .catch( (err) => {
        throw error
    })

module.exports.show = (req, res, err) =>
    Promise.all([getToppings(), getSizes()])
    .then(([toppings, sizes]) =>
        res.render('order', {page: 'Order', sizes, toppings})
        ).catch(err)

module.exports.create = ({ body }, req, res) => {
    Order.forge(body)
        .save()
        .then( (orderObj) => {
            res.render('index', {orderMsg: "Thanks for your order!"})
        })
        .catch( ({errors}) =>
            Promise.all([
                Promise.resolve(errors),
                getSizes(),
                getToppings()
                ])
        )
        .then(([errors, sizes, toppings]) =>
            res.render('order', { page: 'Order', sizes, toppings, errors, body})
        )
        .catch(err)
}