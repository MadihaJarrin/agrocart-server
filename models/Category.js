const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  details: String,
  Size: String,
  Price: Number
});

module.exports = mongoose.model('Category', categorySchema);
