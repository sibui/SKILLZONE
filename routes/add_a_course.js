// Get all of our friend data

exports.view = function(req, res){
	console.log(req.query.pUser);
	res.render('add_a_course', {"courses":[{"author": req.query.pUser}]});
};