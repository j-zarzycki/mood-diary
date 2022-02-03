const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

mongoose.connect("mongodb://pai:pai123@localhost:27017/paidb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('DB connection successful!'))
.catch((error) => {
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  });
  
  const server = app.listen(8000, () => {
    console.log(`App running on port ${8000}...`);
  });
