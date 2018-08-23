var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burger: data
      };
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, false //was req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.redirect("/");
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log(condition);
  
    burger.update({
      devoured: true
    }, condition, function(result) {
      res.redirect("/");
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;

//create and export router here