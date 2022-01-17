const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: [true, 'Must have a title'],
        maxlength: 40,
        minlength: 10
      },
      description: {
        type: String,
        trim: true
      },
      mood: {
          type: String,
          enum: ['excellent', 'good', 'bad', 'terrible'],
          required: [true, 'Enter a mood']
      },
      createdBy: {
          type: String,
          required: [true, 'Enter a mail']
      },
      postDate: {
        type: Date,
        required: [true, 'Enter a post date']
      }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;