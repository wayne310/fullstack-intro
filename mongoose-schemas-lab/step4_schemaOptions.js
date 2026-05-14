const mongoose = require('mongoose');
const connectDB = require('./db');

connectDB();

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

const run = async () => {
  const product = new Product({
    name: "Laptop",
    price: 1200
  });

  await product.save();
  console.log("STEP 4 SAVED:", product);
};

run();