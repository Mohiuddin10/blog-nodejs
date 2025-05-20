require("dotenv").config();
const connectDB = require("./server/config/db")

const express = require("express");
const expressLayout = require("express-ejs-layouts");


const app = express();


const PORT = 5000 || process.env.PORT;

// connect DB 
connectDB();

app.use(express.static("public"));

// templating engine 
app.use(expressLayout);
app.set("layout", "./layouts/main")
app.set("view engine", "ejs");


app.use("/", require("./server/routes/main"))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})