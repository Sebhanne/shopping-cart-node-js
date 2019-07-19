var express = require("express");
var router = express.Router();

var csrf = require("csurf");
var passport = require("passport");

var Product = require("../models/product");

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get("/", function(req, res, next) {
  Product.find(function(err, docs) {
    /*to fetch all the products*/
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render("shop/index", {
      title: "Shopping Cart",
      products: productChunks
    });
  });
});

router.get("/user/signup", function(req, res, next) {
  res.render("user/signup", {csrfToken: req.csrfToken()});
});
router.post("/user/signup", passport.authenticate("local.signup", { //middleware connected to passport .js
   successRedirect: "/profile", //tell passport to redirect to success
   failureRedirect:"/signup", //otherwise redirect to signup
   failureFlash: true // will flash the message you set up in passport.js "Email" or the flash that we installed 
}));
router.get("/profile", function(req, res, next) {
  res.render("user/profile");
});


// router.post("/user/signup", function(req, res, next) {
//   res.redirect("/"); //change this routes toconnect to passport.js


module.exports = router;

