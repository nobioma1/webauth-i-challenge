const { findByUsername } = require('../models/usersModel');

module.exports = async (req, res, next) => {
  const { username } = req.body;
  try {
    const user = await findByUsername(username);
    if (user) {
      next();
    } else {
      res.status(400).json({ error: 'User with Username does not Exit ❗' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error validating User' });
  }
};
