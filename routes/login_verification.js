// Get all of our friend data
var data = require('../data.json');
exports.view = function(req, res){
var userFound = 0;
	for(var i=0; i<data.users.length; i++)
	{
		if(req.query.pUser.toLowerCase()==data.users[i].email.toLowerCase())
		{
			userFound = 1;
		}
	}
	res.render('login_verification',{"userData":[
		{
			"email": req.query.pUser,
			"userFound": userFound
		}
	]});
};