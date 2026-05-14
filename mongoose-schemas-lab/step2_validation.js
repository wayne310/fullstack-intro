const mongoose = require('mongoose');
const connectDB = require('./db');

connectDB();

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
});

const Product = mongoose.model('Product', productSchema);

const run = async () => {
  try {
    const product = new Product({
      price: -100
    });

    await product.save();
  } catch (error) {
    console.log("STEP 2 VALIDATION ERROR:");
    console.log(error.errors);
  }
};

run();