const bcrpyt = require('bcryptjs');
const generatePassword = require('../helper/generatePassword');
const { addUser, getUsers } = require('../models/usersModel');

const userRegister = async (req, res) => {
  const { username, password } = req.body;
  const newUser = {
    username,
    password: generatePassword(password),
  };
  try {
    const user = await addUser(newUser);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error Creating User' });
  }
};

const loginUser = async (req, res) => {
  const {
    body: { password },
    user,
  } = req;

  const passwordValid = bcrpyt.compareSync(password, user.password);
  if (passwordValid) {
    req.session.user = user;
    return res.status(200).json({
      message: `Welcome ${user.username}!`,
    });
  }
  return res.status(400).json({ error: '🚪Thou Shalt Not Pass 🔑' });
};

const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error getting User' });
  }
};

const logout = (req, res) => {
  if (req.session) {
    req.session.destroy();
  }
  res.status(200).end();
};

module.exports = { userRegister, getAllUsers, loginUser, logout };
