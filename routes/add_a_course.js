// Get all of our friend data
var models = require('../models');

exports.view = function(req, res){
	console.log(req.query.pUser);
	models.User
		.find({"email": req.query.pUser})
		.limit(1)
		.exec(renderUser);
	function renderUser(err, user){
		//console.log(user);
		console.log("THE FIRST NAME IS " + user[0].first+" " + user[0].last);	
	res.render('add_a_course', {
		"courses":[
			{	
				"author": req.query.pUser,
				"first": user[0].first,
				"last": user[0].last
			}
				]});
	}
	
};