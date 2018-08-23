var orm = require("../config/orm");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers_db.burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.insertOne("burgers_db.burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers_db.burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;