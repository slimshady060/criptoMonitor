const userService = require('../services/user');
const { toHash } = require('../utils/crypto');

exports.signIn = (req, res, next) => {
  try {
    const userInfo = {
      id: req.user.id,
      userName: req.user.username,
      currency: req.user.currency,
      name: req.user.name,
      lastName: req.user.lastName,
    };
    const authToken = userService.generateToken(userInfo);
    res.status(200).json({ authToken });
  } catch (error) {
    next(error);
  }
};

exports.signUp = async (req, res, next) => {
  req.body.password = toHash(req.body.password);
  try {
    await userService.createUser(req.body);
    res.status(201).json({ sucess: 'User created' });
  } catch (error) {
    next(error);
  }
};
