var mongoose = require('mongoose');

module.exports = mongoose.model('Project', {
  title: String,
  description: String
});