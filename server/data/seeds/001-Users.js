const generatePassword = require('../../api/helper/generatePassword');

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'firestorm',
          password: generatePassword('admin_seed1'),
        },
        {
          username: 'blender_mix123',
          password: generatePassword('admin_seed2'),
        },
        {
          username: 'fliderdlint',
          password: generatePassword('admin_seed3'),
        },
      ]);
    });
};
