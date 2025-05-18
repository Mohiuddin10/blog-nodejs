require("dotenv").config();

const express = require("express");

const app = express();

const PORT = 5000 || process.env.PORT;

app.get("", (req, res) => {
    res.send("Hello from 5000")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})