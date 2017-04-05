'use strict'

exports.up = (knex, Promise) => {
  return knex.schema.createTable('customers', (table) => {
    table.increments()
    table.string('email').notNullable()
    table.string('password').notNullable()
});
}
exports.down = (knex, Promise) => knex.schema.dropTable('customers')

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