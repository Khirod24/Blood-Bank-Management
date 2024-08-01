const express = require("express");
const app = express();
require("dotenv").config();
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const dbConnect = require("./config/db");

//db connect
dbConnect();

//mw

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
const authRoutes = require("./routes/authRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1",inventoryRoutes);
app.use("/api/v1/analytics",analyticsRoutes);
app.use("/api/v1/admin",adminRoutes);

const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"This is a Home Page"
    })
})

app.listen(PORT,()=>{
    console.log(`Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
    .bgBlue.white);
})