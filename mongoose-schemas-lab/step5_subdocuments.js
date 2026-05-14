const mongoose = require('mongoose');
const connectDB = require('./db');

connectDB();

const dimensionSchema = new mongoose.Schema({
  width: Number,
  height: Number,
  depth: Number,
  unit: { type: String, default: "cm" }
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  dimensions: dimensionSchema
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

const run = async () => {
  const product = new Product({
    name: "Laptop",
    price: 1200,
    dimensions: {
      width: 30,
      height: 20,
      depth: 2
    }
  });

  await product.save();
  console.log("STEP 5 SAVED:", product);
};

run();