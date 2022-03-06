const mongoose = require("mongoose");
const scheme = mongoose.Schema;

const Worker = new scheme(
  {
    Name: {
      type: String,
      required: true,
    },

    Role: {
      type: String,
      required: true,
    },

    Email: {
      type: String,
    },

    Phone: {
      type: String,
    },
  },
  { timestamps : true }
);

module.exports = mongoose.model("Worker", Worker);
