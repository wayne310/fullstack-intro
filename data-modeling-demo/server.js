require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");

const demoRoutes = require("./routes/demo.route");

const app = express();

app.use(express.json());


// DATABASE CONNECTION
connectDB();


// ROUTES
app.use("/", demoRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});