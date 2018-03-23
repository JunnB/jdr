const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
    title: String,
    text: String,
    next: [{
      id: String,
      text: String
    }],
});

mongoose.model('Story', StorySchema);
module.exports = mongoose.model('Story');
