const { validate } = require('express-yup');
const { signIn, signUp } = require('../controllers/user');
const { loginSchema, userSchema } = require('../middlewares/validationSchemas');
const { validateUser, userExists } = require('../middlewares/user');

exports.initRouters = (app) => {
  app.post('/api/login', [validate(loginSchema), validateUser], signIn);
  app.post('/api/signup', [validate(userSchema), userExists], signUp);
  app.get('/', (req, resp) => {
    resp.send({ statusCode: 200, msj: 'Welcome to app' });
  });
};
