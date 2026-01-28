const  createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/socket.io',
    createProxyMiddleware({
      target: process.env.URLPATH || 'https://shared-pianos-production.up.railway.app',
      changeOrigin: true,
    })
  );
}; 