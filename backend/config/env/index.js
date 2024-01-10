require('dotenv').config();

module.exports = {
  SERVER_PORT: process.env.SERVER_PORT || 5000,
  CORS_FRONTEND_URL: process.env.CORS_FRONTEND_URL || '*',
  DB_URL: process.env.DB_URL || 'mongodb://localhost:12345/',
  DB_USERNAME: process.env.DB_USERNAME || 'mongodocker',
  DB_PASSWORD: process.env.DB_PASSWORD || 'anhdung',
  DB_NAME: process.env.DB_NAME || 'development',
};
