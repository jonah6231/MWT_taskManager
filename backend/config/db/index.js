const mongoose = require('mongoose');
const env = require('../env');

const connect = async () => {
  try {
    await mongoose.connect(`${env.DB_URL}`, {
      user: env.DB_USERNAME,
      pass: env.DB_PASSWORD,
      dbName: env.DB_NAME,
    });
    console.log(
      `Connected to database successfully! Connected as '${process.env.DB_USERNAME}', using database '${process.env.DB_NAME}'`
    );
  } catch (e) {
    console.error('Failed to connect to database!');
    console.error(e);
  }
};

module.exports = { connect };
