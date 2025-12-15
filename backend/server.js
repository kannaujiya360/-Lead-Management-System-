const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Routes
const leadRoutes = require("./routes/leadRoutes");
const metaRoutes = require("./routes/meta.routes");
const googleRoutes = require("./routes/google.routes");

// Load env
dotenv.config();

// Connect DB
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
"https://lead-management-tt06.onrender.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false
}));
app.use(express.json());

// Routes
app.use("/api/leads", leadRoutes);
app.use("/api/meta", metaRoutes);
app.use("/api/google", googleRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Automated LMS Backend Running...");
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
