const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
    const locals = {
        title : "Node JS Blogs",
        descriptions : "Node Js Blog with ejs, mongodb, express"
    }
    res.render("index", locals)
})

router.get("/about", (req, res) => {
    res.render("about")
})


module.exports = router;