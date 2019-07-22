const bcrypt = require('bcryptjs');
const md5 = require('md5');

const generatePassword = password => {
  return bcrypt.hashSync(password, 12);
};

// custom crypt with md5

const customCrypt = {
  hash(rawPassword, iterations, salt) {
    // computes random salt
    const randSalt = salt ? salt : new Date().getTime();
    // md5 the concatenated rawPassword + salt
    let pwdSalt = `${md5(rawPassword)}$${randSalt}`;
    // does it "iterations" number of
    let i = 0;
    do {
      pwdSalt = `$${randSalt}$${iterations}$${md5(pwdSalt)}`;
      i++;
    } while (i < iterations);
    return pwdSalt;
  },

  compare(rawPassword, cryptHash) {
    // pull the number of iterations and the salt from the sillyBcryptHash
    const hashSplit = cryptHash.split('$');
    // recompute a hash
    const passwordHash = this.hash(rawPassword, hashSplit[2], hashSplit[1]);
    // check that results are identical
    return passwordHash === cryptHash;
  },
};

module.exports = generatePassword;
