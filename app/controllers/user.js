const userService = require('../services/user');

exports.signIn = (req, res) => {
  const authToken = userService.generateToken(req.user);
  res.status(200).json({ authToken });
};
exports.signUp = () => {
  console.log('register controller');
};
