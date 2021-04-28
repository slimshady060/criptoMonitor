const { signIn, signUp } = require('../controllers/user');

exports.init = (app) => {
  app.get('/', (req, resp) => {
    resp.send({ statusCode: 200, msj: 'Welcome to app' });
  });
  app.post('/api/login', signIn);
  app.post('/api/signup', signUp);
};
