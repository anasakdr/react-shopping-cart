const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/shopping-db",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// //Set up default mongoose connection
// var mongoDB = 'mongodb://127.0.0.1/shopping-db';
// mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});


const Product = mongoose.model
("products",
 new mongoose.Schema({
    _id:{type: String, default: shortid.generate},
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSize: [String],
}))
// list product
app.get("/api/products", async (req, res)=>{
    const products = await Product.find({});
    res.send(products);
})
// add product
app.post("/api/products", async (req, res)=>{
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct)
})
// delete product
app.delete("/api/products/:id", async(req, res)=>{
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
})

const Order = mongoose.model("orders", new mongoose.Schema({
  _id:{
    type: String,
    default:shortid.generate
  },
  email: String,
  name: String,
  address: String,
  total: Number,
  cartItems:[{
    _id: String,
    title: String,
    price: Number,
    count: Number,
  },
],
},{
  timestamp:true,
}
));

// list  Order
app.get("/api/orders", async (req, res)=>{
  const orders = await Order.find({});
  res.send(orders);
})

app.post("/api/orders", async(req, res)=>{
  if(!req.body.name || !req.body.email || !req.body.address || !req.body.total || !req.body.cartItems){
    return res.send({ message: "Data is required."})
  }
  const order = await Order(req.body).save();
  res.send(order);
});

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log("server at http://localhost:5000"));

// checkRequestKeys(['param', 'id'])