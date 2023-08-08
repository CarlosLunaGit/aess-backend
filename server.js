const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const routes = require('./routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Welcome to AESS backend server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
