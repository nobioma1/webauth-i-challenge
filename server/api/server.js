const express = require('express');
const cors = require('cors');
const session = require('express-session');

const userRouter = require('../api/routes/userRoutes');

const server = express();

server.use(express.json());
server.use(cors());
server.use(
  session({
    name: 'sessionId',
    secret: `shhh, this is my secret! don't tell my mom`,
    cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false,
      httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
  }),
);

server.use('/api', userRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Users API' });
});

module.exports = server;
