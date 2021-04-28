const express = require('express');
const morgan = require('morgan');
const errors = require('./app/middlewares/errors');
const routes = require('./app/routes/routes');
const config = require('./config');

const initServer = () => {
  const app = express();
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  const { port } = config.api;
  Promise.resolve()
    .then(() => {
      routes.init(app);
      app.use(errors.handle);
      app.listen(port);
      console.info(`Listening on port: ${port}`);
    })
    .catch((err) => console.error(err));
};
initServer();
