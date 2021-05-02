const axios = require('axios');

const buildRequest = ({
  url, method, headers, data, params,
}) => ({
  method,
  url,
  headers,
  json: true,
  data,
  params,
});

exports.rq = (options) => axios(buildRequest(options));
