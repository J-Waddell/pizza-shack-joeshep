'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', (table) => {
    table.increments()
    table.string('name').notNullable().required()
    table.string('email').notNullable().required()
    table.string('phone').notNullable().required()
    table.string('message').notNullable().required()
};

exports.down = (knex, Promise) knex.schema.dropTable('contacts')

// Contacts:
// name, email, phone, message  -- required strings

// [3:29]  
// Topping:
// name -- string

// [3:30]  
// Sizes:
// name, inches -- string and integer

// [3:31]  
// Orders:
// name, email, phone, size, topping

// [3:31]  
// Users:
// email, password -- strings