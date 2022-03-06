const mongoose = require("mongoose");
const scheme = mongoose.Schema;

const Animal = new scheme(
  {
    Name: {
      type: String,
      required: true,
    },

    BirthDate: {
      type: String,
      required: true,
    },

    CageNumber: {
      type: Number,
      required: true,
    },

    Gender: {
      type: String,
      required: true,
    },

    Kind: {
      type: String,
      required: true,
    },
  },
  { timestamps : true }
);

module.exports = mongoose.model("Animal", Animal);
