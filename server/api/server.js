const express = require('express');
const cors = require('cors');

const userRouter = require('../api/routes/userRoutes');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api', userRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Users API' });
});

module.exports = server;
