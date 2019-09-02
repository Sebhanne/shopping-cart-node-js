var Product = require("../models/product");

var mongoose = require("mongoose");
// mongoose.connect("localhost:27017/shopping");
mongoose.connect("mongodb://localhost:27017/shopping", {
  useNewUrlParser: true
});

var product = [
  new Product({
    imagePath: "images/1.jpg",
    title: "Cakes",
    description: "Awesome Cakes!!",
    price: 10
  }),
  new Product({
    imagePath: "images/2.jpg",
    title: "Cakes",
    description: "Awesome Cakes!!",
    price: 20
  }),
  new Product({
    imagePath: "images/7.jpg",
    title: "Cakes",
    description: "Awesome Cakes!!",
    price: 30
  }),
  new Product({
    imagePath: "images/4.jpg",
    title: "Cakes",
    description: "Awesome Cakes!!",
    price: 40
  }),
  new Product({
    imagePath: "images/5.jpg",
    title: "Cakes",
    description: "Awesome Cakes!!",
    price: 50
  }),
  new Product({
    imagePath: "images/6.jpg",
    title: "Cakes",
    description: "Awesome Cakes!!",
    price: 60
  })
];
var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}
function exit() {
  mongoose.disconnect();
}
