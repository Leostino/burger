const connection = require("../config/connection.js");

const orm = {
    selectAll: function(tableName, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString,[tableName], function(err, result) {

            if (err) {
                throw err;
              }
              cb(result);
        })
    },
    insertOne: function(tableName, insertCol, insertValue, cb) {
        let queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString,[tableName, insertCol, insertValue], function(err, result) {

            if (err) {
                throw err;
              }
              cb(result);
        })
    },
    updateOne: function(tableName, colObj, condition, cb) {
        let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString,[tableName, colObj, condition], function(err, result) {

            if (err) {
                throw err;
              }
              cb(result);
        })
    }
}


module.exports = orm;