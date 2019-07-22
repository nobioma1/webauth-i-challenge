const bcrypt = require('bcryptjs');

const generatePassword = password => {
  return bcrypt.hashSync(password, 12);
};

module.exports = generatePassword;
