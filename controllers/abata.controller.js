

const abata = require("../models/models_table.js");





exports.login = (req, res) => {


var username = req.body.username;
	var password = req.body.password;
	console.log(username);
	if (username && password) {
		connection.query('SELECT * FROM operator WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;

			} else {
				res.send('Incorrect Username and/or Password!');
			}
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});
}
