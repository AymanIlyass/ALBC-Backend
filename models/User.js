const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    Profile_pic: {
      type: String,
      default: "",
    },
    Birth_date: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    first_name: {
      type: String,
      default: "",
    },
    middle_name: {
      type: String,
      default: "",
    },
    last_name: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    Header_pic: {
      type: String,
      default: "",
    },
    verified: {
      type: String,
      default: "",
    },
    created_at: {
      type: String,
      default: "",
    },
    lang: {
      type: String,
      default: "",
    },
    notifications: {
      type: String,
      default: "",
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);