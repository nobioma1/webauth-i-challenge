const express = require('express');

const { validateUserFields, checkAuth, checkUsername } = require('../middlewares');
const userController = require('../controllers/users');

const userRouter = express.Router();

userRouter.post('/register', validateUserFields, userController.userRegister);
userRouter.post('/login', validateUserFields, checkUsername, userController.loginUser);
userRouter.get('/restricted/users', checkAuth, userController.getAllUsers);
userRouter.post('/logout', userController.logout);

module.exports = userRouter;
