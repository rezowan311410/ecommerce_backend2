const mongoose = require('mongoose');

  function db_connect (){
      
     mongoose.connect(process.env.DATABASE_URL)
     .then(() => console.log('Connected! of your mongodb'));
  }

  module.exports = db_connect