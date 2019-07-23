const express = require('express');

const validateUserFields = require('../middlewares/validateUserFields');
const { userRegister, getAllUsers, loginUser } = require('../controllers/users');

const userRouter = express.Router();

userRouter.post('/register', validateUserFields, userRegister);
userRouter.post('/login', validateUserFields, loginUser);
userRouter.get('/users', getAllUsers);

module.exports = userRouter;
