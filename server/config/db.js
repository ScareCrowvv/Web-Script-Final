require('dotenv').config(); 

module.exports = {
  URI: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hyam1.mongodb.net/`
};