require('dotenv').config();
const FRONTEND_DEV_URLS = [ 'http://localhost:3000' ];
const FRONTEND_PROD_URLS = [ process.env.APP_URL ];

module.exports = process.env.NODE_ENV === 'production'
  ? FRONTEND_PROD_URLS
  : FRONTEND_DEV_URLS;