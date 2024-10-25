const mongoose = require('mongoose');
const { getSecretValue } = require('./secrets');

const connectDB = async () => {
  try {
      let secret = await getSecretValue();
      secret = JSON.parse(secret);
      const mongourl = secret['MONGODB_URL']; // Updated key to match the secret object
      console.log('mongourl', mongourl);
    await mongoose.connect(mongourl);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
