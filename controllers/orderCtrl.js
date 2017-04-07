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
        res.render('order', {orderMsg: 'Order', sizes, toppings})
        ).catch(err)


module.exports.create = ({ body }, res, err) => {
    // console.log("body", body)
    Order.forge(body)
        .save()
        .then( (orderObj) => {
            req.flash('orderMsg', 'Thank you for your purchase!🏡')
            res.redirect('/')
        })
        .catch( (err) => {
            console.log("Errors!", err)
            Promise.all([
                Promise.resolve(err),
                getSizes(),
                getToppings()
            ])
        .then(([errors, sizes, toppings]) =>
            res.render('order', { page: 'Order', sizes, toppings, errors, body})
        )
    })
    .catch(err)
}