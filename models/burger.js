const orm = require("../config/orm.js");


const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },
    insertOne: function(insertCol, insertValue, cb) {
        orm.insertOne("burgers", insertCol, insertValue, function(res) {
            cb(res);
        })
    },
    updateOne: function(colToChange, condition, cb) {
        orm.updateOne("burgers", colToChange, condition, function(res) {
            cb(res);
        })
    }
}


module.exports = burger;