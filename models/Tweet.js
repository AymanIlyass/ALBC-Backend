const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    location: {
      type: String,
     
    },
    theme: {
      type: String,
      required: true,
    },
    sensitive_content: {
      type: String,
      required: true,
    },
    draft: {
      type: String,
      required: true,
    },
    URL: {
      type: String,
    },
    Date_publication: {
      type: Date,
      
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);