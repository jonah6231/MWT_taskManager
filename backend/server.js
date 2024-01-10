const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const env = require('./config/env');
const route = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: env.CORS_FRONTEND_URL,
    optionsSuccessStatus: 200,
  })
);

db.connect();

route(app);

app.listen(env.SERVER_PORT, () =>
  console.log(`Server started at port ${env.SERVER_PORT}`)
);
