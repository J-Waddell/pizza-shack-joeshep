'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('toppings', (table) => {
    table.increments()
    table.string('name').notNullable()
};

exports.down = (knex, Promise) => knex.schema.dropTable('toppings')

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