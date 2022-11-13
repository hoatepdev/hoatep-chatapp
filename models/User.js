const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
      // min: 6,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("User", UserSchema);
