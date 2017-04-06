'use strict'

const Contact = require('../models/contact')

module.exports.show = (req, res) => {
    res.render('contact', {page: 'Contact'})
}
module.exports.addContent = ({body}, res, err) => {
    Contact.forge(body)
    .save()
    .then( () => res.redirect('/') )
    .catch(err)
}