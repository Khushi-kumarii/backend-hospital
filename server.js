const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/database"); 
const mealPlanRoutes = require("./src/routes/mealPlanRoutes"); 


const loggerMiddleware = require("./src/middlewares/loggerMiddleware");
const authMiddleware = require("./src/middlewares/authMiddleware");
const errorMiddleware = require("./src/middlewares/errorMiddleware");

const patientRoutes = require("./src/routes/patientRoutes");
const dietChartRoutes = require("./src/routes/dietChartRoutes");
const authRoutes = require("./src/routes/authRoutes");

dotenv.config();

const app = express();

app.use(express.json());

// Enable CORS
app.use(cors());

app.use(loggerMiddleware);

// Connect to MongoDB
connectDB();

// Public Routes
app.use("/api/public", (req, res) => res.json({ message: "Welcome to Hospital Food Management System" }));
app.use("/api", authRoutes);  

// Protected Routes
app.use("/api/patients", authMiddleware, patientRoutes);  
app.use("/api/diet-charts", authMiddleware, dietChartRoutes);  
app.use("/api/meal-plans", authMiddleware, mealPlanRoutes);  

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
