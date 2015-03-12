// Get all of our friend data
var models = require('../models');
exports.view = function(req, res){
	console.log(req.query.courseName);
	var total = Number(req.query.avgRating) * Number(req.query.numRating) + Number(req.query.rating);
	console.log(total);
	var numRaters = Number(req.query.numRating) + 1;
	var avg = Math.ceil	(total/numRaters);
	
	
	models.Project.update({"courseName": req.query.courseName},{$set:{"numRaters": numRaters, "rating": avg, "rated": "true"}},{upsert:true},callback);
	
	function callback(err)
	{
		res.render('rate_course', {"course":[{"courseName": req.query.courseName}]});
	}
	
};