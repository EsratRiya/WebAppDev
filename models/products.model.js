const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: {
    type: Number,
    reuire: true,
  },
  name: {
    type: String,
    reuire: true,
  },
  price: {
    type: Number,
    reuire: true,
  },
  description: {
    type: String,
    reuire: true,
  },
});

module.exports = mongoose.model("Product", productSchema);