exports.up = (knex) => {
  return knex.schema.createTable('users', table => {
    table.increments();
    table
      .string('username', 100)
      .unique()
      .notNullable();
    table
      .string('password')
      .notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('users');
};
