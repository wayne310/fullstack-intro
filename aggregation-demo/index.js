const mongoose = require("mongoose");

async function run() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/aggregationDB");
    console.log("Database Connected");

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
      { productName: "Tablet", category: "Electronics", price: 300, quantity: 3 },
      { productName: "Shirt", category: "Clothing", price: 20, quantity: 5 },
      { productName: "Shoes", category: "Clothing", price: 50, quantity: 2 },
      { productName: "Watch", category: "Accessories", price: 200, quantity: 2 }
    ]);

    const report = await Sale.aggregate([
      { $match: {} },

      {
        $group: {
          _id: "$category",
          totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
          totalItems: { $sum: 1 }
        }
      },

      {
        $project: {
          _id: 0,
          category: "$_id",
          totalRevenue: 1,
          totalItems: 1
        }
      },

      { $sort: { totalRevenue: -1 } }
    ]);

    console.log("\n===== SALES REPORT =====");
    report.forEach(r => {
      console.log(`Category: ${r.category}`);
      console.log(`Total Revenue: ${r.totalRevenue}`);
      console.log(`Total Items: ${r.totalItems}`);
      console.log("----------------------");
    });

  } catch (err) {
    console.log("Error:", err);
  } finally {
    mongoose.connection.close();
  }
}

run();