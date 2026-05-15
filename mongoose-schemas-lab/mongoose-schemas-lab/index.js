const connectDB = require('./db');
const Product = require('./models/Product');

connectDB();

const runCRUD = async () => {
  try {

    // CREATE
    const product = new Product({
      name: 'Laptop',
      price: 1200,
      description: 'High-performance laptop',
      dimensions: {
        width: 30,
        height: 20,
        depth: 2
      }
    });

    await product.save();
    console.log('CREATE SUCCESS');
    console.log(product);

    // READ
    const products = await Product.find();
    console.log('READ SUCCESS');
    console.log(products);

    // UPDATE
    const updatedProduct = await Product.findByIdAndUpdate(
      product._id,
      { price: 1500 },
      { new: true }
    );

    console.log('UPDATE SUCCESS');
    console.log(updatedProduct);

    // DELETE
    await Product.findByIdAndDelete(product._id);

    console.log('DELETE SUCCESS');

  } catch (error) {
    console.error(error);
  }
};

runCRUD();