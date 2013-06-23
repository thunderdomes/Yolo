var config = require('./../config.js');
var mysql = require('mysql');

var connection = mysql.createConnection({ host: config.host, user:config.username, password: config.password, database: config.database});
module.exports = {
  get_recent: function(data,callback) {
  	console.log(callback);
    var query = "SELECT * FROM users LIMIT 10";
    connection.query(query, callback);
    
  },

}