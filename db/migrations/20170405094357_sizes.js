'use strict'

exports.up = (knex, Promise) => {
  return knex.schema.createTable('sizes', (table) => {
    table.increments()
    table.string('name').notNullable().unique()
    table.integer('inches').notNullable()
})
}
exports.down = (knex, Promise) => knex.schema.dropTable('sizes')

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