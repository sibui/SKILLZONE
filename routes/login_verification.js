// Get all of our friend data
//var data = require('../data.json');
var models = require('../models');
exports.view = function(req, res){
var userFound = 0;
	models.User
		.find({"email": req.query.pUser})
		.exec(renderUsers);
		
	function renderUsers(err, users)
	{
		console.log(users);
		if(users[0] != null)
		{
			userFound = 1;
		}
		res.render('login_verification',{"userData":[
		{
			"email": req.query.pUser,
			"userFound": userFound
		}
	]});
	}	
	
};