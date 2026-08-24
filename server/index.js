const express = require('express');
const connectDB = require('./utils/database');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  try{
    connectDB();
    res.send('Hello World!');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});