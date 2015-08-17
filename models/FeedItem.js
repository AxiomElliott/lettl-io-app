var mongoose = require('mongoose');

var FeedItemSchema = new mongoose.Schema({
  title: String,
  date: String,
  description: String,
  content: String,
  type: String

});

mongoose.model('FeedItem', FeedItemSchema);
