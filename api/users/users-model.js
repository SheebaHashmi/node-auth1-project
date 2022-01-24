/**
  resolves to an ARRAY with all users, each user having { user_id, username }
 */
const db = require('../../data/db-config')
function find() {
  return db('users')
}

/**
  resolves to an ARRAY with all users that match the filter condition
 */
async function findBy(filter) {
  const result  = await db('users').where('users.user',filter)
  console.log(result)
  return result;

}

/**
  resolves to the user { user_id, username } with the given user_id
 */
function findById(user_id) {
  return 'find by Id'
}

/**
  resolves to the newly inserted user { user_id, username }
 */
function add(user) {
  return 'ADDED'
}

// Don't forget to add these to the `exports` object so they can be required in other modules
module.exports = {
  find,
  findBy,
  findById,
  add
}