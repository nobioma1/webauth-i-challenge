module.exports = (req, res, next) => {
  const { body } = req;
  const hasFields =
    body.hasOwnProperty('username') && body.hasOwnProperty('password');
  if (!hasFields) {
    return res
      .status(200)
      .json({ error: 'username and password are required' });
  }
  next();
};
