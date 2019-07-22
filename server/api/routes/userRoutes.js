const express = require('express');

const { userRegister, getUsers, loginUser } = require('../controllers/users');

const userRouter = express.Router();

userRouter.post('/register', userRegister);
userRouter.post('/login', loginUser);
userRouter.get('/users', getUsers);

module.exports = userRouter;
