const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/aggregationDB");

    console.log("MongoDB Connected");

    const salesSchema = new mongoose.Schema({
      productName: String,
      category: String,
      price: Number,
      quantity: Number
    });

    const Sale = mongoose.model("Sale", salesSchema);

    await Sale.deleteMany();

    await Sale.insertMany([
      { productName: "Phone", category: "Electronics", price: 500, quantity: 2 },
      { productName: "Laptop", category: "Electronics", price: 1000, quantity: 1 },
      { productName: "Shirt", category: "Clothing", price: 20, quantity: 5 },
      { productName: "Shoes", category: "Clothing", price: 50, quantity: 2 },
      { productName: "Headphones", category: "Electronics", price: 100, quantity: 3 }
    ]);

    const result = await Sale.aggregate([
      { $match: { category: "Electronics" } },

      {
        $group: {
          _id: "$category",
          totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
          totalProducts: { $sum: 1 }
        }
      },

      {
        $project: {
          _id: 0,
          category: "$_id",
          totalRevenue: 1,
          totalProducts: 1
        }
      },

      { $sort: { totalRevenue: -1 } }
    ]);

    console.log("Aggregation Result:");
    console.log(result);

  } catch (err) {
    console.log("Error:", err);
  } finally {
    mongoose.connection.close();
  }
}

main();