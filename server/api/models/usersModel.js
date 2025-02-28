const db = require('../../data/dbConfig');

const findByUsername = (username) => {
  return db('users')
    .select('id', 'username', 'password')
    .where({ username })
    .first();
};

const findByUserId = id => {
  return db('users')
    .select('id', 'username')
    .where({ id })
    .first();
};

const addUser = user => {
  return db('users')
    .insert(user)
    .then(([ids]) => findByUserId(ids));
};

const getUsers = () => {
  return db('users').select('id', 'username');
};

module.exports = { findByUsername, addUser, getUsers };
