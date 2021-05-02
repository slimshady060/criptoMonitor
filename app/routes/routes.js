const { validate } = require('express-yup');
const userController = require('../controllers/user');
const {
  loginSchema,
  newUserSchema,
  addCriptoSchema,
} = require('../middlewares/validationSchemas');
const { validateUser, userExists } = require('../middlewares/user');
const { getAllCriptos } = require('../controllers/cripto');
const { requireToken, getUserFromToken } = require('../middlewares/auth');
const { getCripto } = require('../middlewares/cripto');

exports.initRouters = (app) => {
  // user routes
  app.post('/login', [validate(loginSchema), validateUser], userController.signIn);
  app.post('/user/signup', [validate(newUserSchema), userExists], userController.signUp);
  app.post(
    '/user/addCripto',
    [validate(addCriptoSchema), requireToken, getUserFromToken, getCripto],
    userController.addCripto,
  );

  // coints routes
  app.get('/cripto/list/:page', [requireToken], getAllCriptos);
};
