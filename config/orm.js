
  
// Dependencies
var connection = require("./connection.js");

// Object Relational Mapper
// 	Here we pass in query parameters for all 3 methods, including callbacks, to receive the data from the model
var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * from ??";
		connection.query(queryString, [table], function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},
	insertOne: function(table, columnName, burgerName, cb) {
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(queryString, [table, columnName, burgerName], function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},
	updateOne: function(table, updateColumnName, updateRowVal, searchColumnName, searchRowVal, cb) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
		connection.query(queryString, [table, updateColumnName, updateRowVal, searchColumnName, searchRowVal], function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	}
};


// Export ORM
module.exports = orm;