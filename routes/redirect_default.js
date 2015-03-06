// Get all of our friend data
var models = require('../models');

exports.view = function(req, res){
	
	models.User
		.find({"email": req.query.pUser})
		.limit(1)
		.exec(renderUser);
	function renderUser(err, user){
		console.log(user);
	res.render('redirect_default', {'singleUser': user});	
	}
};