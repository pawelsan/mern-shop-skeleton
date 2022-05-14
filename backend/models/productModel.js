const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Proszę dodać nazwę produktu"],
    },
    category: {
      type: String,
      required: [true, "Proszę dodać kategorię produktu"],
    },
    ingredients: {
      type: Array,
      required: [true, "Proszę dodać składniki produktu"],
    },
    price: {
      type: Number,
      required: [true, "Proszę dodać cenę produktu"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
