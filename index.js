var express = require("express");
var login = require('./routes/login')
var app = express();
const db = require('./config');
const product = require("./routes/product");
const fb = db.firestore()
require('dotenv').config()
const PORT = 8000 || process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/", express.static(__dirname + "/public"));
app.use("/product", express.static(__dirname + "/public"));
app.set("view engine", "ejs");


app.get("/products", (req, res) => {

  fb.collection('products').get().then(e=>{
    const data = []
    const doc = e.docs.forEach(e=>{
        data.push({...e.data(),id:e.id})
    })
    console.log();
    res.render("product",{data:data})
  })
});


app.use("/admin",product)

app.use("/admin/login",login)

app.get("/admin/dashboard", (req,res) => {
  fb.collection('products').get().then(e=>{
    const data = []
    const doc = e.docs.forEach(e=>{
        data.push({...e.data(),id:e.id})
    })
    console.log();
    res.render("admin/dashboard",{data:data})
  })
})

var server = app.listen(PORT, function () {
  console.log(`listening to port ${PORT}`);
})
