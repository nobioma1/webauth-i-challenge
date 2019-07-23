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

const loginUser = async (req, res) => {};

const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error getting User' });
  }
};

module.exports = { userRegister, getAllUsers, loginUser };
