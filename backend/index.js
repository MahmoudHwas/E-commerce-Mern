const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes");
const cookieParser = require("cookie-parser")
require("dotenv").config();
const app = express()

app.use(cors({
    origin: "*",
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api", router)
const PORT= 8080 || process.env.PORT;



connectDB()
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    
})