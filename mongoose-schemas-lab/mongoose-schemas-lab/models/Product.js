const mongoose = require('mongoose');

// Subdocument schema
const dimensionSchema = new mongoose.Schema({
  width: Number,
  height: Number,
  depth: Number,
  unit: {
    type: String,
    default: 'cm'
  }
});

// Product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true,
    min: 0
  },

  description: {
    type: String
  },

  category: {
    type: String,
    default: 'General'
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  isAvailable: {
    type: Boolean,
    default: true
  },

  dimensions: dimensionSchema

}, { timestamps: true });

// Create model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;