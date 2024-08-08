// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/api', '/signup', '/login'],
    createProxyMiddleware({
      target: 'http://localhost:6000',
      changeOrigin: true,
    })
  );
};