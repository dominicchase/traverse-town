// Import dependencies
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Import routes
const authRoute = require("./routes/auth");

// Database connection
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Request Sharing

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoute);

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
