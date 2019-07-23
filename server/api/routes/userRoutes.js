const express = require('express');

const { validateUserFields, checkAuth } = require('../middlewares');
const userController = require('../controllers/users');

const userRouter = express.Router();

userRouter.post('/register', validateUserFields, userController.userRegister);
userRouter.post('/login', validateUserFields, userController.loginUser);
userRouter.get('/restricted/users', checkAuth, userController.getAllUsers);

module.exports = userRouter;
