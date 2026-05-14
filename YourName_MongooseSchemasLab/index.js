const mongoose = require('mongoose');
const connectDB = require('./db');

connectDB();

/* ===================== USER SCHEMA ===================== */
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

const User = mongoose.model('User', userSchema);

/* ===================== PRODUCT SCHEMA ===================== */
const dimensionSchema = new mongoose.Schema({
  width: Number,
  height: Number,
  depth: Number,
  unit: {
    type: String,
    default: 'cm'
  }
});

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
  description: String,
  category: {
    type: String,
    default: 'General'
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  dimensions: dimensionSchema
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

/* ===================== TEST INSERT ===================== */
const run = async () => {
  try {
    await User.create({
      name: "Wayne",
      email: "wayne@test.com",
      password: "123456"
    });

    await Product.create({
      name: "Laptop",
      price: 1200,
      description: "Gaming laptop",
      dimensions: {
        width: 30,
        height: 20,
        depth: 2
      }
    });

    console.log("User and Product created successfully");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
};

run();