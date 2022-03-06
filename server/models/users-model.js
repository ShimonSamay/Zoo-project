const mongoose = require("mongoose");
const scheme = mongoose.Schema;

const User = new scheme(
  {
    UserName: {
      type: String,
      required: true,
    },

    Email: {
      type: String,
      unique:true,
    },

    Password: {
      type: String,
    },
  },
  { timestamps : true }
);

module.exports = mongoose.model("User", User);
