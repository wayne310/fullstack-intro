const mongoose = require('mongoose');
const connectDB = require('./db');

connectDB();

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String
});

const Product = mongoose.model('Product', productSchema);

const run = async () => {
  const product = new Product({
    name: "Laptop",
    price: 1200,
    description: "Basic schema test"
  });

  await product.save();
  console.log("STEP 1 SAVED:", product);
};

run();