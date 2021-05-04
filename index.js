const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const errors = require('./app/middlewares/errors');
const routes = require('./app/routes/routes');
const config = require('./config');

const swaggerDocument = YAML.load('./documentation/swagger.yaml');

const initServer = () => {
  const app = express();
  app.use(express.json());
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  const { port } = config.api;
  Promise.resolve()
    .then(() => {
      routes.initRouters(app);
      app.use(errors.handle);
      app.listen(port);
      console.info(`Listening on port: ${port}`);
    })
    .catch((err) => console.error(err));
};
initServer();
