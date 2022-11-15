const express = require('express')
const app = express()
const methodOverride = require('method-override')
const item = require("./models/items.js")

require('dotenv').config()

const PORT = process.env.PORT

//middleware
app.use(express.static('./public'));
app.use(express.urlencoded({extended: false }));
app.use(methodOverride("_method"));

// Index
app.get("/items", (req, res)=>{
    res.render("index.ejs", {
        item,
    })
})
//SHOW
app.get("/items/:id", (req, res)=>{
    res.render("show.ejs", {
      item: item[req.params.id]
    });
});








app.listen(PORT, () => {
    console.log(`living ${PORT}`)
  });